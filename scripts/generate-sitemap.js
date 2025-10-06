const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://yourdomain.com'; // তোমার সাইটের URL

// Static pages - এখানে তোমার static পেজের path যোগ করো
const staticPages = ['', 'about'];

// posts ফোল্ডার থেকে md ফাইল লোড করো
const postsDir = path.join(process.cwd(), 'posts');
const files = fs.readdirSync(postsDir);

const posts = files
  .filter(file => file.endsWith('.md'))
  .map(file => file.replace(/\.md$/, ''));

// সব URL একত্রিত করো
const allPaths = [...staticPages, ...posts.map(slug => `lt/${slug}`)];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPaths
    .map(
      (url) => `
    <url>
      <loc>${SITE_URL}/${url}</loc>
    </url>
  `
    )
    .join('')}
</urlset>
`;

// public ফোল্ডারে sitemap.xml তৈরি করো
fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);

console.log('Sitemap created successfully!');
