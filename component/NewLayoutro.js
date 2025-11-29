

































































































// components/NewLayoutro.js ← 100% FINAL Romanian Version (Google 2025 Ready)
import React from "react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

export default function NewLayoutro({
  frontmatter = {},
  content = "",
  slug = "",
}) {
  if (!frontmatter?.title) {
    return (
      <div className="text-center text-red-500 py-20 text-2xl">
        Pagina nu a fost găsită
      </div>
    );
  }

  // Safe arrays
  const problemList = Array.isArray(frontmatter.problemList)
    ? frontmatter.problemList.filter(Boolean)
    : [];
  const solutionList = Array.isArray(frontmatter.solutionList)
    ? frontmatter.solutionList.filter(Boolean)
    : [];
  const comparisonTable = Array.isArray(frontmatter.comparisonTable)
    ? frontmatter.comparisonTable
    : [];
  const routineList = Array.isArray(frontmatter.routineList)
    ? frontmatter.routineList.filter(Boolean)
    : [];
  const faqList = Array.isArray(frontmatter.faqList)
    ? frontmatter.faqList.filter((q) => q && q.question && q.answer)
    : [];

  // Table of Contents (auto-generated)
  const tocItems = [
    frontmatter.problemTitle && { id: "problema", title: frontmatter.problemTitle },
    (frontmatter.solution || solutionList.length > 0) && { id: "solutie", title: "Soluție" },
    comparisonTable.length > 0 && { id: "fa-nuface", title: frontmatter.comparisonTitle || "Fă / Nu face" },
    routineList.length > 0 && { id: "rutina", title: frontmatter.routineTitle || "Rutină de îngrijire" },
    faqList.length > 0 && { id: "faq", title: "Întrebări frecvente" },
  ].filter(Boolean);

  // Full JSON-LD Schema – সবচেয়ে শক্তিশালী ভার্সন
  const fullSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Organization + Logo
      {
        "@type": "Organization",
        "@id": "https://lemonskn.com/#organization",
        "name": "Lemonskn",
        "url": "https://lemonskn.com",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://lemonskn.com/lemonskn.png",
          "url": "https://lemonskn.com/lemonskn.png",
          "width": 512,
          "height": 512,
          "caption": "Lemonskn Official Logo"
        },
        "sameAs": [
          "https://www.instagram.com/lemonskn",
          "https://www.facebook.com/lemonskn",
          "https://www.youtube.com/@lemonskn",
          "https://www.tiktok.com/@lemonskn"
        ]
      },

      // 2. WebSite
      {
        "@type": "WebSite",
        "@id": "https://lemonskn.com/#website",
        "url": "https://lemonskn.com",
        "name": "Lemonskn",
        "publisher": { "@id": "https://lemonskn.com/#organization" },
        "inLanguage": ["en-US", "lt-LT", "ro-RO"]
      },

      // 3. MedicalWebPage + Speakable
      {
        "@type": ["WebPage", "MedicalWebPage"],
        "@id": `https://lemonskn.com/ro/${slug}#webpage`,
        "url": `https://lemonskn.com/ro/${slug}`,
        "name": frontmatter.title,
        "description": frontmatter.description || "",
        "inLanguage": "ro-RO",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".new-layout__main-title", ".new-layout__section-title", ".faq-q"]
        }
      },

      // 4. Breadcrumb
      {
        "@type": "BreadcrumbList",
        "@id": `https://lemonskn.com/ro/${slug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
           
            "position": 1,
            "name": "Acasă",
            "item": "https://lemonskn.com/ro/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": frontmatter.title,
            "item": `https://lemonskn.com/ro/${slug}`
          }
        ]
      },

      // 5. Article
      {
        "@type": "Article",
        "headline": frontmatter.title,
        "description": frontmatter.description || "",
        "image": frontmatter.img || "https://lemonskn.com/lemonskn.png",
        "author": { "@type": "Organization", "name": "Lemonskn" },
        "publisher": { "@id": "https://lemonskn.com/#organization" },
        "datePublished": frontmatter.date || "2025-01-01",
        "dateModified": frontmatter.updated || frontmatter.date || "2025-01-01",
        "mainEntityOfPage": { "@type": "WebPage", "@id": `https://lemonskn.com/ro/${slug}#webpage` }
      },

      // 6. FAQPage
      ...(faqList.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": faqList.map(q => ({
          "@type": "Question",
          "name": String(q.question || "").trim(),
          "acceptedAnswer": { "@type": "Answer", "text": String(q.answer || "").trim() }
        }))
      }] : []),

      // 7. HowTo – Romanian "Pasul"
      ...(routineList.length > 0 ? [{
        "@type": "HowTo",
        "name": frontmatter.routineTitle || "Rutină de îngrijire a pielii",
        "description": frontmatter.routineDesc || "Rutină zilnică eficientă recomandată de Lemonskn",
        "totalTime": "PT10M",
        "step": routineList.map((step, i) => ({
          "@type": "HowToStep",
          "name": `Pasul ${i + 1}`,
          "text": String(step).trim()
        }))
      }] : [])
    ]
  };

  return (
    <>
      <Head>
        <title>{frontmatter.title} | Lemonskn</title>
        <meta name="description" content={frontmatter.description || ""} />
        <link rel="canonical" href={`https://lemonskn.com/ro/${slug}`} />

        <link rel="alternate" hrefLang="en" href={`https://lemonskn.com/${slug}`} />
        <link rel="alternate" hrefLang="lt" href={`https://lemonskn.com/lt/${slug}`} />
        <link rel="alternate" hrefLang="ro" href={`https://lemonskn.com/ro/${slug}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://lemonskn.com/${slug}`} />

        <link rel="icon" sizes="512x512" href="/lemonskn.png" />
        <link rel="apple-touch-icon" href="/lemonskn.png" />

        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description || ""} />
        <meta property="og:url" content={`https://lemonskn.com/ro/${slug}`} />
        <meta property="og:image" content={frontmatter.img || "https://lemonskn.com/lemonskn.png"} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="ro_RO" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://lemonskn.com/lemonskn.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(fullSchema, null, 2) }}
        />
      </Head>

      <style jsx global>{`
        .toc { background: #f8fafc; padding: 1.5rem; border-radius: 12px; border: 1px solid #e2e8f0; margin: 2rem 0; }
        .toc a { color: #1d4ed8; font-weight: 500; }
        .new-layout__container { padding: 0 8%; line-height: 1.8; color: #333; font-family: system-ui, sans-serif; }
        .new-layout__main-title { font-size: 2.6rem; font-weight: bold; color: #111;text-align: center; }
        .new-layout__section-title { font-size: 1.9rem; font-weight: 600; margin: 3rem 0 1rem; position: relative; padding-bottom: 0.6rem; }
        .new-layout__section-title::after { content: ""; width: 80px; height: 5px; background: #facc15; position: absolute; bottom: 0; left: 0; border-radius: 4px; }
        .img { width: 55%; margin: 2rem auto; display: block; border-radius: 16px; box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
        @media (max-width: 768px) { .img { width: 100%; } .new-layout__main-title { font-size: 2rem; } }
      `}</style>

      <div className="new-layout__container max-w-5xl mx-auto py-12">

      
        {/* Table of Contents – Romanian Version */}
{tocItems.length > 0 && (
  <div className="toc my-10">
    <h3 className="font-bold text-xl mb-6 text-center text-gray-800">
      Cuprins
    </h3>
    <ul className="space-y-3">
      {tocItems.map((item, i) => (
        <li key={i}>
          <a 
            href={`#${item.id}`}
            className="block py-3 px-5 bg-white rounded-xl text-lg font-semibold text-amber-700 hover:bg-amber-50 hover:text-amber-800 hover:shadow-md transition-all duration-300 border border-amber-200"
          >
            {i + 1}. {item.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
)}
        <header className="text-center mb-12">
          <h1 className="new-layout__main-title">{frontmatter.title}</h1>
          {frontmatter.subtitle && <h2 className="text-2xl text-gray-600 mt-4">{frontmatter.subtitle}</h2>}
          {frontmatter.img && <img className="img" src={frontmatter.img} loading="lazy" alt={frontmatter.title} />}
        </header>

        {frontmatter.intro && <div className="text-lg leading-8 text-center my-10 bg-yellow-50 p-8 rounded-xl">{frontmatter.intro}</div>}

        {frontmatter.long_tail_keyword1_before_problem && <h2 className="my-8 text-2xl">{frontmatter.long_tail_keyword1_before_problem}</h2>}
        {frontmatter.problemTitle && <h3 id="problema" className="new-layout__section-title">{frontmatter.problemTitle}</h3>}
        {problemList.length > 0 && (
          <section className="bg-red-50 border-l-8 border-red-600 p-8 rounded-r-xl my-10">
            <ul className="list-disc pl-6 space-y-3 text-lg">{problemList.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </section>
        )}

        {frontmatter.long_tail_keyword2_before_solution && <h2 className="my-8 text-2xl">{frontmatter.long_tail_keyword2_before_solution}</h2>}
        {(frontmatter.solution || solutionList.length > 0) && (
          <section id="solutie" className="my-10">
            <h3 className="new-layout__section-title">Soluție</h3>
            {frontmatter.solution && <p className="text-lg my-6">{frontmatter.solution}</p>}
            {solutionList.length > 0 && (
              <ul className="list-disc pl-6 space-y-4 text-lg my-6">
                {solutionList.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}
          </section>
        )}

        {frontmatter.long_tail_keyword3_before_do_dont_table && <h2 className="my-8 text-2xl">{frontmatter.long_tail_keyword3_before_do_dont_table}</h2>}
        {comparisonTable.length > 0 && (
          <section id="fa-nuface">
            <h3 className="new-layout__section-title">{frontmatter.comparisonTitle || "Fă / Nu face"}</h3>
            <table className="w-full border-collapse my-8 bg-white shadow-lg rounded-xl overflow-hidden">
              <thead className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                <tr><th className="p-5 text-left">Fă</th><th className="p-5 text-left">Nu face</th></tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-5">{row.do || "—"}</td>
                    <td className="p-5">{row.dont || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {frontmatter.long_tail_keyword4_before_routine && <h2 className="my-8 text-2xl">{frontmatter.long_tail_keyword4_before_routine}</h2>}
        {routineList.length > 0 && (
          <section id="rutina">
            <h3 className="new-layout__section-title">{frontmatter.routineTitle || "Rutină zilnică de îngrijire"}</h3>
            <ol className="list-decimal pl-8 space-y-5 text-lg font-medium my-8">
              {routineList.map((item, i) => <li key={i}>{item}</li>)}
            </ol>
          </section>
        )}

        

        {frontmatter.long_tail_keyword5_before_FAQ && <h2 className="my-8 text-2xl">{frontmatter.long_tail_keyword5_before_FAQ}</h2>}
        {faqList.length > 0 && (
          <section id="faq">
            <h3 className="new-layout__section-title">Întrebări frecvente (FAQ)</h3>
            {faqList.map((faq, i) => (
              <div key={i} className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl my-6 border-l-4 border-blue-600">
                <div className="faq-q text-xl font-bold text-gray-800">Întrebare: {faq.question}</div>
                <div className="mt-3 text-gray-700 text-lg">Răspuns: {faq.answer}</div>
              </div>
            ))}
          </section>
        )}

        {/* Super Strong E-E-A-T Disclaimer */}
        <section className="my-20">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-8 border-indigo-600 rounded-r-2xl p-10 shadow-2xl">
            <h3 className="text-indigo-900 font-bold text-2xl mb-6">Notă medicală importantă</h3>
            <p className="text-gray-800 text-lg leading-relaxed">
              Nu sunt medic dermatolog. Toate informațiile din acest articol sunt bazate pe studii științifice publicate în 
              <strong> PubMed, Cochrane, Harvard Medical School, Oxford Academic </strong> și alte surse de încredere. 
              Înainte de a începe orice rutină de îngrijire a pielii, <strong>consultați obligatoriu un dermatolog calificat</strong>. 
              Aici nu există linkuri afiliate sau reclame plătite.
            </p>
          </div>
        </section>

        {content && (
          <article className="prose prose-xl max-w-none mt-16">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
              {content}
            </ReactMarkdown>
          </article>
        )}
      </div>
    </>
  );
}
