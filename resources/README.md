# Resources

Place platform icons here before packaging:

- `icon.icns` — macOS app icon (1024×1024 source)
- `icon.ico` — Windows app icon (multi-size)
- `icons/` — Linux PNGs at 16, 32, 48, 64, 128, 256, 512

These should be **your own original artwork**. The build scripts will look here.
A simple way to generate all sizes from a single 1024×1024 PNG:

```
npx electron-icon-builder --input=./source.png --output=./resources
```