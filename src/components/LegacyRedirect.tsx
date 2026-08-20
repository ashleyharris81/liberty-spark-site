import { Navigate, useLocation } from "react-router-dom";
import { resolveLegacyRedirect } from "@/data/legacyRedirects";
import NotFound from "@/pages/NotFound";

/**
 * Catch-all route: sends legacy WordPress URLs to their closest new page and
 * renders the real 404 for everything else (no blanket homepage redirect —
 * that would create soft-404s).
 *
 * This is the client-side fallback layer; the authoritative 301s live in the
 * `redirects` array in vercel.json. Keep the two in sync.
 */
const LegacyRedirect = () => {
  const { pathname } = useLocation();
  const target = resolveLegacyRedirect(pathname);

  // Asset targets (e.g. the old brochure URL) are real files, not app routes —
  // hand them to the browser instead of React Router.
  if (target?.startsWith("/__l5e/")) {
    if (typeof window !== "undefined") window.location.replace(target);
    return null;
  }

  if (target) return <Navigate to={target} replace />;

  return <NotFound />;
};

export default LegacyRedirect;
