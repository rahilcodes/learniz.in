import urllib.request, sys

sys.stdout.reconfigure(encoding='utf-8')

urls = [
    '/',
    '/academiz',
    '/features/interactive-animations',
    '/features/intelliq',
    '/features/lms-exam-builder',
    '/features/analytics',
    '/for-institutions',
    '/for-teachers',
    '/for-students',
    '/for-parents',
    '/see-it-live',
    '/founding-schools',
    '/about',
    '/blog',
    '/blog/what-experiential-learning-means-under-nep-2020',
    '/blog/how-ai-question-generators-save-teachers-5-hours-a-week',
    '/faq',
    '/contact',
    '/book-demo',
    '/privacy',
    '/terms',
    '/refund',
    '/lp/founding-schools',
    '/lp/demo',
    '/assets/css/main.css',
    '/assets/js/main.js',
    '/assets/icons/atom.svg',
    '/assets/images/favicon.png',
    '/sitemap.xml',
    '/robots.txt'
]

base = 'http://localhost:3000'
errors = []
passed = 0

print(f"Testing {len(urls)} endpoints against {base}...")

for u in urls:
    try:
        req = urllib.request.Request(base + u, headers={'User-Agent': 'TestClient/1.0'})
        with urllib.request.urlopen(req, timeout=5) as res:
            code = res.getcode()
            content_type = res.headers.get('Content-Type', '')
            length = len(res.read())
            if code == 200 and length > 0:
                passed += 1
                print(f"  [OK 200] {u} ({length} bytes, {content_type})")
            else:
                errors.append((u, f"Status: {code}, Length: {length}"))
                print(f"  [FAIL] {u} ({code})")
    except Exception as e:
        errors.append((u, str(e)))
        print(f"  [ERROR] {u}: {e}")

print(f"\nResults: {passed}/{len(urls)} passed.")
if errors:
    print(f"Errors encountered: {len(errors)}")
    for u, err in errors:
        print(f"  {u}: {err}")
    sys.exit(1)
else:
    print("ALL ENDPOINTS RETURNED 200 OK WITH VALID CONTENT!")
    sys.exit(0)
