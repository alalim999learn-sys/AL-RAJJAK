{/*AL-RAJJAK*/}


































































































// pages/lt/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';

import OldLayout from '../../component/OldLayoutro';
import NewLayout from '../../component/NewLayoutro';
import Layoutlt from '../../component/Layoutro';

// ------------------ STATIC PATHS ------------------
export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'posts/ro');
  if (!fs.existsSync(postsDir)) return { paths: [], fallback: false };

  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  const paths = files.map(file => ({
    params: { slug: file.replace(/\.md$/, '') },
  }));

  return { paths, fallback: false };
}

// ------------------ STATIC PROPS ------------------
export async function getStaticProps({ params }) {
  try {
    const fullPath = path.join(process.cwd(), 'posts/ro', `${params.slug}.md`);
    if (!fs.existsSync(fullPath)) return { notFound: true };

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data: rawFrontmatter, content: markdownContent } = matter(fileContents);

    const frontmatter = rawFrontmatter || {};

    // Markdown → HTML (নিরাপদ উপায়ে)
    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeSanitize)
      .use(rehypeStringify)
      .process(markdownContent || '');

    const contentHtml = processedContent.toString();

    // ------------------ Products ------------------
    const products = Array.from({ length: 9 }, (_, i) => {
      const n = i + 1;
      const productName = frontmatter[`productname${n}`];
      if (!productName) return null;

      const pros = [];
      for (let j = 1; j <= 5; j++) {
        const pro = frontmatter[`pros${n}${j}`];
        if (typeof pro === 'string' && pro.trim() && pro !== '@') pros.push(pro);
      }

      const reviews = [];
      for (let k = 1; k <= 5; k++) {
        const rev = frontmatter[`review${n}${k}`];
        if (typeof rev === 'string' && rev.trim() && rev !== '@') reviews.push(rev);
      }

      return {
        image: frontmatter[`image${n}`] || null,
        productName,
        price: frontmatter[`price${n}`] || null,
        pros,
        reviews,
        star: Number(frontmatter[`star${n}`]) || 0,
        best: frontmatter[`best${n}`] || null,
        url: frontmatter[`url${n}`] || null,
        intro: frontmatter[`intro${n}`] || null,
        description: frontmatter.description || '',
        imagetext: frontmatter[`imagetext${n}`] || productName || 'Product image',
        amount: Number(frontmatter[`amount${n}`]) || reviews.length || 0,
      };
    }).filter(Boolean);

    return {
      props: {
        post: { frontmatter, content: contentHtml },
        products,
        slug: params.slug, // slug পাঠানো হচ্ছে
      },
    };
  } catch (err) {
    console.error('Error in getStaticProps:', err);
    return { notFound: true };
  }
}

// ------------------ MAIN COMPONENT ------------------
export default function Post({ post, products, slug }) {
  if (!post || !post.frontmatter) return <h2>Error
  </h2>

  const { frontmatter, content } = post;
  const layoutType = frontmatter.layout || 'old';

  // লেআউট বাছাই করা
  const LayoutComponent = layoutType === 'new' ? NewLayout : OldLayout;

  return (
    <Layoutlt>
      <LayoutComponent
        frontmatter={frontmatter}
        content={content}
        products={products}
        slug={slug} // slug পাঠানো হচ্ছে
      />
    </Layoutlt>
  );
}