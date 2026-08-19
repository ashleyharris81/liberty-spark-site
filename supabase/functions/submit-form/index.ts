import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';
import { z } from 'npm:zod@3.23.8';

const NOTIFY_TO = 'sales@libertyguard.co.uk';
const NOTIFY_FROM = Deno.env.get('SENDGRID_FROM') ?? 'sales@libertyguard.co.uk';


const contactSchema = z.object({
  type: z.literal('contact'),
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().max(100).optional().default(''),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().max(200).optional().default(''),
  message: z.string().trim().min(1).max(2000),
  source: z.string().trim().max(100).optional().default(''),
});

const accountSchema = z.object({
  type: z.literal('account'),
  companyName: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(255),
  details: z.record(z.string().max(2000)).default({}),
});

const bodySchema = z.discriminatedUnion('type', [contactSchema, accountSchema]);

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const rows = (entries: [string, string][]) =>
  entries
    .filter(([, v]) => v && v.trim() !== '')
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;font-weight:bold;vertical-align:top">${escapeHtml(
          k,
        )}</td><td style="padding:6px 0">${escapeHtml(v).replace(/\n/g, '<br />')}</td></tr>`,
    )
    .join('');

async function notify(subject: string, html: string) {
  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!supabaseUrl || !serviceKey) return;

  const admin = createClient(supabaseUrl, serviceKey);
  try {
    const { error } = await admin.functions.invoke('send-transactional-email', {
      body: {
        templateName: 'form-notification',
        recipientEmail: NOTIFY_TO,
        idempotencyKey: `form-${crypto.randomUUID()}`,
        templateData: { subject, html },
      },
    });
    if (error) console.error('Email notification failed:', error.message);
  } catch (e) {
    console.error('Email notification unavailable:', e instanceof Error ? e.message : e);
  }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const json = (payload: unknown, status = 200) =>
    new Response(JSON.stringify(payload), {
      status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  try {
    const parsed = bodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return json({ error: 'Invalid submission', details: parsed.error.flatten().fieldErrors }, 400);
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    if (!supabaseUrl || !serviceKey) {
      return json({ error: 'Server not configured' }, 500);
    }
    const admin = createClient(supabaseUrl, serviceKey);

    if (parsed.data.type === 'contact') {
      const d = parsed.data;
      const { error } = await admin.from('contact_submissions').insert({
        first_name: d.firstName,
        last_name: d.lastName || null,
        email: d.email,
        subject: d.subject || null,
        message: d.message,
        source: d.source || null,
      });
      if (error) {
        console.error('Insert failed:', error.message);
        return json({ error: 'Could not save your enquiry' }, 500);
      }

      await notify(
        `New website enquiry from ${d.firstName} ${d.lastName}`.trim(),
        `<table>${rows([
          ['Name', `${d.firstName} ${d.lastName}`.trim()],
          ['Email', d.email],
          ['Subject', d.subject],
          ['Message', d.message],
          ['Page', d.source],
        ])}</table>`,
      );

      return json({ ok: true });
    }

    const d = parsed.data;
    const { error } = await admin.from('account_applications').insert({
      company_name: d.companyName,
      email: d.email,
      details: d.details,
    });
    if (error) {
      console.error('Insert failed:', error.message);
      return json({ error: 'Could not save your application' }, 500);
    }

    await notify(
      `New account application — ${d.companyName}`,
      `<table>${rows(Object.entries(d.details))}</table>`,
    );

    return json({ ok: true });
  } catch (e) {
    console.error('submit-form error:', e instanceof Error ? e.message : e);
    return json({ error: 'Unexpected error' }, 500);
  }
});
