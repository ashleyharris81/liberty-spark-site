import { sendNotification } from './notification.ts';

const assert = (condition: boolean, message: string) => {
  if (!condition) throw new Error(message);
};

Deno.test('notifications send from the nominated Microsoft 365 mailbox to sales', async () => {
  let url = '';
  let body: Record<string, any> = {};
  const fetcher: typeof fetch = async (input, init) => {
    url = String(input);
    body = JSON.parse(String(init?.body));
    return new Response(null, { status: 202 });
  };
  const result = await sendNotification('Enquiry', '<p>Test</p>', 'visitor@example.com', { lovableKey: 'test', connectionKey: 'test' }, fetcher);
  assert(url.endsWith('/users/sales%40libertyguard.co.uk/sendMail'), 'Wrong sender');
  assert(body.message.toRecipients[0].emailAddress.address === 'sales@libertyguard.co.uk', 'Wrong recipient');
  assert(body.message.replyTo[0].emailAddress.address === 'visitor@example.com', 'Wrong reply-to');
  assert(body.saveToSentItems === true && result.sent, 'Acceptance or sent item missing');
});

Deno.test('permission failures remain failures and are not retried', async () => {
  let calls = 0;
  const fetcher: typeof fetch = async () => {
    calls++;
    return new Response('accessDenied', { status: 403 });
  };
  const result = await sendNotification('Account', '<p>Test</p>', undefined, { lovableKey: 'test', connectionKey: 'test' }, fetcher);
  assert(!result.sent && result.detail === 'Microsoft 365 [403]: accessDenied', 'Failure hidden');
  assert(calls === 1, 'Permission failure retried');
});