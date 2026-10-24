"""
Deploy Learniz website to Hostinger via SSH/SFTP
"""

import os
import sys
import io
import tarfile
import subprocess
import urllib.request
import ssl
import paramiko

# Default connection settings
SSH_HOST = os.getenv('DEPLOY_SSH_HOST', '195.35.44.109')
SSH_PORT = int(os.getenv('DEPLOY_SSH_PORT', '65002'))
SSH_USER = os.getenv('DEPLOY_SSH_USER', 'u702871438')
SSH_PASS = os.getenv('DEPLOY_SSH_PASS', 'fasddfdsfa324A@')
TARGET_DOMAIN = os.getenv('DEPLOY_TARGET_DOMAIN', 'floralwhite-eel-288677.hostingersite.com')

REMOTE_BASE = f"/home/{SSH_USER}/domains/{TARGET_DOMAIN}"
REMOTE_PUBLIC_HTML = f"{REMOTE_BASE}/public_html"
ARCHIVE_NAME = "deploy_bundle.tar.gz"
REMOTE_ARCHIVE = f"{REMOTE_BASE}/{ARCHIVE_NAME}"

def step(msg):
    print(f"\n[+] {msg}")

def run_build():
    step("Step 1: Building website for root domain (BASE_PATH='')...")
    env = os.environ.copy()
    env['BASE_PATH'] = ''
    result = subprocess.run([sys.executable, "-c", "import subprocess; subprocess.run(['node', '-e', \"process.env.BASE_PATH=''; import('./build.js')\"], check=True)"], env=env)
    if result.returncode != 0:
        raise RuntimeError("Build failed!")

def create_archive():
    step("Step 2: Creating compressed tar.gz bundle from dist/...")
    archive_path = os.path.join(os.getcwd(), ARCHIVE_NAME)
    if os.path.exists(archive_path):
        os.remove(archive_path)

    dist_dir = os.path.join(os.getcwd(), 'dist')
    if not os.path.isdir(dist_dir):
        raise RuntimeError(f"dist directory not found at {dist_dir}")

    total_files = 0
    with tarfile.open(archive_path, "w:gz") as tar:
        for root, dirs, files in os.walk(dist_dir):
            for file in files:
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, dist_dir)
                tar.add(full_path, arcname=rel_path)
                total_files += 1

    size_mb = os.path.getsize(archive_path) / (1024 * 1024)
    print(f"    Packaged {total_files} files into {ARCHIVE_NAME} ({size_mb:.2f} MB)")
    return archive_path

def deploy_to_hostinger(archive_path):
    step(f"Step 3: Connecting to Hostinger ({SSH_HOST}:{SSH_PORT} as {SSH_USER})...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(SSH_HOST, port=SSH_PORT, username=SSH_USER, password=SSH_PASS, timeout=20)
    print("    SSH Connected successfully.")

    step(f"Step 4: Uploading {ARCHIVE_NAME} via SFTP...")
    sftp = ssh.open_sftp()
    
    # Progress callback
    def progress_callback(transferred, total):
        pct = (transferred / total) * 100 if total else 0
        sys.stdout.write(f"\r    Uploading: {transferred}/{total} bytes ({pct:.1f}%)")
        sys.stdout.flush()

    sftp.put(archive_path, REMOTE_ARCHIVE, callback=progress_callback)
    print("\n    SFTP Upload completed.")
    sftp.close()

    step("Step 5: Extracting files into public_html and setting permissions...")
    commands = [
        f"mkdir -p {REMOTE_PUBLIC_HTML}",
        f"cd {REMOTE_PUBLIC_HTML} && rm -rf * .htaccess .nojekyll",
        f"tar -xzf {REMOTE_ARCHIVE} -C {REMOTE_PUBLIC_HTML}",
        f"rm -f {REMOTE_ARCHIVE}",
        f"chmod -R 755 {REMOTE_PUBLIC_HTML}",
        f"find {REMOTE_PUBLIC_HTML} -type f -exec chmod 644 {{}} +",
        f"ls -la {REMOTE_PUBLIC_HTML} | head -n 15"
    ]
    remote_cmd = " && ".join(commands)
    
    stdin, stdout, stderr = ssh.exec_command(remote_cmd)
    out = stdout.read().decode('utf-8')
    err = stderr.read().decode('utf-8')
    
    print("    Remote command output:\n" + out)
    if err:
        print("    Remote stderr (if any):\n" + err)

    ssh.close()

    # Clean local archive
    if os.path.exists(archive_path):
        os.remove(archive_path)

def verify_live():
    step(f"Step 6: Verifying live site at https://{TARGET_DOMAIN} ...")
    test_urls = [
        "/",
        "/academiz",
        "/features/interactive-animations",
        "/features/intelliq",
        "/features/lms-exam-builder",
        "/features/analytics",
        "/for-institutions",
        "/for-teachers",
        "/for-students",
        "/for-parents",
        "/see-it-live",
        "/founding-schools",
        "/book-demo",
        "/about",
        "/contact",
        "/assets/css/site.css",
        "/assets/css/tokens.css",
        "/assets/js/site.js",
        "/assets/images/favicon.png",
        "/robots.txt",
        "/sitemap.xml"
    ]

    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    passed = 0
    failed = 0

    for path in test_urls:
        url = f"https://{TARGET_DOMAIN}{path}"
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'DeployVerifier/1.0'})
            with urllib.request.urlopen(req, context=ctx, timeout=10) as resp:
                status = resp.status
                length = len(resp.read())
                content_type = resp.headers.get('Content-Type', '')
                if status == 200:
                    print(f"    [OK 200] {path:35} ({length} bytes, {content_type.split(';')[0]})")
                    passed += 1
                else:
                    print(f"    [WARN {status}] {path:35}")
                    failed += 1
        except Exception as e:
            print(f"    [FAIL] {path:35} -> {e}")
            failed += 1

    print(f"\nVerification summary: {passed} passed, {failed} failed out of {len(test_urls)} endpoints tested.")
    if failed == 0:
        print(f"\nSUCCESS! The website is LIVE and fully functional at https://{TARGET_DOMAIN}/")

if __name__ == '__main__':
    try:
        run_build()
        archive = create_archive()
        deploy_to_hostinger(archive)
        verify_live()
    except Exception as e:
        print(f"\nDeployment error: {e}")
        sys.exit(1)
