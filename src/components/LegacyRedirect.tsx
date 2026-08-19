import { Navigate, useLocation } from "react-router-dom";
import { resolveLegacyRedirect } from "@/data/legacyRedirects";
import NotFound from "@/pages/NotFound";

/**
 * Catch-all route: sends legacy WordPress URLs to their closest new page and
 * renders the real 404 for everything else (no blanket homepage redirect —
 * that would create soft-404s).
 *
 * These redirects are client-side; a server-side 301 at the CDN/host remains
 * the preferred long-term implementation.
 */
const LegacyRedirect = () => {
  const { pathname } = useLocation();
  const target = resolveLegacyRedirect(pathname);

  if (target) return <Navigate to={target} replace />;

  return <NotFound />;
};

export default LegacyRedirect;
