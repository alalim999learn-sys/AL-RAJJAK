// lib/posts.js
import path from 'path';
import matter from 'gray-matter';

// Dynamically import fs only on the server-side
export function getPostSlugs() {
  if (typeof window === 'undefined') {
    const fs = require('fs');  // Dynamically imported server-side
    const postsDirectory = path.join(process.cwd(), 'posts');
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map(fileName => fileName.replace(/\.md$/, ''));  // Remove `.md` extension
  }
  return [];  // Return empty array for client-side
}

export function getPostBySlug(slug) {
  if (typeof window === 'undefined') {
    const fs = require('fs');  // Dynamically imported server-side
    const realSlug = slug.replace(/\.md$/, '');
    const postsDirectory = path.join(process.cwd(), 'posts');
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data: frontmatter, content } = matter(fileContents);

    return { slug: realSlug, frontmatter, content };
  }
  return {};  // Return empty object for client-side
}

export function getAllPosts() {
  if (typeof window === 'undefined') {
    const slugs = getPostSlugs();
    return slugs.map(slug => getPostBySlug(slug));
  }
  return [];  // Return empty array for client-side
}
