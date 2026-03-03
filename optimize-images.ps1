# Image Optimization Script for Portfolio (Windows PowerShell)
# This script optimizes all PNG/JPG images in src/assets directory

Write-Host "🖼️  Portfolio Image Optimization Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if sharp-cli is installed
$sharpInstalled = Get-Command sharp -ErrorAction SilentlyContinue
if (-not $sharpInstalled) {
    Write-Host "⚠️  sharp-cli not found. Installing..." -ForegroundColor Yellow
    npm install -g sharp-cli
}

# Navigate to assets directory
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$assetsPath = Join-Path $scriptPath "src\assets"
Set-Location $assetsPath

Write-Host "📁 Working directory: $assetsPath" -ForegroundColor Green
Write-Host ""

# Create backup directory
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$backupDir = "originals_backup_$timestamp"
New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
Write-Host "💾 Creating backup in: $backupDir" -ForegroundColor Green

# Backup original files
Copy-Item "*.png" -Destination $backupDir -ErrorAction SilentlyContinue
Copy-Item "*.jpg" -Destination $backupDir -ErrorAction SilentlyContinue
Copy-Item "*.jpeg" -Destination $backupDir -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "🔄 Starting optimization..." -ForegroundColor Cyan
Write-Host ""

# Counter for statistics
$totalOriginalSize = 0
$totalOptimizedSize = 0
$fileCount = 0

# Function to format file size
function Format-FileSize {
    param([long]$size)
    if ($size -gt 1GB) { return "{0:N2} GB" -f ($size / 1GB) }
    if ($size -gt 1MB) { return "{0:N2} MB" -f ($size / 1MB) }
    if ($size -gt 1KB) { return "{0:N2} KB" -f ($size / 1KB) }
    return "$size bytes"
}

# Process PNG files
Get-ChildItem -Filter "*.png" | ForEach-Object {
    $file = $_.Name
    $originalSize = $_.Length

    Write-Host "Processing: $file ($(Format-FileSize $originalSize))" -ForegroundColor White

    # Resize if larger than 1920px width
    & sharp -i $file -o "$($file -replace '.png$','_temp.png')" resize 1920 --withoutEnlargement

    # Convert to WebP with 80% quality
    & sharp -i "$($file -replace '.png$','_temp.png')" -o "$($file -replace '.png$','.webp')" -f webp -q 80

    # Optimize PNG (keep as fallback)
    & sharp -i "$($file -replace '.png$','_temp.png')" -o $file -f png -q 80

    # Remove temp file
    Remove-Item "$($file -replace '.png$','_temp.png')" -ErrorAction SilentlyContinue

    $optimizedSize = (Get-Item $file).Length
    $webpSize = (Get-Item "$($file -replace '.png$','.webp')").Length

    $savings = $originalSize - $optimizedSize
    $webpSavings = $originalSize - $webpSize

    Write-Host "  ✅ PNG: $(Format-FileSize $optimizedSize) (saved $(Format-FileSize $savings))" -ForegroundColor Green
    Write-Host "  ✅ WebP: $(Format-FileSize $webpSize) (saved $(Format-FileSize $webpSavings))" -ForegroundColor Green
    Write-Host ""

    $totalOriginalSize += $originalSize
    $totalOptimizedSize += $webpSize
    $fileCount++
}

# Process JPG/JPEG files
Get-ChildItem -Filter "*.jpg" | ForEach-Object {
    $file = $_.Name
    $originalSize = $_.Length

    Write-Host "Processing: $file ($(Format-FileSize $originalSize))" -ForegroundColor White

    # Resize if larger than 1920px width
    & sharp -i $file -o "$($file -replace '\.(jpg|jpeg)$','_temp.jpg')" resize 1920 --withoutEnlargement

    # Convert to WebP with 80% quality
    & sharp -i "$($file -replace '\.(jpg|jpeg)$','_temp.jpg')" -o "$($file -replace '\.(jpg|jpeg)$','.webp')" -f webp -q 80

    # Optimize JPG (keep as fallback)
    & sharp -i "$($file -replace '\.(jpg|jpeg)$','_temp.jpg')" -o $file -f jpeg -q 80

    # Remove temp file
    Remove-Item "$($file -replace '\.(jpg|jpeg)$','_temp.jpg')" -ErrorAction SilentlyContinue

    $optimizedSize = (Get-Item $file).Length
    $webpSize = (Get-Item "$($file -replace '\.(jpg|jpeg)$','.webp')").Length

    $savings = $originalSize - $optimizedSize
    $webpSavings = $originalSize - $webpSize

    Write-Host "  ✅ JPG: $(Format-FileSize $optimizedSize) (saved $(Format-FileSize $savings))" -ForegroundColor Green
    Write-Host "  ✅ WebP: $(Format-FileSize $webpSize) (saved $(Format-FileSize $webpSavings))" -ForegroundColor Green
    Write-Host ""

    $totalOriginalSize += $originalSize
    $totalOptimizedSize += $webpSize
    $fileCount++
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "✨ Optimization Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📊 Statistics:" -ForegroundColor Cyan
Write-Host "  Files processed: $fileCount"
Write-Host "  Original size: $(Format-FileSize $totalOriginalSize)"
Write-Host "  Optimized size: $(Format-FileSize $totalOptimizedSize)"

if ($totalOriginalSize -gt 0) {
    $savings = $totalOriginalSize - $totalOptimizedSize
    $percentage = [math]::Round(($savings / $totalOriginalSize) * 100, 2)
    Write-Host "  Total savings: $(Format-FileSize $savings) ($percentage%)" -ForegroundColor Green
}

Write-Host ""
Write-Host "💾 Original files backed up to: $backupDir" -ForegroundColor Yellow
Write-Host ""
Write-Host "⚠️  Next steps:" -ForegroundColor Yellow
Write-Host "  1. Update image imports to use .webp files"
Write-Host "  2. Test the website to ensure images load correctly"
Write-Host "  3. If everything works, you can delete the backup folder"
Write-Host ""
