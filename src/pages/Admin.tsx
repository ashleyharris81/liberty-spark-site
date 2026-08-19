import { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Session } from "@supabase/supabase-js";
import logo from "@/assets/liberty-logo-white.png";

const ALLOWED_IPS = ["5.133.168.10", "5.133.169.82", "5.133.169.42"];

const AdminHeader = ({ compact = false }: { compact?: boolean }) => (
  <header className="border-b border-navy-light bg-primary">
    <div className={`mx-auto flex items-center justify-center ${compact ? "py-4" : "py-6"} px-6`}>
      <img src={logo} alt="Liberty" className="h-10 w-auto" />
    </div>
  </header>
);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
    if (authError) setError(authError.message);
    setBusy(false);
  };

  return (
    <div className="min-h-screen bg-primary">
      <AdminHeader />
      <div className="mx-auto flex max-w-md flex-col justify-center px-6 py-16">
        <h1 className="mb-2 text-3xl font-bold uppercase text-primary-foreground">
          Admin
        </h1>
        <p className="mb-8 text-primary-foreground/70">
          Private area. Sign in to view website form submissions.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-navy-light bg-navy-light/40 p-6">
          <div>
            <Label htmlFor="admin-email" className="text-primary-foreground">Email</Label>
            <Input
              id="admin-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-navy-light bg-background/10 text-primary-foreground"
            />
          </div>
          <div>
            <Label htmlFor="admin-password" className="text-primary-foreground">Password</Label>
            <Input
              id="admin-password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-navy-light bg-background/10 text-primary-foreground"
            />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={busy}>
            {busy ? "Signing in…" : "Sign in"}
          </Button>
        </form>
      </div>
    </div>
  );
};


const useAllowedIp = () => {
  const [state, setState] = useState<{ ip: string | null; allowed: boolean | null }>({
    ip: null,
    allowed: null,
  });

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((r) => r.json())
      .then((d: { ip?: string }) =>
        setState({ ip: d.ip ?? null, allowed: !!d.ip && ALLOWED_IPS.includes(d.ip) }),
      )
      .catch(() => setState({ ip: null, allowed: false }));
  }, []);

  return state;
};

const IpBlocked = ({ ip }: { ip: string | null }) => (
  <div className="min-h-screen bg-primary">
    <AdminHeader />
    <div className="mx-auto flex max-w-md flex-col justify-center px-6 py-16 text-center">
      <h1 className="mb-3 text-3xl font-bold uppercase text-primary-foreground">Access restricted</h1>
      <p className="text-primary-foreground/70">
        This area can only be accessed from an approved office network
        {ip ? ` (your address: ${ip})` : ""}.
      </p>
    </div>
  </div>
);


const Admin = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [contacts, setContacts] = useState<ContactRow[]>([]);
  const [accounts, setAccounts] = useState<AccountRow[]>([]);
  const { ip, allowed } = useAllowedIp();


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

  const load = useCallback(async () => {
    if (!session) return;
    const { data } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .maybeSingle();
    const admin = !!data;
    setIsAdmin(admin);
    if (!admin) return;

    const [c, a] = await Promise.all([
      supabase.from("contact_submissions").select("*").order("created_at", { ascending: false }),
      supabase.from("account_applications").select("*").order("created_at", { ascending: false }),
    ]);
    setContacts((c.data as ContactRow[]) ?? []);
    setAccounts((a.data as AccountRow[]) ?? []);
  }, [session]);

  useEffect(() => {
    if (!session) {
      setIsAdmin(null);
      return;
    }
    load();
  }, [session, load]);


  const head = (
    <Helmet>
      <title>Admin | Liberty</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
  );

  if (!ready || allowed === null) return <>{head}</>;
  if (!allowed) return <>{head}<IpBlocked ip={ip} /></>;
  if (!session) return <>{head}<AdminLogin /></>;


  return (
    <>
      {head}
      <div className="min-h-screen bg-background">
        <AdminHeader />
        <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold uppercase text-primary">Form submissions</h1>
            <p className="text-sm text-muted-foreground">{session.user.email}</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => load()}>
              Refresh
            </Button>
            <Button variant="outline" onClick={() => supabase.auth.signOut()}>
              Sign out
            </Button>
          </div>


        </div>


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
      </div>
    </>
  );
};

export default Admin;
