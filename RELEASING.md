# Releasing Framora

Step-by-step guide for cutting a release, publishing installers, and
keeping auto-update working for existing users.

---

## 1 — Prerequisites

| Tool | Why |
|---|---|
| Node ≥ 20 | build toolchain |
| Git (SSH auth to GitHub) | tagging & pushing |
| `GH_TOKEN` env var | publishing to GitHub Releases |

```powershell
# one-time: set GH_TOKEN for local releases
$env:GH_TOKEN = "ghp_xxxxxxxxxxxxxxxxxxxx"
```

A GitHub Personal Access Token needs `repo` → `write` scope.
In CI (`secrets.GITHUB_TOKEN`) it is granted automatically.

---

## 2 — Bump the version

Edit **`package.json`** (one file to change):

```json
"version": "0.1.2"
```

Commit it:

```powershell
git add package.json
git commit -m "chore: bump to v0.1.2"
git push
```

> **Semver guide**
> | Change | Version bump |
> |---|---|
> | Bug fixes only | `0.1.x` patch |
> | New features, backwards-compatible | `0.x.0` minor |
> | Breaking / major redesign | `x.0.0` major |

---

## 3 — Tag and push

```powershell
git tag v0.1.2
git push origin v0.1.2
```

Pushing a tag that matches `v*` triggers the GitHub Actions
**Release** workflow (`.github/workflows/release.yml`).

---

## 4 — What CI does automatically

Three jobs run in parallel on GitHub's runners:

| Job | Runner | Outputs |
|---|---|---|
| `build-win` | `windows-latest` | `Framora Setup 0.1.2.exe` (NSIS x64/arm64/ia32), `Framora 0.1.2.exe` (portable), `latest.yml` |
| `build-mac` | `macos-latest` | `Framora-0.1.2.dmg`, `Framora-0.1.2-mac.zip`, `latest-mac.yml` |
| `build-linux` | `ubuntu-latest` | `Framora-0.1.2.AppImage`, `framora_0.1.2_amd64.deb`, `latest-linux.yml` |

All artifacts are uploaded to a GitHub Release at
`https://github.com/computerex/framora/releases/tag/v0.1.2`.

Monitor progress: `https://github.com/computerex/framora/actions`

---

## 5 — How auto-update reaches users

`electron-updater` is built into every installed copy of Framora.
When the app starts:

1. Waits **5 seconds** (so the window is visible first)
2. Downloads `latest.yml` from the GitHub Release silently
3. Compares the version against the running version
4. If newer: **starts downloading the installer in the background**
5. Shows a slim banner: `↓ Framora 0.1.2 — downloading update… 67%`
6. On completion banner turns green: `✓ Framora 0.1.2 is ready — Restart & Install`
7. User clicks → `quitAndInstall()` → new version launches

Background checks also repeat every **4 hours** while the app is open.

The `latest.yml` manifest (published by `electron-builder --publish always`)
is what makes this work — it tells `electron-updater` the latest version,
file name, and SHA512 hash so the download can be verified.

---

## 6 — Build locally without publishing (testing)

```powershell
cd framora

# Windows NSIS installer into dist/
npm run package:win

# Or use the build script (supports version bump + signing)
.\scripts\build-windows.ps1                          # just build
.\scripts\build-windows.ps1 -Version 0.1.2          # bump + build
.\scripts\build-windows.ps1 -Version 0.1.2 -Publish # bump + build + upload
.\scripts\build-windows.ps1 -Sign                    # build + sign (needs CSC_LINK)
```

macOS:
```bash
npm run package:mac
```

Linux:
```bash
npm run package:linux
```

---

## 7 — Code signing (optional but recommended)

Unsigned installers trigger SmartScreen warnings on Windows and Gatekeeper
on macOS. To sign:

### Windows
```powershell
$env:CSC_LINK         = "C:\certs\framora.p12"  # or a URL
$env:CSC_KEY_PASSWORD = "your-password"
.\scripts\build-windows.ps1 -Sign
```

In CI: add `WIN_CSC_LINK` and `WIN_CSC_KEY_PASSWORD` as repository secrets
and uncomment the relevant lines in `.github/workflows/release.yml`.

### macOS
```bash
export CSC_LINK="$HOME/certs/framora.p12"
export CSC_KEY_PASSWORD="your-password"
# For notarization:
export APPLE_ID="you@example.com"
export APPLE_APP_SPECIFIC_PASSWORD="xxxx-xxxx-xxxx-xxxx"
export APPLE_TEAM_ID="XXXXXXXXXX"
npm run package:mac
```

In CI: add `MAC_CSC_LINK`, `MAC_CSC_KEY_PASSWORD`, `APPLE_ID`,
`APPLE_APP_SPECIFIC_PASSWORD`, `APPLE_TEAM_ID` as repository secrets and
uncomment the relevant lines in the workflow.

---

## 8 — Regenerate icons

If you update the app icon, regenerate all sizes from a single source:

```powershell
# Regenerates resources/icon.ico (Windows) and resources/icons/*.png (Linux)
powershell -ExecutionPolicy Bypass -File scripts/gen-icons.ps1
```

For macOS, create `resources/icon.icns` from a 1024×1024 PNG:
```bash
# macOS only
mkdir icon.iconset
sips -z 16 16 icon-1024.png --out icon.iconset/icon_16x16.png
# ... (add all sizes) ...
iconutil -c icns icon.iconset -o resources/icon.icns
```

---

## 9 — Quick-reference checklist

```
[ ] Edit version in package.json
[ ] git add package.json && git commit -m "chore: bump to vX.Y.Z"
[ ] git push
[ ] git tag vX.Y.Z && git push origin vX.Y.Z
[ ] Watch https://github.com/computerex/framora/actions
[ ] Verify release at https://github.com/computerex/framora/releases
[ ] Smoke-test the installer on Windows
[ ] Done — existing users auto-update within 5 min of opening the app
```