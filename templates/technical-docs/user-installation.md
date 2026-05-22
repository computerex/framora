# Installation (client)

> Install **[Product component]** on [OS list] to [local dev / run jobs / sync files].

## Download
| Platform | Package | Checksum |
| --- | --- | --- |
| Windows | [Product]-[version].msi | [sha256] |
| macOS | [Product].pkg (Apple silicon + Intel) | [sha256] |
| Linux | [deb] / [rpm] / [AppImage] | [sha256] |

## Windows
1. Run installer — [install path, service option]
2. `[Product]` in Start Menu
3. First launch: [sign in / device link]

```powershell
# Optional: winget
winget install [Id]
```

## macOS
- [Gatekeeper: right-click open] if unsigned build  
- [Homebrew: `brew install --cask [tap]`]

## Linux dependencies
- `[lib...]` — [apt/yum one-liners]

## Verify
```bash
[product] --version
[product] doctor
```

## Uninstall
- [OS-specific: remove, retain config at `[path]`]

## Autoupdate
- **Channel:** [stable | beta] — [opt-in] — [rollback policy]
