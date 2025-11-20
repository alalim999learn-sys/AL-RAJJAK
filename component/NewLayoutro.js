











// component/NewLayout.js
import React, { useMemo } from 'react';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';

export default function NewLayout({
  frontmatter = {},
  content = '',
  products = [],
  slug = ''
}) {
  if (!frontmatter?.title) {
    return <h2 className="text-center text-red-500">কোনো তথ্য পাওয়া যায়নি</h2>;
  }

  // Safe array checks
  const problemList = Array.isArray(frontmatter.problemList)
    ? frontmatter.problemList.filter(item => item && typeof item === "string")
    : [];

  const solutionList = Array.isArray(frontmatter.solutionList)
    ? frontmatter.solutionList.filter(item => item && typeof item === "string")
    : [];

  const comparisonTable = Array.isArray(frontmatter.comparisonTable)
    ? frontmatter.comparisonTable
    : [];

  const routineList = Array.isArray(frontmatter.routineList)
    ? frontmatter.routineList
    : [];

  const faqList = Array.isArray(frontmatter.faqList) ? frontmatter.faqList : [];

  // SEO Schema
  const articleSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: frontmatter.title,
      description: frontmatter.description || "একটি বিস্তারিত গাইড।",
      image: frontmatter.image1 || "https://lemonskn.com/og-default.jpg",
      author: { "@type": "Person", name: "Lemonskn Team" },
      publisher: {
        "@type": "Organization",
        name: "Lemonskn",
        logo: { "@type": "ImageObject", url: "https://lemonskn.com/logo.png" }
      },
      datePublished: frontmatter.date || new Date().toISOString().split("T")[0],
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://lemonskn.com/lt/${slug}`
      }
    }),
    [frontmatter, slug]
  );

  return (
    <>
      <Head>
        <title>{frontmatter.title} | Lemonskn</title>
        <meta name="description" content={frontmatter.description || ''} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description || ''} />
        <meta property="og:image" content={frontmatter.image1 || 'https://lemonskn.com/og-default.jpg'} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://lemonskn.com/lt/${slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        {faqList.length > 0 && (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqList.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }),
    }}
  />
)}
      </Head>

      {/* GLOBAL CSS */}
      <style jsx global>{`
        .new-layout__container { padding: 0 8%; line-height: 1.7; color: #333; }
        .new-layout__main-title { font-size: 2.5rem; font-weight: bold; color: #111; }
        .new-layout__sub-title { font-size: 1.75rem; color: #555; margin-top: .3rem; }
        .new-layout__section-title {
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 1rem;
          position: relative;
          padding-bottom: .5rem;
        }
        .new-layout__section-title::after {
          content: "";
          width: 60px;
          height: 4px;
          background: #facc15;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        .new-layout__intro { border-left: 5px solid #facc15; background: #fffbeb; padding: 1rem; text-align: center; border-radius: .5rem; }
        .new-layout__problem { background: #fff7f7; border: 1px solid #ffd1d1; padding: 1rem 1.2rem; border-radius: .5rem; }
        .new-layout__solution { border-left: 5px solid #34d399; background: #ecfdf5; padding: 1rem 1.2rem; margin-top: 2rem; }
        .faq-visible-box { padding: 1rem; border: 1px solid #ddd; background: #fafafa; border-radius: .5rem; margin-bottom: 1rem; }
        .faq-q { font-weight: bold; margin-bottom: .5rem; }
        .new-layout__table { width: 100%; border: 1px solid #eee; border-radius: .5rem; overflow: hidden; margin-top: 1rem; }
        .new-layout__th { background: #f3f4f6; padding: .75rem; font-weight: 600; }
        .new-layout__td { padding: .75rem; border-bottom: 1px solid #eee; }
        @media (max-width: 768px) { .new-layout__main-title { font-size: 2rem; } .new-layout__intro img { width: 90%; } }
      `}</style>

      <div className="new-layout__container max-w-4xl mx-auto py-8">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="new-layout__main-title">{frontmatter.keyword1}</h1>
          <h2 className="new-layout__sub-title">{frontmatter.keyword2}</h2>
        </header>

        {/* Intro */}
        {frontmatter.intro && (
          <section className="new-layout__intro">
            <img src={frontmatter.img} loading="lazy" alt="intro" style={{ width: "35%", marginBottom: "1rem" }} />
            <p>{frontmatter.intro}</p>
          </section>
        )}

        {/* Problem Section */}
        {frontmatter.problemTitle && <h2 className="new-layout__section-title mt-10">{frontmatter.problemTitle}</h2>}
        {problemList.length > 0 && (
          <section className="new-layout__problem mb-10">
            <ul>
              {problemList.map((item, i) => <li key={i}>✔ {item}</li>)}
            </ul>
          </section>
        )}

        {/* Solution Section */}
        {(frontmatter.solution || solutionList.length > 0) && (
          <section className="new-layout__solution">
            <h2 className="new-layout__section-title">Solution</h2>
            {frontmatter.solution && <p>{frontmatter.solution}</p>}
            {solutionList.length > 0 && (
              <ul>
                {solutionList.map((item, i) => <li key={i}>✔ {item}</li>)}
              </ul>
            )}
          </section>
        )}

        {/* Do/Don't Table */}
        {comparisonTable.length > 0 && (
          <section className="mt-10">
            <h2 className="new-layout__section-title">{frontmatter.comparisonTitle || "Do / Don't"}</h2>
            <table className="new-layout__table">
              <thead>
                <tr>
                  <th className="new-layout__th text-green-600">Do</th>
                  <th className="new-layout__th text-red-600">Don't</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, i) => (
                  <tr key={i}>
                    <td className="new-layout__td">{row.do || "—"}</td>
                    <td className="new-layout__td">{row.dont || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {/* Routine */}
        {routineList.length > 0 && (
          <section className="mt-10">
            <h2 className="new-layout__section-title"></h2>
            <ol>
              {routineList.map((item, i) => <li key={i}>{item}</li>)}
            </ol>
          </section>
        )}

        {/* FAQ */}
        {faqList.length > 0 && (
          <section className="mt-12 mb-12">
            <h2 className="new-layout__section-title">FAQ</h2>
            {faqList.map((faq, i) => (
              <div className="faq-visible-box" key={i}>
                <div className="faq-q">প্রশ্ন: {faq.question}</div>
                <div>উত্তর: {faq.answer}</div>
              </div>
            ))}
          </section>
        )}

        {/* Markdown */}
        {content && (
          <article className="prose prose-lg mt-12">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
              {content}
            </ReactMarkdown>
          </article>
        )}
      </div>
    </>
  );
}
