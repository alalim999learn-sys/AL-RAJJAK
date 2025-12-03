{/*AL-RAJJAK*/}
































































































// pages/ro/[slug].js
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';

import Layoutro from '../../component/Layoutro';
import OldLayoutro, { getStructuredData as getOldSchema } from '../../component/OldLayoutro';
import NewLayoutro, { getStructuredData as getNewSchema } from '../../component/NewLayoutro';

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'posts/ro');
  if (!fs.existsSync(postsDir)) return { paths: [], fallback: false };

  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  const paths = files.map(file => ({
    params: { slug: file.replace(/\.md$/, '') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    const fullPath = path.join(process.cwd(), 'posts/ro', `${params.slug}.md`);
    if (!fs.existsSync(fullPath)) return { notFound: true };

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data: rawFrontmatter, content: markdownContent } = matter(fileContents);
    const frontmatter = rawFrontmatter || {};




    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeSanitize)
      .use(rehypeStringify)
      .process(markdownContent || '');

    const contentHtml = processedContent.toString();

    // Products 1–9
    const products = Array.from({ length: 9 }, (_, i) => {
      const n = i + 1;
      const productName = frontmatter[`productname${n}`];
      if (!productName) return null;

      const pros = [], reviews = [];
      for (let j = 1; j <= 5; j++) {
        const p = frontmatter[`pros${n}${j}`];
        if (p && p !== '@') pros.push(p.trim());
        const r = frontmatter[`review${n}${j}`];
        if (r && r !== '@') reviews.push(r.trim());
      }

      return {
        image: frontmatter[`image${n}`] || null,
        productName: productName.trim(),
        price: frontmatter[`price${n}`] || null,
        pros,
        reviews,
        star: Number(frontmatter[`star${n}`]) || 0,
        best: frontmatter[`best${n}`] || null,
        url: frontmatter[`url${n}`] || null,
        intro: frontmatter[`intro${n}`] || null,
        imagetext: frontmatter[`imagetext${n}`] || productName,
      };
    }).filter(Boolean);

    return {
      props: {
        post: { frontmatter, content: contentHtml },
        products,
        slug: params.slug,
      },
    };
  } catch (err) {
    console.error(err);
    return { notFound: true };
  }
}

export default function Post({ post, products, slug }) {
  if (!post?.frontmatter) {
    return <div className="text-center py-40 text-4xl text-red-600">Puslapis nerastas</div>;
  }

  const { frontmatter, content } = post;
  const layoutType = frontmatter.layout || 'old';
  const LayoutComponent = layoutType === 'new' ? NewLayoutro : OldLayoutro;

  const structuredData = layoutType === 'new'
    ? getNewSchema({ frontmatter, slug })
    : getOldSchema({ frontmatter, products, slug });

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://lemonskn.com/ro/${slug}`} />
        <link rel="alternate" hrefLang="en" href={`https://lemonskn.com/${slug}`} />
        <link rel="alternate" hrefLang="lt" href={`https://lemonskn.com/lt/${slug}`} />
        <link rel="alternate" hrefLang="ro" href={`https://lemonskn.com/ro/${slug}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://lemonskn.com/${slug}`} />
        <link rel="icon" href="/lemonskn.png" />

        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
        <meta property="og:image" content={frontmatter.img || "https://lemonskn.com/lemonskn.png"} />
        <meta property="og:url" content={`https://lemonskn.com/ro/${slug}`} />
        <meta property="og:locale" content="ro_RO" />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
        />
      </Head>

      <Layoutro>
        <LayoutComponent
          frontmatter={frontmatter}
          content={content}
          products={products}
          slug={slug}
        />
      </Layoutro>
    </>
  );
}


