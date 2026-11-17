/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: false,
  images: { unoptimized: true },
  compress: true,
  // SPEED FIX 2026-11-17 (F3, experimental): inline the 19 KB stylesheet
  // into <head> so first paint does not wait on the render-blocking CSS
  // request (~740 ms on mobile per baseline). Per the installed Next 16.4
  // docs (dist/docs/.../inlineCss.md) this applies in production builds
  // only; static export inlines per page. Revert if no measured gain or
  // any FOUC/CLS.
  experimental: { inlineCss: true },
};
module.exports = nextConfig;
