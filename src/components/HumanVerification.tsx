import { useEffect, useRef, useState } from "react";

const SITE_KEY = "0x4AAAAAAF-XK0_jhRElxkP9";
type Turnstile = {
  render: (element: HTMLElement, options: Record<string, unknown>) => string;
  remove: (id: string) => void;
};
declare global { interface Window { turnstile?: Turnstile } }
let scriptPromise: Promise<void> | undefined;
function loadScript() {
  if (window.turnstile) return Promise.resolve();
  if (!scriptPromise) scriptPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => { scriptPromise = undefined; reject(new Error("Verification unavailable")); };
    document.head.appendChild(script);
  });
  return scriptPromise;
}

export default function HumanVerification({ onToken, resetKey }: { onToken: (token: string) => void; resetKey: number }) {
  const container = useRef<HTMLDivElement>(null);
  const callback = useRef(onToken);
  callback.current = onToken;
  const [error, setError] = useState(false);
  useEffect(() => {
    let active = true;
    let id: string | undefined;
    callback.current("");
    setError(false);
    loadScript().then(() => {
      if (!active || !container.current || !window.turnstile) return;
      id = window.turnstile.render(container.current, {
        sitekey: SITE_KEY, action: "contact", theme: "auto", size: "flexible",
        callback: (token: string) => { setError(false); callback.current(token); },
        "expired-callback": () => callback.current(""),
        "error-callback": () => { callback.current(""); setError(true); },
      });
    }).catch(() => { if (active) setError(true); });
    return () => { active = false; if (id !== undefined) window.turnstile?.remove(id); };
  }, [resetKey]);
  return <div className="min-h-[65px] w-full min-w-0" aria-label="Human verification">
    <div ref={container} />
    {error && <p role="alert" className="text-sm text-destructive">Human verification could not load. Please refresh the page and try again.</p>}
  </div>;
}