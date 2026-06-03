Add-Type -AssemblyName System.Drawing

function Make-Bitmap([int]$size) {
  $bmp = New-Object System.Drawing.Bitmap($size, $size)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
  $bg = [System.Drawing.Color]::FromArgb(255, 31, 27, 60)
  $g.Clear($bg)
  $accent = [System.Drawing.Color]::FromArgb(255, 140, 110, 255)
  $brush  = New-Object System.Drawing.SolidBrush($accent)
  $em     = [int]($size * 0.52)
  if ($em -lt 1) { $em = 1 }
  $font   = New-Object System.Drawing.Font('Segoe UI', $em, [System.Drawing.FontStyle]::Bold)
  $sf     = New-Object System.Drawing.StringFormat
  $sf.Alignment     = [System.Drawing.StringAlignment]::Center
  $sf.LineAlignment = [System.Drawing.StringAlignment]::Center
  $rect   = New-Object System.Drawing.RectangleF(0, 0, $size, $size)
  $g.DrawString('F', $font, $brush, $rect, $sf)
  $font.Dispose(); $brush.Dispose(); $g.Dispose()
  return $bmp
}

$resourcesDir = Join-Path $PSScriptRoot '..\resources'
$iconsDir     = Join-Path $resourcesDir 'icons'
New-Item -ItemType Directory -Force -Path $iconsDir | Out-Null

# PNG sizes for Linux
$pngSizes = @(16, 32, 48, 64, 128, 256, 512)
foreach ($sz in $pngSizes) {
  $bmp  = Make-Bitmap $sz
  $path = Join-Path $iconsDir "${sz}x${sz}.png"
  $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  Write-Host "  $path"
}

# Multi-size ICO (Windows)
$icoSizes = @(256, 128, 64, 48, 32, 16)
$bitmaps  = $icoSizes | ForEach-Object { Make-Bitmap $_ }

$pngDatas = foreach ($bmp in $bitmaps) {
  $ps = New-Object System.IO.MemoryStream
  $bmp.Save($ps, [System.Drawing.Imaging.ImageFormat]::Png)
  , $ps.ToArray()
  $ps.Dispose(); $bmp.Dispose()
}

$ms     = New-Object System.IO.MemoryStream
$writer = New-Object System.IO.BinaryWriter($ms)
$count  = $icoSizes.Count

$writer.Write([uint16]0); $writer.Write([uint16]1); $writer.Write([uint16]$count)

$imageOffset = 6 + $count * 16
foreach ($i in 0..($count - 1)) {
  $sz   = $icoSizes[$i]; $data = $pngDatas[$i]
  $w    = if ($sz -ge 256) { [byte]0 } else { [byte]$sz }
  $h    = if ($sz -ge 256) { [byte]0 } else { [byte]$sz }
  $writer.Write($w); $writer.Write($h); $writer.Write([byte]0); $writer.Write([byte]0)
  $writer.Write([uint16]1); $writer.Write([uint16]32)
  $writer.Write([uint32]$data.Length); $writer.Write([uint32]$imageOffset)
  $imageOffset += $data.Length
}
foreach ($data in $pngDatas) { $writer.Write($data) }
$writer.Flush()

$icoPath = Join-Path $resourcesDir 'icon.ico'
[System.IO.File]::WriteAllBytes($icoPath, $ms.ToArray())
$ms.Dispose()

Write-Host "icon.ico written ($((Get-Item $icoPath).Length) bytes)"
Write-Host "Done. icons/ and icon.ico updated."