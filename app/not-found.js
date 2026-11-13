// Custom 404 page: its own title + description so the root layout's
// homepage title/description do not leak into it. (The description leaked
// until 2026-11-13 ~10:47 PKT — the layout's homepage description rendered
// byte-identical on 404.html; page-level metadata overrides it.)
// No robots in metadata: the layout's index/follow would leak if left
// unset, and any robots set here duplicates the renderer's own injected
// noindex — so metadata carries no robots and the 404 ends up with
// exactly the renderer's single noindex meta.
export const metadata = {
  title: "Page Not Found | Water Damage Restoration Elyria OH",
  description: "This page could not be found.",
};

export default function NotFound() {
  return (
    <div className="wrap">
      <section className="section">
        <h1>404</h1>
        <p>This page could not be found.</p>
        <p>
          <a href="/">Go to the homepage</a>
        </p>
      </section>
    </div>
  );
}
