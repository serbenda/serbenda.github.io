#!/usr/bin/env python3
"""Checks the website before it goes live. Run it locally or let the CI run it on every PR.

    python3 tools/check_site.py

It fails (exit code 1) when:
- a page links to a local file or page that doesn't exist (href/src starting with / or relative);
- the pages don't share exactly the same header and footer (they are copied by hand on each page);
- a data-t translation key used on a page is missing from the Spanish or English dictionary;
- data/projects.json is not valid, a project lacks a field, or its image is missing.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAGES = ["index.html", "trabajo/index.html", "proyectos/index.html", "arcade/index.html",
         "visitas/index.html", "404.html"]
REQUIRED = ("repo", "title", "es", "en")


def target(page: Path, ref: str) -> Path | None:
    """The file a local link points to, or None for external links, anchors and data URIs."""
    ref = ref.split("#")[0].split("?")[0]
    if not ref or re.match(r"^[a-z][a-z0-9+.-]*:", ref, re.I) or ref.startswith("//"):
        return None
    path = ROOT / ref.lstrip("/") if ref.startswith("/") else page.parent / ref
    return path / "index.html" if ref.endswith("/") else path


def block(html: str, start: str, end: str) -> str:
    i = html.find(start)
    return html[i:html.find(end, i) + len(end)] if i >= 0 else ""


def main() -> int:
    errors: list[str] = []
    js = (ROOT / "assets/site.js").read_text(encoding="utf-8")
    dicts = {}
    for lang in ("es", "en"):
        part = re.search(rf"\n  {lang}: \{{\n(.*?)\n  \}}", js, re.S)
        dicts[lang] = set(re.findall(r'"([\w.-]+)":', part.group(1))) if part else set()
        if not dicts[lang]:
            errors.append(f"assets/site.js: no '{lang}' dictionary found")

    headers, footers = {}, {}
    for name in PAGES:
        page = ROOT / name
        if not page.exists():
            errors.append(f"{name}: page missing")
            continue
        html = page.read_text(encoding="utf-8")
        for ref in re.findall(r'(?:href|src)="([^"]+)"', html):
            path = target(page, ref)
            if path is not None and not path.exists():
                errors.append(f"{name}: broken link {ref}")
        for key in set(re.findall(r'data-t(?:-aria)?="([^"]+)"', html)):
            for lang, keys in dicts.items():
                if key not in keys:
                    errors.append(f"{name}: translation '{key}' missing in {lang}")
        headers[name] = block(html, '<header class="bar">', "</header>")
        footers[name] = block(html, "<footer>", "</footer>")
    for parts, what in ((headers, "header"), (footers, "footer")):
        if len(set(parts.values())) > 1:
            first = PAGES[0]
            errors += [f"{n}: {what} differs from {first}" for n, v in parts.items() if v != parts[first]]

    try:
        projects = json.loads((ROOT / "data/projects.json").read_text(encoding="utf-8"))
    except (OSError, ValueError) as err:
        errors.append(f"data/projects.json: {err}")
        projects = {}
    for group in ("games", "tools"):
        for i, p in enumerate(projects.get(group, [])):
            where = f"data/projects.json: {group}[{i}] ({p.get('repo', '?')})"
            errors += [f"{where}: missing '{f}'" for f in REQUIRED if not p.get(f)]
            if p.get("img") and not (ROOT / p["img"]).exists():
                errors.append(f"{where}: image {p['img']} not found")

    for e in errors:
        print(f"✘ {e}")
    print(f"{'✘' if errors else '✔'} {len(PAGES)} pages checked, {len(errors)} problems")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
