

































































































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
      description: frontmatter.description,
      image: frontmatter.img ,
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
       <meta name="robots" content="index, follow" />
  <meta name="author" content="Lemonskn" />
  <meta name="copyright" content="© 2025 Lemonskn" />
<meta property="og:locale" content="lt_LT" />
  {/* YMYL / Health content-এর জন্য Google খুব করে দেখে */}
  <meta name="medicalDisclaimer" content="This article is for informational purposes only and is not a substitute for professional medical advice." />

 
  <link rel="canonical" href={`https://lemonskn.com/lt/${slug}`} />

  {/* Language */}


  {/* Article Schema (তোমারটা আছেই) */} 
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
          .disclaimer-wrapper {
          max-width: 900px;
          margin: 48px auto;
          padding: 0 20px;
        }

        .disclaimer-box {
          background: #fff5f8;
          border-left: 5px solid #e91e63;
          border-radius: 0 12px 12px 0;
          padding: 24px 28px;
          box-shadow: 0 4px 16px rgba(233, 30, 99, 0.1);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.7;
        }

        .disclaimer-box h3 {
          margin: 0 0 16px 0;
          color: #c2185b;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .bn {
          color: #333;
          font-size: 1rem;
          margin-bottom: 16px;
        }

        .en {
          color: #555;
          font-size: 0.95rem;
          font-style: italic;
          margin: 0;
        }

        /* মোবাইলে আরো সুন্দর */
        @media (max-width: 640px) {
          .disclaimer-wrapper { margin: 32px 15px; padding: 0; }
          .disclaimer-box { padding: 20px; border-radius: 10px; border-left-width: 4px; }
          .bn { font-size: 0.98rem; }
        }
          header{text-align:center;}
          .img{ width:50%;margin: 0 auto;}
        .new-layout__intro { border-left: 5px solid #facc15; background: #fffbeb; padding: 1rem; text-align: center; border-radius: .5rem; }
        .new-layout__problem { background: #fff7f7; border: 1px solid #ffd1d1; padding: 1rem 1.2rem; border-radius: .5rem; }
        .new-layout__solution { border-left: 5px solid #34d399; background: #ecfdf5; padding: 1rem 1.2rem; margin-top: 2rem; }
        .faq-visible-box { padding: 1rem; border: 1px solid #ddd; background: #fafafa; border-radius: .5rem; margin-bottom: 1rem; }
        .faq-q { font-weight: bold; margin-bottom: .5rem; }
        .new-layout__table { width: 100%; border: 1px solid #eee; border-radius: .5rem; overflow: hidden; margin-top: 1rem; }
        .new-layout__th { background: #f3f4f6; padding: .75rem; font-weight: 600; }
        .new-layout__td { padding: .75rem; border-bottom: 1px solid #eee; }
        @media (max-width: 768px) {
         .img{width:99%;text-align: center;margin:0 auto;border-radius:9px;}
         .new-layout__main-title { font-size: 2rem; }
          .new-layout__intro img { width: 90%; } }

      `}</style>

      <div className="new-layout__container max-w-4xl mx-auto py-8">
        {/* Header */}
        <header className="text-center ">
          <h1 className="new-layout__main-title">{frontmatter.keyword1}</h1>
          <h2 className="new-layout__sub-title">{frontmatter.keyword2}</h2>
          <img className='img' src={frontmatter.img} loading="lazy" alt={frontmatter.keyword1} />
        </header>

        {/* Intro */}
        {frontmatter.intro && (
          <section className="new-layout__intro">
           
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
          <section className="">
            <h2 className="new-layout__section-title">{frontmatter.comparisonTitle || "daryk / nedaryk"}</h2>
            <table className="new-layout__table">
              <thead>
                <tr>
                  <th className="new-layout__th ">daryk</th>
                  <th className="new-layout__th ">nedaryk</th>
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
          <section className="">
            <h2 className="new-layout__section-title"></h2>
            <ol>
              {routineList.map((item, i) => <li key={i}>{item}</li>)}
            </ol>
          </section>
        )}

        {/* FAQ */}
        {faqList.length > 0 && (
          <section className="">
            <h2 className="new-layout__section-title">FAQ</h2>
            {faqList.map((faq, i) => (
              <div className="faq-visible-box" key={i}>
                <div className="faq-q">klausimas: {faq.question}</div>
                <div>atsakymas: {faq.answer}</div>
              </div>
            ))}
          </section>
        )}

   


<section className="max-w-4xl mx-auto my-12 px-5 sm:px-0">
  <div className="bg-rose-50 border-l-4 border-rose-600 rounded-r-xl p-6 shadow-sm">
    <h3 className="text-rose-800 font-bold text-lg mb-4">
      Atsakomybės ribojimas / Disclaimer
    </h3>

    <p className="text-gray-800 leading-relaxed mb-4 text-base">
      Aš nesu gydytojas ar dermatologas. Visa šiame straipsnyje pateikta informacija yra pagrįsta
      moksliniais tyrimais, paskelbtais tokiose institucijose kaip Harvardas, Oksfordas, PubMed,
      NCBI, Cochrane ir kituose recenzuojamuose žurnaluose.
      Prieš pradėdami bet kokią odos priežiūros rutiną ar spręsdami odos problemas, būtinai
      pasitarkite su kvalifikuotu dermatologu.
      Čia nėra jokių afiliuotų nuorodų, remiamų produktų ar mokamų reklamų.
    </p>

    <p className="text-gray-700 italic text-sm leading-relaxed">
      I am not a doctor or dermatologist. All information is based on peer-reviewed studies from
      Harvard, Oxford, PubMed, NCBI, Cochrane, etc.
      Always consult a dermatologist before starting any skincare routine.
      No affiliate links or sponsorships.
    </p>
  </div>
</section>

        {/* Markdown */}
        {content && (
          <article className="">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
              {content}
            </ReactMarkdown>
          </article>
        )}
      </div>
    </>
  );
}
