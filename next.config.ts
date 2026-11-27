import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16 defaults. The CV has no dynamic data, so with these on the
  // whole page is pre-rendered to static HTML at build time.
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
