

































































































// components/NewLayoutlt.js
import React from "react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

export default function NewLayoutlt({ frontmatter = {}, content = "", slug = "" }) {
  if (!frontmatter?.title) {
    return (
      <div className="text-center text-red-500 py-20 text-2xl">
        Puslapis nerastas
      </div>
    );
  }

  // Safe arrays
  const problemList = Array.isArray(frontmatter.problemList) ? frontmatter.problemList.filter(Boolean) : [];
  const solutionList = Array.isArray(frontmatter.solutionList) ? frontmatter.solutionList.filter(Boolean) : [];
  const comparisonTable = Array.isArray(frontmatter.comparisonTable) ? frontmatter.comparisonTable : [];
  const routineList = Array.isArray(frontmatter.routineList) ? frontmatter.routineList.filter(Boolean) : [];
  const faqList = Array.isArray(frontmatter.faqList) ? frontmatter.faqList.filter(q => q?.question && q?.answer) : [];

  // Table of Contents (Auto-generated)
  const tocItems = [
    frontmatter.problemTitle && { id: "problema", title: frontmatter.problemTitle },
    (frontmatter.solution || solutionList.length > 0) && { id: "sprendimas", title: "Sprendimas" },
    comparisonTable.length > 0 && { id: "daryk-nedaryk", title: frontmatter.comparisonTitle || "Daryk / Nedaryk" },
    routineList.length > 0 && { id: "rutina", title: frontmatter.routineTitle || "Odos priežiūros rutina" },
    faqList.length > 0 && { id: "faq", title: "Dažniausiai užduodami klausimai" },
  ].filter(Boolean);

  // ===== Full JSON-LD Schema =====
  const fullSchema = {
    "@context": "https://schema.org",
    "@graph": [
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
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "hello@lemonskn.com",
          "contactType": "customer support"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://lemonskn.com/#website",
        "url": "https://lemonskn.com",
        "name": "Lemonskn",
        "publisher": { "@id": "https://lemonskn.com/#organization" },
        "inLanguage": ["en-US", "lt-LT", "ro-RO"]
      },
      {
        "@type": ["WebPage", "MedicalWebPage"],
        "@id": `https://lemonskn.com/lt/${slug}#webpage`,
        "url": `https://lemonskn.com/lt/${slug}`,
        "name": frontmatter.title,
        "description": frontmatter.description || "",
        "inLanguage": "lt-LT",
        "breadcrumb": { "@id": `https://lemonskn.com/lt/${slug}#breadcrumb` },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".new-layout__main-title", ".new-layout__section-title", ".faq-q"]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://lemonskn.com/lt/${slug}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Pradžia", "item": "https://lemonskn.com/lt/" },
          { "@type": "ListItem", "position": 2, "name": frontmatter.title, "item": `https://lemonskn.com/lt/${slug}` }
        ]
      },
      {
        "@type": "Article",
        "headline": frontmatter.title,
        "description": frontmatter.description || "",
        "image": frontmatter.img || "https://lemonskn.com/lemonskn.png",
        "author": { "@type": "Organization", "name": "Lemonskn" },
        "publisher": { "@id": "https://lemonskn.com/#organization" },
        "datePublished": frontmatter.date || "2025-01-01",
        "dateModified": frontmatter.updated || frontmatter.date || "2025-01-01",
        "mainEntityOfPage": { "@type": "WebPage", "@id": `https://lemonskn.com/lt/${slug}#webpage` }
      },
      ...(faqList.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": faqList.map(q => ({
          "@type": "Question",
          "name": String(q.question).trim(),
          "acceptedAnswer": { "@type": "Answer", "text": String(q.answer).trim() }
        }))
      }] : []),
      ...(routineList.length > 0 ? [{
        "@type": "HowTo",
        "name": frontmatter.routineTitle || "Odos priežiūros rutina",
        "description": frontmatter.routineDesc || "Veiksminga kasdienė odos priežiūros rutina pagal Lemonskn",
        "totalTime": "PT10M",
        "step": routineList.map((step, i) => ({
          "@type": "HowToStep",
          "name": `Žingsnis ${i + 1}`,
          "text": String(step).trim()
        }))
      }] : [])
    ].filter(Boolean)
  };

  // Dynamic Internal Links
  const internalLinksList = [];
  for (let i = 1; i <= 3; i++) {
    if (frontmatter[`linktitle${i}`] && frontmatter[`linkslug${i}`]) {
      internalLinksList.push({
        "@type": "ListItem",
        "position": i,
        "url": `https://lemonskn.com/lt/${frontmatter[`linkslug${i}`]}`,
        "name": frontmatter[`linktitle${i}`]
      });
    }
  }

  if (internalLinksList.length > 0) {
    fullSchema["@graph"].push({
      "@type": "ItemList",
      "@id": `https://lemonskn.com/lt/${slug}#related-links`,
      "name": "Skaitykite taip pat",
      "itemListElement": internalLinksList
    });
  }

  return (
    <>
      <Head>
        <title>{frontmatter.title} | Lemonskn</title>
        <meta name="description" content={frontmatter.description || ""} />
        <link rel="canonical" href={`https://lemonskn.com/lt/${slug}`} />
        <link rel="alternate" hrefLang="en" href={`https://lemonskn.com/${slug}`} />
        <link rel="alternate" hrefLang="lt" href={`https://lemonskn.com/lt/${slug}`} />
        <link rel="alternate" hrefLang="ro" href={`https://lemonskn.com/ro/${slug}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://lemonskn.com/${slug}`} />
        <link rel="icon" sizes="512x512" href="/lemonskn.png" />
        <link rel="apple-touch-icon" href="/lemonskn.png" />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description || ""} />
        <meta property="og:url" content={`https://lemonskn.com/lt/${slug}`} />
        <meta property="og:image" content={frontmatter.img || "https://lemonskn.com/lemonskn.png"} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="lt_LT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://lemonskn.com/lemonskn.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fullSchema, null, 2) }} />
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
      <div className="new-layout__container">
        {/* Table of Contents */}
        {tocItems.length > 0 && (
          <div className="toc my-10">
            <h3 className="font-bold text-lg mb-4">Turinys</h3>
            <ul>
              {tocItems.map((item, i) => (
                <li key={i}><a href={`#${item.id}`}>{item.title}</a></li>
              ))}
            </ul>
          </div>
        )}

        <header className="text-center mb-10">
          <h1 className="new-layout__main-title">{frontmatter.title}</h1>
          {frontmatter.subtitle && <h2 className="text-2xl text-gray-600 mt-3">{frontmatter.subtitle}</h2>}
          {frontmatter.img && <img className="img" src={frontmatter.img} loading="lazy" alt={frontmatter.title} />}
        </header>

        {frontmatter.intro && <section className="my-10 text-lg leading-relaxed"><p>{frontmatter.intro}</p></section>}

        {/* Problem Section */}
        {frontmatter.problemTitle && <h3 id="problema" className="new-layout__section-title">{frontmatter.problemTitle}</h3>}
        {problemList.length > 0 && (
          <section className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-8">
            <ul className="list-disc list-inside space-y-3">{problemList.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </section>
        )}

        {/* Solution Section */}
        {(frontmatter.solution || solutionList.length > 0) && (
          <section id="sprendimas">
            <h3 className="new-layout__section-title">Sprendimas</h3>
            {frontmatter.solution && <p className="my-6 text-lg">{frontmatter.solution}</p>}
            {solutionList.length > 0 && (
              <ul className="list-disc list-inside space-y-3 my-6 text-lg">
                {solutionList.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}
          </section>
        )}

        {/* Comparison Table */}
        {comparisonTable.length > 0 && (
          <section id="daryk-nedaryk">
            <h3 className="new-layout__section-title">{frontmatter.comparisonTitle || "Daryk / Nedaryk"}</h3>
            <table className="w-full border-collapse my-8 text-left">
              <thead className="bg-gray-100"><tr><th className="p-4">Daryk</th><th className="p-4">Nedaryk</th></tr></thead>
              <tbody>
                {comparisonTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="p-4">{row.do || "—"}</td>
                    <td className="p-4">{row.dont || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {/* Routine Section */}
        {routineList.length > 0 && (
          <section id="rutina">
            <h3 className="new-layout__section-title">{frontmatter.routineTitle || "Odos priežiūros rutina"}</h3>
            <ol className="list-decimal list-inside space-y-4 my-8 text-lg font-medium">
              {routineList.map((item, i) => <li key={i}>{item}</li>)}
            </ol>
          </section>
        )}

        {/* FAQ Section */}
        {faqList.length > 0 && (
          <section id="faq">
            <h2 className="new-layout__section-title">Dažniausiai užduodami klausimai (FAQ)</h2>
            {faqList.map((faq, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg my-6 border">
                <div className="faq-q font-bold text-lg">{faq.question}</div>
                <div className="mt-3 text-gray-700">{faq.answer}</div>
              </div>
            ))}
          </section>
        )}

        {/* Internal Links */}
        {(frontmatter.linktitle1 || frontmatter.linktitle2 || frontmatter.linktitle3) && (
          <section className="my-20 bg-gradient-to-b from-gray-50 to-white rounded-3xl p-10 shadow-2xl border border-gray-100">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Skaitykite taip pat</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1,2,3].map(i => frontmatter[`linktitle${i}`] && frontmatter[`linkslug${i}`] && (
                <a key={i} href={`/lt/${frontmatter[`linkslug${i}`]}`} className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                  <div className={`h-40 bg-gradient-to-br ${i===1?'from-amber-100 to-yellow-200':i===2?'from-emerald-100 to-teal-200':'from-purple-100 to-pink-200'}`}></div>
                  <div className="p-6">
                    <h4 className={`font-bold text-xl text-gray-800 group-hover:${i===1?'text-amber-600':i===2?'text-emerald-600':'text-purple-600'} transition-colors line-clamp-2`}>
                      {frontmatter[`linktitle${i}`]}
                    </h4>
                    <p className={`text-${i===1?'amber':i===2?'emerald':'purple'}-600 font-medium mt-4 inline-flex items-center`}>
                      Skaityti daugiau →
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Disclaimer */}
        <section className="my-20">
          <div className="bg-blue-50 border-l-8 border-blue-600 rounded-r-xl p-8 shadow-xl">
            <h3 className="text-blue-900 font-bold text-2xl mb-6">Svarbi medicininė pastaba</h3>
            <p className="text-gray-800 leading-relaxed text-base">
              Šis straipsnis parengtas remiantis moksliniais tyrimais iš <strong>PubMed, Cochrane Library, Harvard Health Publishing, Oxford Academic</strong> ir kitų recenzuojamų šaltinių. 
              Tačiau <strong>jis nėra medicininė konsultacija</strong>. Prieš keisdami odos priežiūros rutiną ar pradėdami naudoti naujus produktus, <strong>būtinai pasitarkite su kvalifikuotu dermatologu</strong>. 
              Čia nėra jokių afiliuotų nuorodų ar mokamos reklamos.
            </p>
          </div>
        </section>

        {/* Markdown Content */}
        {content && (
          <article className="prose prose-lg max-w-none mt-16">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSanitize]}>
              {content}
            </ReactMarkdown>
          </article>
        )}
      </div>
    </>
  );
}
