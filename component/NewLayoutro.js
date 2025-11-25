

































































































// component/NewLayoutlt.js  ← এটাই ফাইনাল কোড
import React, { useMemo } from 'react';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';

export default function NewLayoutlt({
  frontmatter = {},
  content = '',
  products = [],
  slug = ''
}) {
  if (!frontmatter?.title) {
    return <h2 className="text-center text-red-500"></h2>;
  }

  // Safe arrays
  const problemList = Array.isArray(frontmatter.problemList) ? frontmatter.problemList.filter(Boolean) : [];
  const solutionList = Array.isArray(frontmatter.solutionList) ? frontmatter.solutionList.filter(Boolean) : [];
  const comparisonTable = Array.isArray(frontmatter.comparisonTable) ? frontmatter.comparisonTable : [];
  const routineList = Array.isArray(frontmatter.routineList) ? frontmatter.routineList : [];
  const faqList = Array.isArray(frontmatter.faqList) ? frontmatter.faqList : [];

  // এটাই সবচেয়ে গুরুত্বপূর্ণ – Google ২০২৫ সালে এই ফরম্যাট ছাড়া লোগো দেখায় না
  const articleSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://lemonskn.com/ro/${slug}#article`,
    "headline": frontmatter.title,
    "description": frontmatter.description || "",
    "image": frontmatter.img || "https://lemonskn.com/lemonskn-logo-512.png",
    "author": { "@type": "Person", "name": frontmatter.author || "Lemonskn Team" },
    "publisher": {
      "@type": "Organization",
      "@id": "https://lemonskn.com/#organization",   // এই লাইনটা না থাকলে লোগো আসবে না
      "name": "Lemonskn",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lemonskn.com/lemonskn-logo-512.png",
        "width": 512,
        "height": 512
      }
    },
    "datePublished": frontmatter.date || new Date().toISOString().split("T")[0],
    "dateModified": frontmatter.date || new Date().toISOString().split("T")[0],
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://lemonskn.com/ro/${slug}` }
  }), [frontmatter, slug]);

  return (
    <>
      <Head>
        <title>{frontmatter.title} | Lemonskn</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="description" content={frontmatter.description || ''} />
        <link rel="canonical" href={`https://lemonskn.com/ro/${slug}`} />

        {/* Open Graph – বড় লোগো + width/height (অবশ্যই থাকতে হবে) */}
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description || ''} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://lemonskn.com/ro/${slug}`} />
        <meta property="og:image" content={frontmatter.image1 || "https://lemonskn.com/lemonskn-logo-512.png"} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content={frontmatter.title} />
        <meta property="og:locale" content="ro_RO" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://lemonskn.com/lemonskn-logo-512.png" />

        {/* অন্যান্য মেটা */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Lemonskn" />
        <meta name="copyright" content="© 2025 Lemonskn" />
        <meta name="medicalDisclaimer" content="This article is for informational purposes only and is not a substitute for professional medical advice." />

        {/* Article Schema – সঠিকভাবে */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        {/* FAQ Schema */}
        {faqList.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqList.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                }))
              })
            }}
          />
        )}
      </Head>

      {/* আপনার সব CSS + HTML ঠিক আগের মতোই থাকবে */}
      <style jsx global>{`
        .new-layout__container { padding: 0 8%; line-height: 1.7; color: #333; }
        .new-layout__main-title { font-size: 2.5rem; font-weight: bold; color: #111; }
        .new-layout__sub-title { font-size: 1.75rem; color: #555; margin-top: .3rem; }
        .new-layout__section-title {
          font-size: 1.75rem; font-weight: 600; margin-bottom: 1rem;
          position: relative; padding-bottom: .5rem;
        }
        .new-layout__section-title::after {
          content: ""; width: 60px; height: 4px; background: #facc15;
          position: absolute; bottom: 0; left: 0;
        }
        header { text-align: center; }
        .img { width: 40%; margin: 0 auto; display: block; border-radius: 12px; }
        .new-layout__intro { border-left: 5px solid #facc15; background: #fffbeb; padding: 1rem; text-align: center; border-radius: .5rem; }
        .new-layout__problem { background: #fff7f7; border: 1px solid #ffd1d1; padding: 1rem 1.2rem; border-radius: .5rem; }
        .new-layout__solution { border-left: 5px solid #34d399; background: #ecfdf5; padding: 1rem 1.2rem; margin-top: 2rem; }
        .faq-visible-box { padding: 1rem; border: 1px solid #ddd; background: #fafafa; border-radius: .5rem; margin-bottom: 1rem; }
        .faq-q { font-weight: bold; margin-bottom: .5rem; }
        .new-layout__table { width: 100%; border: 1px solid #eee; border-radius: .5rem; overflow: hidden; margin-top: 1rem; }
        .new-layout__th { background: #f3f4f6; padding: .75rem; font-weight: 600; }
        .new-layout__td { padding: .75rem; border-bottom: 1px solid #eee; }
        @media (max-width: 768px) {
          .img { width: 99%; border-radius: 9px; }
          .new-layout__main-title { font-size: 2rem; }
        }
      `}</style>

      <div className="new-layout__container max-w-4xl mx-auto py-8">
        <header className="text-center">
          <h1 className="new-layout__main-title">{frontmatter.title}</h1>
          <h2 className="new-layout__sub-title">{frontmatter.subtitle}</h2>
          <img className="img" src={frontmatter.img}  alt={frontmatter.title} />
        </header>

        {frontmatter.intro && (
          <section className="new-layout__intro">
            <p>{frontmatter.intro}</p>
          </section>
        )}

        {frontmatter.problemTitle && <h3 className="new-layout__section-title">{frontmatter.problemTitle}</h3>}
        {problemList.length > 0 && (
          <section className="new-layout__problem ">
            <ul>{problemList.map((item, i) => <li key={i}> {item}</li>)}</ul>
          </section>
        )}{(frontmatter.solution || solutionList.length > 0) && (
  <section className="new-layout__solution">
    
    <h3 className="new-layout__section-title">Soluție</h3>
    {frontmatter.solution && <p>{frontmatter.solution}</p>}
    {solutionList.length > 0 && (
      <ul>{solutionList.map((item, i) => <li key={i}>{item}</li>)}</ul>
    )}
  </section>
)}

{comparisonTable.length > 0 && (
  <section>
    <h4 className="new-layout__section-title">{frontmatter.comparisonTitle || "Fă / Nu face"}</h4>
    <table className="new-layout__table">
      <thead>
        <tr><th className="new-layout__th">Fă</th><th className="new-layout__th">Nu face</th></tr>
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

{routineList.length > 0 && (
  <section>
    <h4 className="new-layout__section-title">Rutina</h4>
    <ol>{routineList.map((item, i) => <li key={i}>{item}</li>)}</ol>
  </section>
)}

{faqList.length > 0 && (
  <section>
    <h4 className="new-layout__section-title">Întrebări frecvente (FAQ)</h4>
    {faqList.map((faq, i) => (
      <div className="faq-visible-box" key={i}>
        <div className="faq-q">Întrebare: {faq.question}</div>
        <div>Răspuns: {faq.answer}</div>
      </div>
    ))}
  </section>
)}

<section className="max-w-4xl mx-auto my-12 px-5 sm:px-0">
  <div className="bg-rose-50 border-l-4 border-rose-600 rounded-r-xl p-6 shadow-sm">
    <h3 className="text-rose-800 font-bold text-lg mb-4">
      Limitarea răspunderii / Disclaimer
    </h3>
    <p className="text-gray-800 leading-relaxed mb-4 text-base">
      Nu sunt medic sau dermatolog. Toate informațiile prezentate în acest articol se bazează pe cercetări științifice
      publicate în instituții precum Harvard, Oxford, PubMed, NCBI, Cochrane și alte jurnale de specialitate.
      Înainte de a începe orice rutină de îngrijire a pielii sau de a aborda probleme ale pielii,
      consultați obligatoriu un dermatolog calificat.
      Nu există linkuri afiliate, produse sponsorizate sau reclame plătite aici.
    </p>
  </div>
</section>


        
        {content && (
          <article>
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
              {content}
            </ReactMarkdown>
          </article>
        )}
      </div>
    </>
  );
}