// lib/posts.js
import path from 'path';
import matter from 'gray-matter';

// Dynamically import fs only on the server-side
export function getPostSlugs(lang = '') {
  if (typeof window === 'undefined') {
    const fs = require('fs');
    const postsDirectory = lang ? path.join(process.cwd(), 'posts', lang) : path.join(process.cwd(), 'posts');
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter(file => file.endsWith('.md'))
      .map(fileName => fileName.replace(/\.md$/, ''));
  }
  return [];
}

export function getPostBySlug(slug, lang = '') {
  if (typeof window === 'undefined') {
    const fs = require('fs');
    const postsDirectory = lang ? path.join(process.cwd(), 'posts', lang) : path.join(process.cwd(), 'posts');
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data: frontmatter, content } = matter(fileContents);

    return { slug, frontmatter, content };
  }
  return {};
}

export function getAllPosts(lang = '') {
  if (typeof window === 'undefined') {
    const slugs = getPostSlugs(lang);
    return slugs.map(slug => getPostBySlug(slug, lang));
  }
  return [];
}
