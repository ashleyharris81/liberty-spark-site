import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Session } from "@supabase/supabase-js";

const ALLOWED_IP = "5.133.168.10";

type ContactRow = {
  id: string;
  first_name: string;
  last_name: string | null;
  email: string;
  subject: string | null;
  message: string;
  source: string | null;
  created_at: string;
};

type AccountRow = {
  id: string;
  company_name: string;
  email: string;
  details: Record<string, unknown>;
  created_at: string;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const fn = mode === "signin" ? supabase.auth.signInWithPassword : supabase.auth.signUp;
    const { error: authError } = await fn.call(supabase.auth, { email, password });
    if (authError) setError(authError.message);
    setBusy(false);
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6">
      <h1 className="mb-2 text-3xl font-bold uppercase text-primary">Admin</h1>
      <p className="mb-8 text-muted-foreground">
        {mode === "signin"
          ? "Sign in to view website form submissions."
          : "Create the admin account for sales@libertyguard.co.uk."}
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="admin-email">Email</Label>
          <Input
            id="admin-email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="admin-password">Password</Label>
          <Input
            id="admin-password"
            type="password"
            autoComplete={mode === "signin" ? "current-password" : "new-password"}
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <Button type="submit" className="w-full" disabled={busy}>
          {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
        </Button>
      </form>
      <button
        type="button"
        className="mt-6 text-sm text-muted-foreground underline"
        onClick={() => {
          setMode(mode === "signin" ? "signup" : "signin");
          setError(null);
        }}
      >
        {mode === "signin" ? "First time? Create the admin account" : "Already have an account? Sign in"}
      </button>
    </div>
  );
};

const IpNotice = () => {
  const [ip, setIp] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((r) => r.json())
      .then((d: { ip?: string }) => setIp(d.ip ?? null))
      .catch(() => setIp(null));
  }, []);

  if (!ip || ip === ALLOWED_IP) return null;

  return (
    <div className="mb-6 rounded-md border border-yellow-500/50 bg-yellow-500/10 px-4 py-3 text-sm">
      You are signed in from <strong>{ip}</strong>, not the approved office address{" "}
      <strong>{ALLOWED_IP}</strong>. Access is still allowed because you are an authenticated admin.
    </div>
  );
};

const Admin = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [contacts, setContacts] = useState<ContactRow[]>([]);
  const [accounts, setAccounts] = useState<AccountRow[]>([]);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_event, next) => {
      setSession(next);
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setReady(true);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) {
      setIsAdmin(null);
      return;
    }
    let cancelled = false;
    (async () => {
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .maybeSingle();
      if (cancelled) return;
      const admin = !!data;
      setIsAdmin(admin);
      if (!admin) return;

      const [c, a] = await Promise.all([
        supabase.from("contact_submissions").select("*").order("created_at", { ascending: false }),
        supabase.from("account_applications").select("*").order("created_at", { ascending: false }),
      ]);
      if (cancelled) return;
      setContacts((c.data as ContactRow[]) ?? []);
      setAccounts((a.data as AccountRow[]) ?? []);
    })();
    return () => {
      cancelled = true;
    };
  }, [session]);

  const head = (
    <Helmet>
      <title>Admin | Liberty</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
  );

  if (!ready) return <>{head}</>;
  if (!session) return <>{head}<AdminLogin /></>;

  return (
    <>
      {head}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold uppercase text-primary">Form submissions</h1>
            <p className="text-sm text-muted-foreground">{session.user.email}</p>
          </div>
          <Button variant="outline" onClick={() => supabase.auth.signOut()}>
            Sign out
          </Button>
        </div>

        <IpNotice />

        {isAdmin === false && (
          <p className="rounded-md border border-destructive/50 bg-destructive/10 px-4 py-3">
            This account does not have admin access.
          </p>
        )}

        {isAdmin && (
          <Tabs defaultValue="contact">
            <TabsList>
              <TabsTrigger value="contact">Contact ({contacts.length})</TabsTrigger>
              <TabsTrigger value="account">New accounts ({accounts.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="contact" className="space-y-4 pt-6">
              {contacts.length === 0 && <p className="text-muted-foreground">No enquiries yet.</p>}
              {contacts.map((row) => (
                <article key={row.id} className="rounded-lg border p-5">
                  <header className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                    <h2 className="text-lg font-semibold">
                      {row.first_name} {row.last_name ?? ""}
                    </h2>
                    <time className="text-sm text-muted-foreground">{formatDate(row.created_at)}</time>
                  </header>
                  <p className="text-sm">
                    <a href={`mailto:${row.email}`} className="underline">
                      {row.email}
                    </a>
                    {row.subject && <> — {row.subject}</>}
                    {row.source && <span className="text-muted-foreground"> ({row.source})</span>}
                  </p>
                  <p className="mt-3 whitespace-pre-wrap text-sm">{row.message}</p>
                </article>
              ))}
            </TabsContent>

            <TabsContent value="account" className="space-y-4 pt-6">
              {accounts.length === 0 && <p className="text-muted-foreground">No applications yet.</p>}
              {accounts.map((row) => (
                <article key={row.id} className="rounded-lg border p-5">
                  <header className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                    <h2 className="text-lg font-semibold">{row.company_name}</h2>
                    <time className="text-sm text-muted-foreground">{formatDate(row.created_at)}</time>
                  </header>
                  <p className="text-sm">
                    <a href={`mailto:${row.email}`} className="underline">
                      {row.email}
                    </a>
                  </p>
                  <dl className="mt-3 grid gap-x-6 gap-y-1 text-sm sm:grid-cols-2">
                    {Object.entries(row.details ?? {}).map(([key, value]) => (
                      <div key={key} className="flex gap-2">
                        <dt className="text-muted-foreground">{key}:</dt>
                        <dd className="break-words">{String(value)}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </TabsContent>
          </Tabs>
        )}
      </div>
    </>
  );
};

export default Admin;
