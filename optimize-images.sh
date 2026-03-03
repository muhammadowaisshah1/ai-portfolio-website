#!/bin/bash
# Image Optimization Script for Portfolio
# This script optimizes all PNG images in src/assets directory

echo "🖼️  Portfolio Image Optimization Script"
echo "========================================"
echo ""

# Check if sharp-cli is installed
if ! command -v sharp &> /dev/null; then
    echo "⚠️  sharp-cli not found. Installing..."
    npm install -g sharp-cli
fi

# Navigate to assets directory
cd "$(dirname "$0")/src/assets" || exit

echo "📁 Working directory: $(pwd)"
echo ""

# Create backup directory
BACKUP_DIR="originals_backup_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"
echo "💾 Creating backup in: $BACKUP_DIR"

# Backup original files
cp *.png "$BACKUP_DIR/" 2>/dev/null || echo "No PNG files to backup"
cp *.jpg "$BACKUP_DIR/" 2>/dev/null || echo "No JPG files to backup"
cp *.jpeg "$BACKUP_DIR/" 2>/dev/null || echo "No JPEG files to backup"

echo ""
echo "🔄 Starting optimization..."
echo ""

# Counter for statistics
total_original_size=0
total_optimized_size=0
file_count=0

# Process PNG files
for file in *.png; do
    if [ -f "$file" ]; then
        original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)

        echo "Processing: $file ($(numfmt --to=iec-i --suffix=B $original_size 2>/dev/null || echo "$original_size bytes"))"

        # Resize if larger than 1920px width
        sharp -i "$file" -o "${file%.png}_temp.png" resize 1920 --withoutEnlargement

        # Convert to WebP with 80% quality
        sharp -i "${file%.png}_temp.png" -o "${file%.png}.webp" -f webp -q 80

        # Optimize PNG (keep as fallback)
        sharp -i "${file%.png}_temp.png" -o "$file" -f png -q 80

        # Remove temp file
        rm "${file%.png}_temp.png"

        optimized_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        webp_size=$(stat -f%z "${file%.png}.webp" 2>/dev/null || stat -c%s "${file%.png}.webp" 2>/dev/null)

        savings=$((original_size - optimized_size))
        webp_savings=$((original_size - webp_size))

        echo "  ✅ PNG: $(numfmt --to=iec-i --suffix=B $optimized_size 2>/dev/null || echo "$optimized_size bytes") (saved $(numfmt --to=iec-i --suffix=B $savings 2>/dev/null || echo "$savings bytes"))"
        echo "  ✅ WebP: $(numfmt --to=iec-i --suffix=B $webp_size 2>/dev/null || echo "$webp_size bytes") (saved $(numfmt --to=iec-i --suffix=B $webp_savings 2>/dev/null || echo "$webp_savings bytes"))"
        echo ""

        total_original_size=$((total_original_size + original_size))
        total_optimized_size=$((total_optimized_size + webp_size))
        file_count=$((file_count + 1))
    fi
done

# Process JPG/JPEG files
for file in *.jpg *.jpeg; do
    if [ -f "$file" ]; then
        original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)

        echo "Processing: $file ($(numfmt --to=iec-i --suffix=B $original_size 2>/dev/null || echo "$original_size bytes"))"

        # Resize if larger than 1920px width
        sharp -i "$file" -o "${file%.*}_temp.jpg" resize 1920 --withoutEnlargement

        # Convert to WebP with 80% quality
        sharp -i "${file%.*}_temp.jpg" -o "${file%.*}.webp" -f webp -q 80

        # Optimize JPG (keep as fallback)
        sharp -i "${file%.*}_temp.jpg" -o "$file" -f jpeg -q 80

        # Remove temp file
        rm "${file%.*}_temp.jpg"

        optimized_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        webp_size=$(stat -f%z "${file%.*}.webp" 2>/dev/null || stat -c%s "${file%.*}.webp" 2>/dev/null)

        savings=$((original_size - optimized_size))
        webp_savings=$((original_size - webp_size))

        echo "  ✅ JPG: $(numfmt --to=iec-i --suffix=B $optimized_size 2>/dev/null || echo "$optimized_size bytes") (saved $(numfmt --to=iec-i --suffix=B $savings 2>/dev/null || echo "$savings bytes"))"
        echo "  ✅ WebP: $(numfmt --to=iec-i --suffix=B $webp_size 2>/dev/null || echo "$webp_size bytes") (saved $(numfmt --to=iec-i --suffix=B $webp_savings 2>/dev/null || echo "$webp_savings bytes"))"
        echo ""

        total_original_size=$((total_original_size + original_size))
        total_optimized_size=$((total_optimized_size + webp_size))
        file_count=$((file_count + 1))
    fi
done

echo "========================================"
echo "✨ Optimization Complete!"
echo ""
echo "📊 Statistics:"
echo "  Files processed: $file_count"
echo "  Original size: $(numfmt --to=iec-i --suffix=B $total_original_size 2>/dev/null || echo "$total_original_size bytes")"
echo "  Optimized size: $(numfmt --to=iec-i --suffix=B $total_optimized_size 2>/dev/null || echo "$total_optimized_size bytes")"

if [ $total_original_size -gt 0 ]; then
    savings=$((total_original_size - total_optimized_size))
    percentage=$((savings * 100 / total_original_size))
    echo "  Total savings: $(numfmt --to=iec-i --suffix=B $savings 2>/dev/null || echo "$savings bytes") ($percentage%)"
fi

echo ""
echo "💾 Original files backed up to: $BACKUP_DIR"
echo ""
echo "⚠️  Next steps:"
echo "  1. Update image imports to use .webp files"
echo "  2. Test the website to ensure images load correctly"
echo "  3. If everything works, you can delete the backup folder"
echo ""
