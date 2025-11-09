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
