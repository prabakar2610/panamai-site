#!/bin/bash

cd /Users/prabakar.ammeappin/Personal/Panamai/Panamai_site_converstion/panamai-site

echo "🔄 Restoring original beautiful static website..."

# Fetch the original commit
git fetch origin

# Restore original HTML files from the initial commit (3625d5b)
echo "📄 Restoring HTML files..."
git checkout 3625d5b -- index.html
git checkout 3625d5b -- tutorials.html
git checkout 3625d5b -- tools.html
git checkout 3625d5b -- blog.html
git checkout 3625d5b -- consulting.html
git checkout 3625d5b -- aihub.html

# Restore original assets with CSS
echo "🎨 Restoring assets and CSS..."
rm -rf assets
git checkout 3625d5b -- assets/

# Backup dynamic files (optional)
echo "💾 Backing up dynamic files..."
mkdir -p _backup
mv views _backup/ 2>/dev/null || true
mv server.js _backup/ 2>/dev/null || true
mv build-static.js _backup/ 2>/dev/null || true  
mv public _backup/ 2>/dev/null || true

# Commit and push
echo "📤 Committing restoration..."
git add .
git commit -m "🔄 Restore original static HTML website with beautiful design"
git push origin main

echo ""
echo "✅ Original website restored successfully!"
echo "🌐 Visit https://panamai.in in 1-2 minutes"
echo "💾 Dynamic files backed up in _backup/ folder"

