const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://lemonskn.com';
const postsDir = path.join(process.cwd(), 'posts');

function getPosts() {
  try {
    const files = fs.readdirSync(postsDir);
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => `/lt/${file.replace(/\.md$/, '')}`);
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  outDir: './out',

  additionalPaths: async (config) => {
    const posts = getPosts();

    return posts.map(url => ({
      loc: url,
      changefreq: 'daily',
      priority: 0.9, // ✅ Article এর জন্য priority বেশি
    }));
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [`${SITE_URL}/sitemap.xml`],
  },
};
