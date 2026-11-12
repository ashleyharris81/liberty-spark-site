export const NOTIFY_FROM = 'noreply@libertyguard.co.uk';
export const NOTIFY_TO = 'sales@libertyguard.co.uk';
const GATEWAY_URL = 'https://connector-gateway.lovable.dev/azure_graph';

export async function sendNotification(
  subject: string,
  html: string,
  replyTo: string | undefined,
  credentials: { lovableKey?: string; connectionKey?: string },
  fetcher: typeof fetch = fetch,
): Promise<{ sent: boolean; detail?: string }> {
  if (!credentials.lovableKey || !credentials.connectionKey) {
    return { sent: false, detail: 'Microsoft 365 connection credentials are missing' };
  }
  try {
    const response = await fetcher(`${GATEWAY_URL}/v1.0/users/${encodeURIComponent(NOTIFY_FROM)}/sendMail`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${credentials.lovableKey}`,
        'X-Connection-Api-Key': credentials.connectionKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: {
          subject,
          body: { contentType: 'HTML', content: html },
          toRecipients: [{ emailAddress: { address: NOTIFY_TO } }],
          ...(replyTo ? { replyTo: [{ emailAddress: { address: replyTo } }] } : {}),
        },
        saveToSentItems: true,
      }),
    });
    if (!response.ok) {
      return { sent: false, detail: `Microsoft 365 [${response.status}]: ${await response.text()}` };
    }
    return { sent: true };
  } catch (error) {
    return { sent: false, detail: error instanceof Error ? error.message : String(error) };
  }
}