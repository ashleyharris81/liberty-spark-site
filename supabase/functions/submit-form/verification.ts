const ALLOWED_HOSTS = new Set([
  'www.libertyguard.co.uk', 'libertyguard.co.uk', 'dev.libertyguard.co.uk',
  'liberty-spark-site.lovable.app',
  'id-preview--fae4c660-3ce6-4acc-8e43-9e16aeed5346.lovable.app',
  'fae4c660-3ce6-4acc-8e43-9e16aeed5346.lovableproject.com',
]);
export async function verifyHuman(token: string, secret: string | undefined, fetcher: typeof fetch = fetch): Promise<boolean> {
  if (!secret || !token || token.length > 2048) return false;
  try {
    const response = await fetcher('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret, response: token }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return false;
    const result = await response.json();
    return result.success === true && result.action === 'contact' && ALLOWED_HOSTS.has(result.hostname);
  } catch { return false; }
}