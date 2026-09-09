import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { depots } from "@/data/depots";
import { depotDisplayLocation } from "@/data/depotDisplay";
import { supabase } from "@/integrations/supabase/client";

type Result = {
  code: string;
  name: string;
  postcode: string;
  roadMiles: number | null;
  driveMinutes: number | null;
  straightMiles: number;
};

const POSTCODE_RE = /^[A-Za-z]{1,2}\d[A-Za-z\d]?\s*\d[A-Za-z]{2}$/;

const DepotFinder = () => {
  const [postcode, setPostcode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [origin, setOrigin] = useState<string | null>(null);
  const [results, setResults] = useState<Result[] | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const value = postcode.trim().toUpperCase();
    if (!POSTCODE_RE.test(value)) {
      setError("Please enter a full UK postcode, for example DN8 5SX.");
      setResults(null);
      return;
    }

    setLoading(true);
    setError(null);
    setResults(null);
    setOrigin(null);

    try {
      const { data, error: fnError } = await supabase.functions.invoke("depot-finder", {
        body: {
          postcode: value,
          depots: depots.map((d) => ({
            code: d.code,
            name: d.name,
            postcode: d.postcode,
            lat: d.lat,
            lng: d.lng,
          })),
        },
      });

      if (fnError) throw fnError;
      if (data?.error) {
        setError(String(data.error));
        return;
      }
      setOrigin(data?.origin?.postcode ?? value);
      setResults((data?.results ?? []) as Result[]);
    } catch (err) {
      console.error("depot-finder failed", err);
      setError("We couldn't complete that search. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Depot Finder | Liberty Guard</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navbar />

      <section className="relative pt-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
          <h1 className="font-heading text-4xl md:text-6xl font-black text-primary-foreground uppercase tracking-tight leading-tight">
            Depot <span className="text-secondary">Finder</span>
          </h1>
          <p className="mt-5 text-lg text-primary-foreground/80 max-w-2xl">
            Enter a site postcode to see the three closest depots and the driving distance to each.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <label htmlFor="postcode" className="sr-only">
              Site postcode
            </label>
            <input
              id="postcode"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              placeholder="e.g. DN8 5SX"
              maxLength={10}
              autoComplete="postal-code"
              className="flex-1 rounded-lg border border-border bg-card px-4 py-3 text-foreground uppercase tracking-wide placeholder:normal-case placeholder:tracking-normal focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-secondary text-secondary-foreground font-heading font-semibold uppercase tracking-wider text-sm px-8 py-3 rounded-lg hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Searching…" : "Find depots"}
            </button>
          </form>

          {error && (
            <p className="mt-5 text-sm text-destructive" role="alert">
              {error}
            </p>
          )}

          {results && (
            <div className="mt-10">
              <h2 className="font-heading text-sm uppercase tracking-wider text-secondary font-bold mb-5">
                {results.length > 0
                  ? `Nearest depots to ${origin}`
                  : `No depots found for ${origin}`}
              </h2>
              <ol className="space-y-4">
                {results.map((r, index) => (
                  <li
                    key={r.code}
                    className="bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4"
                  >
                    <span className="font-heading text-2xl font-black text-secondary w-8">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-bold text-foreground uppercase tracking-wide">
                        {r.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {depotDisplayLocation(r.code, r.name)}
                      </p>
                    </div>
                    <div className="sm:text-right">
                      <p className="font-heading text-xl font-bold text-foreground">
                        {r.roadMiles !== null ? `${r.roadMiles} miles` : `${r.straightMiles} miles (direct)`}
                      </p>
                      {r.driveMinutes !== null && (
                        <p className="text-muted-foreground text-sm">
                          approx. {Math.floor(r.driveMinutes / 60) > 0
                            ? `${Math.floor(r.driveMinutes / 60)}h ${r.driveMinutes % 60}m`
                            : `${r.driveMinutes} min`}{" "}
                          drive
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
              {results.length > 0 && (
                <p className="mt-6 text-xs text-muted-foreground">
                  Distances are by road from the centre of the postcode entered and are indicative only.
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DepotFinder;
