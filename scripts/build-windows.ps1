#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Build a Framora Windows installer (NSIS .exe + portable .exe).

.DESCRIPTION
    Compiles TypeScript via electron-vite, packages with electron-builder,
    and optionally bumps the version and/or publishes the release to GitHub.

.PARAMETER Version
    New semver string to stamp into package.json before building.
    Omit to keep the current version.

.PARAMETER Publish
    When set, upload the installer + latest.yml to a GitHub Release.
    Requires GH_TOKEN in the environment (a GitHub personal access token
    with repo write permissions, or ${{ secrets.GITHUB_TOKEN }} in CI).

.PARAMETER Sign
    When set, sign the installer with the certificate pointed to by
    CSC_LINK (path or URL to .p12) and CSC_KEY_PASSWORD.

.EXAMPLE
    # Local build, no publish
    .\scripts\build-windows.ps1

.EXAMPLE
    # Bump to 1.2.0 and publish to GitHub Releases
    .\scripts\build-windows.ps1 -Version 1.2.0 -Publish

.EXAMPLE
    # Build + sign locally
    $env:CSC_LINK = "C:\certs\framora.p12"
    $env:CSC_KEY_PASSWORD = "secret"
    .\scripts\build-windows.ps1 -Sign
#>

[CmdletBinding()]
param(
    [string]  $Version  = "",
    [switch]  $Publish,
    [switch]  $Sign
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

# ── Locate project root ───────────────────────────────────────────────────────
$scriptDir  = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectDir = Split-Path -Parent $scriptDir
Push-Location $projectDir

try {
    # ── 1. Optional version bump ──────────────────────────────────────────────
    if ($Version -ne "") {
        Write-Host "⬆  Bumping version to $Version" -ForegroundColor Cyan
        $pkg = Get-Content package.json -Raw | ConvertFrom-Json
        $old = $pkg.version
        $pkg.version = $Version
        # ConvertTo-Json depth 10 preserves all nested keys
        $pkg | ConvertTo-Json -Depth 10 | Set-Content package.json -Encoding UTF8
        Write-Host "   $old → $Version"
    }

    $currentVersion = (Get-Content package.json -Raw | ConvertFrom-Json).version
    Write-Host ""
    Write-Host "🔨 Building Framora $currentVersion" -ForegroundColor Green

    # ── 2. Compile (electron-vite) ────────────────────────────────────────────
    Write-Host ""
    Write-Host "▶  electron-vite build …" -ForegroundColor Yellow
    & npm run build
    if ($LASTEXITCODE -ne 0) { throw "electron-vite build failed (exit $LASTEXITCODE)" }

    # ── 3. Signing env vars ───────────────────────────────────────────────────
    if ($Sign) {
        if (-not $env:CSC_LINK)         { throw "CSC_LINK env var required for signing" }
        if (-not $env:CSC_KEY_PASSWORD) { throw "CSC_KEY_PASSWORD env var required for signing" }
        Write-Host "🔏 Code-signing enabled (CSC_LINK = $env:CSC_LINK)" -ForegroundColor Cyan
    } else {
        # Explicitly clear signing vars so electron-builder doesn't try to sign
        Remove-Item Env:\CSC_LINK          -ErrorAction SilentlyContinue
        Remove-Item Env:\CSC_KEY_PASSWORD  -ErrorAction SilentlyContinue
        $env:CSC_IDENTITY_AUTO_DISCOVERY = "false"
        Write-Host "ℹ  Skipping code signing (pass -Sign to enable)" -ForegroundColor DarkGray
    }

    # ── 4. electron-builder ───────────────────────────────────────────────────
    Write-Host ""
    Write-Host "▶  electron-builder --win …" -ForegroundColor Yellow

    $builderArgs = @("--win")
    if ($Publish) {
        if (-not $env:GH_TOKEN) { throw "GH_TOKEN env var required for publishing" }
        $builderArgs += "--publish"
        $builderArgs += "always"
        Write-Host "🚀 Publishing to GitHub Releases" -ForegroundColor Magenta
    } else {
        $builderArgs += "--publish"
        $builderArgs += "never"
    }

    & npx electron-builder @builderArgs
    if ($LASTEXITCODE -ne 0) { throw "electron-builder failed (exit $LASTEXITCODE)" }

    # ── 5. Report output ──────────────────────────────────────────────────────
    Write-Host ""
    Write-Host "✅ Build complete — outputs in dist/" -ForegroundColor Green
    Write-Host ""
    Get-ChildItem dist -Filter "*.exe" -ErrorAction SilentlyContinue |
        Select-Object Name, @{n='MB';e={[math]::Round($_.Length/1MB,1)}} |
        Format-Table -AutoSize

    if ($Publish) {
        Write-Host "🌐 Release published to:" -ForegroundColor Magenta
        Write-Host "   https://github.com/computerex/framora/releases" -ForegroundColor Cyan
    }

} finally {
    Pop-Location
}