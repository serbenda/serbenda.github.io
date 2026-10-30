#!/usr/bin/env python3
"""Print the CV to PDF in Spanish and English.

Usage (from the repository root):
    pip install playwright && python -m playwright install chromium   # first time only
    python3 tools/cv/build.py

Edit the text and layout in cv/cv.html (Spanish and English in the same file).
Writes cv/Sergio-Bendana-CV-es.pdf and cv/Sergio-Bendana-CV-en.pdf.
"""
import asyncio
import functools
import http.server
import pathlib
import threading

from playwright.async_api import async_playwright

ROOT = pathlib.Path(__file__).resolve().parents[2]
PORT = 8765


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


def serve():
    handler = functools.partial(QuietHandler, directory=str(ROOT))
    server = http.server.ThreadingHTTPServer(('127.0.0.1', PORT), handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()
    return server


async def main():
    server = serve()
    async with async_playwright() as pw:
        browser = await pw.chromium.launch()
        page = await browser.new_page()
        for lang in ('es', 'en'):
            await page.goto(f'http://127.0.0.1:{PORT}/cv/cv.html?lang={lang}')
            await page.evaluate('document.fonts.ready')
            out = ROOT / 'cv' / f'Sergio-Bendana-CV-{lang}.pdf'
            await page.pdf(path=str(out), format='A4', prefer_css_page_size=True, print_background=True)
            print('✓', out.relative_to(ROOT))
        await browser.close()
    server.shutdown()


if __name__ == '__main__':
    asyncio.run(main())
