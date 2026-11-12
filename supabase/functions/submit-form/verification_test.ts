import { verifyHuman } from './verification.ts';
const assert = (value: boolean) => { if (!value) throw new Error('Verification rule failed'); };
Deno.test('contact human verification rejects missing tokens without calling provider', async () => {
  let called = false;
  assert(!await verifyHuman('', 'test-secret', async () => { called = true; return new Response(); }));
  assert(!called);
});
Deno.test('contact human verification requires provider success, approved hostname and contact action', async () => {
  for (const [success, hostname, action, expected] of [
    [true, 'www.libertyguard.co.uk', 'contact', true],
    [true, 'fae4c660-3ce6-4acc-8e43-9e16aeed5346.lovableproject.com', 'contact', true],
    [false, 'www.libertyguard.co.uk', 'contact', false],
    [true, 'attacker.example', 'contact', false],
    [true, 'www.libertyguard.co.uk', 'other', false],
  ] as const) {
    const fetcher: typeof fetch = async () => Response.json({ success, hostname, action });
    assert(await verifyHuman('test-token', 'test-secret', fetcher) === expected);
  }
});