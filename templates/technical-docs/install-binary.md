# Install from binary

> **Download* *dir* *[`[releases* */* *assets* *page* *or* *S3* *mirror`] —* *gpg* *or* *cosign* *where* *published* *—* *min* *glibc* *[`[X.Y`]*  *or* *musl* *build* for *[`[alpine* *users`]*  *

```bash
[OS=linux; ARCH=amd64]
curl -fL -o [bin] "https://[...]/[product]_[v]_[OS]_[ARCH][.ext]"
# verify (example with sha256)
[sha256sum|shasum -a 256] [bin] | [cmp with published CHECKSUMS]
[chmod +x [bin] && mv [bin] [install_path]]
```

| Platform | Package | Notes |
| --- | --- | --- |
| **Windows** | `[.zip|msi]` | *Use* *PowerShell* *`[Get-FileHash`]*  *—* *install* *to* *[`[Program* *Files* */* *user* *local* *bin`]*  |
| **macOS** | `[.tar.gz|pkg]` | *Notarize* *gatekeeper* *—* *arm64* *vs* *x86* *fat* *binary* *flag* in *name* *[`[…-darwin-arm64`]*  |

## PATH
- *`[install* *to* *~/.*local/bin`] *or* *[`[brew* *--prefix`]*  *and* *add* *to* *shell* *rc* *file* *—* *Windows* *`[User* *Path`]*  *GUI* *or* *[`[setx`]*  *

## Auto-update
- *Built-in* *`[version* *check`] *—* *opt-in* *—* *CI* *users* *should* *pin* *with* *[`[checksum`]*  *in* *[script]**
