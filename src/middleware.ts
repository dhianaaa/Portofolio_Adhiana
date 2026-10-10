import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  let { pathname } = request.nextUrl;

  // Let Next.js internal files, api, and non-html static assets pass through
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/scripts") ||
    pathname.startsWith("/data") ||
    pathname.startsWith("/dhiana-assets") ||
    /\.(png|jpe?g|svg|woff2?|ttf|mjs|js|css|json|ico)$/i.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Root path -> exact Varen home page with Dhiana data
  if (pathname === "/" || pathname === "" || pathname === "/index.html") {
    return NextResponse.rewrite(new URL("/varen-index.html", request.url));
  }

  // Strip .html suffix if present
  let cleanPath = pathname.replace(/^\/+|\/+$/g, "");
  if (cleanPath.endsWith(".html")) {
    cleanPath = cleanPath.slice(0, -5);
  }

  // If path starts with subpages/, strip it
  if (cleanPath.startsWith("subpages/")) {
    cleanPath = cleanPath.slice("subpages/".length);
  }

  // Normalized slug mapping (e.g. /work -> work, /work/vorqen -> work_vorqen)
  let slug = cleanPath.replace(/[^a-zA-Z0-9_-]/g, "_").replace(/_+/g, "_");

  // Aliases for project slugs to Varen showcase pages
  const slugAliases: Record<string, string> = {
    "work_joycharm": "work_vorqen",
    "work_our-store": "work_noctra",
    "work_our_store": "work_noctra",
    "work_amertapay": "work_aurel",
    "work_cake-shop": "work_montra",
    "work_cake_shop": "work_montra",
    "work_web-perpus": "work_arden",
    "work_web_perpus": "work_arden",
    "work_web-metic": "work_lumen",
    "work_web_metic": "work_lumen",
    "work_waylo": "work_kova",
    "work_laporkita": "work_n_C3_B8rth",
    "work_jwb-games": "work_vorqen",
    "work_jwb_games": "work_vorqen",
    "work_ml-carnival": "work_noctra",
    "work_ml_carnival": "work_noctra",
    // Backward compatibility aliases
    "work_media-moklet": "work_vorqen",
    "work_media_moklet": "work_vorqen",
    "work_pustel-mobile": "work_noctra",
    "work_pustel_mobile": "work_noctra",
    "work_metic-design-system": "work_aurel",
    "work_metic_design_system": "work_aurel",
    "work_ecotrack-mobile": "work_montra",
    "work_ecotrack_mobile": "work_montra",
    "work_edukarsa-vocational": "work_arden",
    "work_edukarsa_vocational": "work_arden",
    "work_malang-batik-ar": "work_lumen",
    "work_malang_batik_ar": "work_lumen",
  };

  const targetSlug = slugAliases[slug] || slug;

  // Rewrite to subpage HTML in public/
  return NextResponse.rewrite(new URL(`/${targetSlug}.html`, request.url));
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
