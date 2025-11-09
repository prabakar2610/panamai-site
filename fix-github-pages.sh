#!/bin/bash

cd /Users/prabakar.ammeappin/Personal/Panamai/Panamai_site_converstion/panamai-site

echo "🔧 Fixing GitHub Pages to show proper home page..."

# Create build script
cat > build-static.js << 'BUILDEOF'
const ejs = require('ejs');
const fs = require('fs');

const pages = [
    { template: 'views/index.ejs', output: 'index.html', title: 'Home', page: 'home' },
    { template: 'views/tutorials.ejs', output: 'tutorials.html', title: 'Learn', page: 'tutorials' },
    { template: 'views/tools.ejs', output: 'tools.html', title: 'Tools', page: 'tools' },
    { template: 'views/blog.ejs', output: 'blog.html', title: 'Blog', page: 'blog' },
    { template: 'views/consulting.ejs', output: 'consulting.html', title: 'Advisory', page: 'consulting' },
    { template: 'views/aihub.ejs', output: 'aihub.html', title: 'AI Hub', page: 'aihub' }
];

console.log('🔨 Building static HTML files...\n');

pages.forEach(({ template, output, title, page }) => {
    ejs.renderFile(template, { title, page, description: `PanamAI - ${title}` }, (err, html) => {
        if (err) {
            console.error(`❌ Error: ${template}`, err.message);
            return;
        }
        fs.writeFileSync(output, html);
        console.log(`✅ ${output}`);
    });
});

console.log('\n✨ Build complete!');
BUILDEOF

# Run the build
node build-static.js

# Move assets to root if needed (GitHub Pages expects them in root or /assets)
if [ -d "public/assets" ] && [ ! -d "assets" ]; then
    cp -r public/assets ./assets
    echo "📁 Copied assets to root"
fi

# Update package.json with build script
cat > package.json << 'PKGEOF'
{
  "name": "panamai-site",
  "version": "1.0.0",
  "description": "PanamAI Multi-Product Website",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "build": "node build-static.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "ejs": "^3.1.9",
    "body-parser": "^1.20.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
PKGEOF

# Commit changes
git add .
git commit -m "🔧 Fix GitHub Pages - Generate static HTML from EJS templates"
git push origin main

echo ""
echo "✅ Fix complete!"
echo "🌐 Your website at panamai.in should now show the home page instead of README"
echo "⏳ Wait 1-2 minutes for GitHub Pages to rebuild and deploy"

