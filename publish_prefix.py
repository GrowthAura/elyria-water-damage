#!/usr/bin/env python3
"""Publish-step subpath rewrite for the Elyria GitHub Pages PREVIEW.

The site is built root-relative (correct for a future real domain).
The github.io PREVIEW lives at the subpath /elyria-water-damage/, so
every root-relative URL in the built .html files must be prefixed with
that subpath before the tree is published to the gh-pages branch.

Skipped once on Plano (2026-11-05) -> every CSS/image 404'd and the
preview rendered completely unstyled. NEVER publish gh-pages without
this step.

Usage:  python3 publish_prefix.py [src_dir] [dest_dir]
Default src = ~/workspace/elyria-water-damage/out
Default dest = /tmp/elyria-ghpages (the gh-pages worktree)

Rule: in *.html files ONLY, rewrite a "/" that starts a site URL
(a slash NOT followed by another slash or ">", preceded by a quote or
comma+space) to "/elyria-water-damage/".
Untouched by design: absolute https:// URLs, tel: links, protocol-
relative // URLs, sitemap.xml / robots.txt (absolute localhost
placeholder already - known preview limit), canonical + OG URLs
(absolute already), .css files (no url() refs in this build),
.js files, .txt files.
"""
import os
import re
import sys

PREFIX = "/elyria-water-damage"
DEST = sys.argv[1] if len(sys.argv) > 1 else "/tmp/elyria-ghpages"

# A site-URL slash: preceded by a quote (attribute value or JSON string
# start, e.g. href="/x) or by comma+space (srcset candidate), and NOT
# followed by ">" or "/" - the lookahead is essential: a bare "/>"
# closes a self-closing tag, and rewriting that slash corrupts the tag.
# The "/" is OUTSIDE the capture group: putting it inside emits
# "//elyria-water-damage/..." (protocol-relative host) and every
# CSS/image 404s while curl 200s still false-pass (Tulsa, 2026-11-07).
URL_SLASH = re.compile(r"""((?:["']|,\s*))/(?!>|/)""")


def rewrite_html(text):
    return URL_SLASH.sub(r"\1" + PREFIX + "/", text)


def main():
    changed = 0
    for root, _dirs, files in os.walk(DEST):
        if ".git" in root:
            continue
        for name in files:
            if not name.endswith(".html"):
                continue
            path = os.path.join(root, name)
            with open(path, encoding="utf-8") as f:
                orig = f.read()
            new = rewrite_html(orig)
            if new != orig:
                with open(path, "w", encoding="utf-8") as f:
                    f.write(new)
                changed += 1
    print(f"rewrote {changed} html files in {DEST}")


if __name__ == "__main__":
    main()
