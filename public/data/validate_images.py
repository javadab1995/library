#!/usr/bin/env python3
"""
Audit image URLs in books-expanded.json and fill missing book-cover URLs from Open Library.
Usage:
  python validate_images.py books-expanded.json
Requires: pip install requests
The script does not invent image URLs: it uses Open Library's Search API and checks
that the resulting cover URL responds with an image content type.
"""
import json, re, sys, time
from pathlib import Path
from urllib.parse import urlencode
import requests

API = "https://openlibrary.org/search.json"
COVERS = "https://covers.openlibrary.org/b/id/{}-M.jpg"
HEADERS = {"User-Agent": "BookCatalogImageAudit/1.0 (local educational project)"}
SESSION = requests.Session()
SESSION.headers.update(HEADERS)

def norm(s):
    return re.sub(r"[\W_]+", "", (s or "").casefold(), flags=re.UNICODE)

def is_real_url(url):
    if not isinstance(url, str) or not url.startswith(("https://", "http://")):
        return False
    if "example.com" in url.lower():
        return False
    try:
        r = SESSION.get(url, timeout=15, stream=True, allow_redirects=True)
        ctype = r.headers.get("Content-Type", "").lower()
        ok = r.status_code == 200 and ctype.startswith("image/")
        r.close()
        return ok
    except requests.RequestException:
        return False

def find_cover(title, author=""):
    if not title:
        return None
    params = {
        "title": title,
        "fields": "title,author_name,cover_i",
        "limit": 10,
    }
    try:
        r = SESSION.get(API, params=params, timeout=20)
        r.raise_for_status()
        docs = r.json().get("docs", [])
    except (requests.RequestException, ValueError):
        return None

    wanted_title, wanted_author = norm(title), norm(author)
    candidates = []
    for doc in docs:
        cover_id = doc.get("cover_i")
        got_title = norm(doc.get("title", ""))
        authors = [norm(a) for a in doc.get("author_name", [])]
        # Avoid returning a visually valid cover for a different book.
        title_match = wanted_title in got_title or got_title in wanted_title
        author_match = not wanted_author or any(
            wanted_author in a or a in wanted_author for a in authors
        )
        if cover_id and title_match and author_match:
            candidates.append((cover_id, doc))
    for cover_id, _ in candidates:
        url = COVERS.format(cover_id)
        if is_real_url(url):
            return url
    return None

def walk(items, parent_author="", stats=None):
    if stats is None:
        stats = {"checked": 0, "valid": 0, "replaced": 0, "missing": 0}
    if isinstance(items, dict):
        title = items.get("name", "")
        author = items.get("writer", {}).get("name", parent_author) if isinstance(items.get("writer"), dict) else parent_author
        # Only resolve cover-like images for records with a title. Portraits are checked,
        # but not replaced with book covers.
        if "image" in items:
            url = items.get("image")
            if url:
                stats["checked"] += 1
                if is_real_url(url):
                    stats["valid"] += 1
                else:
                    items["image"] = None
            if items.get("image") is None and title and not items.get("bio"):
                found = find_cover(title, author)
                if found:
                    items["image"] = found
                    stats["replaced"] += 1
                else:
                    stats["missing"] += 1
        for key, value in list(items.items()):
            if key == "imageSearch" or key == "image":
                continue
            if isinstance(value, (dict, list)):
                walk(value, author, stats)
        return stats
    if isinstance(items, list):
        for item in items:
            walk(item, parent_author, stats)
        return stats
    return stats

def main():
    path = Path(sys.argv[1] if len(sys.argv) > 1 else "books-expanded.json")
    data = json.loads(path.read_text(encoding="utf-8"))
    stats = walk(data)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    report = path.with_name("image-audit-report.json")
    report.write_text(json.dumps(stats, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(stats, ensure_ascii=False, indent=2))
    print(f"Updated: {path.resolve()}")
    print(f"Report:  {report.resolve()}")

if __name__ == "__main__":
    main()
