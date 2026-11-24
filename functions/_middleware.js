// apex -> www 301. _redirects cannot do domain-level redirects on
// Cloudflare Pages (docs: "Domain-level redirects" unsupported), so the
// hostname check lives here. Runs on every request; www passes through.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === 'waterdamagerestorationelyria.site') {
    url.hostname = 'www.waterdamagerestorationelyria.site';
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
