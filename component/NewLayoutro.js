 // components/NewLayoutro.js - PERFECTLY FIXED (আপনার CSS untouched + সব সমস্যা solve)
import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
// Line 1 এর ঠিক উপরে
import Head from 'next/head';

// Funcție pentru eliminarea HTML—pentru Google Rich Results
const stripHtml = (str = "") => String(str || "").replace(/<[^>]*>/g, "").trim();

export default function NewLayoutro({ frontmatter = {}, content = "", slug = "" }) {
  if (!frontmatter?.title) {
    return (
      <div className="text-center">
        Pagină negăsită
      </div>
    );
  }

  const problemList = Array.isArray(frontmatter.problemList) ? frontmatter.problemList.filter(Boolean) : [];
  const solutionList = Array.isArray(frontmatter.solutionList) ? frontmatter.solutionList.filter(Boolean) : [];
  const dermatologistsaywhatlist = Array.isArray(frontmatter.dermatologistsaywhatlist)
    ? frontmatter.dermatologistsaywhatlist.filter(Boolean)
    : [];
  const comparisonTable = Array.isArray(frontmatter.comparisonTable) ? frontmatter.comparisonTable : [];
  const routineList = Array.isArray(frontmatter.routineList) ? frontmatter.routineList.filter(Boolean) : [];
  const faqList = Array.isArray(frontmatter.faqList) ? frontmatter.faqList.filter(q => q?.question && q?.answer) : [];

  // Cuprins
  const tocItems = [
    frontmatter.problemTitle && { id: "problema", title: frontmatter.problemTitle },
    (frontmatter.solution || solutionList.length > 0) && { id: "solutie", title: "Soluție" },
    frontmatter.dermatologistsaywhattitle && { id: "dermatologul-spune", title: frontmatter.dermatologistsaywhattitle },
    comparisonTable.length > 0 && { id: "fa-nu-fa", title: frontmatter.comparisonTitle || "Fă / Nu face" },
    routineList.length > 0 && { id: "rutina", title: frontmatter.routineTitle || "Rutina de îngrijire a pielii" },
    faqList.length > 0 && { id: "faq", title: "Întrebări frecvente" }
  ].filter(Boolean);

  return (
    <>
      {/* আপনার EXACT ORIGINAL CSS - untouched */}
      <style jsx global>{`
        /* ===== Container & Typography ===== */
        .new-layout__container {
          max-width: 900px;
          margin: 0 auto;
          padding: 2.5rem 1rem;
          line-height: 1.8;
          list-style: none;
          color: var(--color-text);
          font-family: system-ui, -apple-system, sans-serif;
        }

        h1, h2, h3, h4 {
          color: var(--color-heading);
          margin: 1.5rem 0 1rem;
          font-weight: 700;
        }

        .new-layout__main-title {
          font-size: 2.9rem;
          font-weight: 800;
          text-align: center;
        }

        .new-layout__section-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin: 4.5rem 0 1.8rem;
          position: relative;
          padding-bottom: 1rem;
        }

        .new-layout__section-title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 120px;
          height: 6px;
          background: var(--color-accent);
          border-radius: 4px;
        }

        /* ===== Images ===== */
        .featured-img {
          width: 77%;
          height: auto;
          margin:  auto;
          border-radius: 20px;
          box-shadow: 0 25px 50px rgba(0,0,0,0.15);
          display: block;
        }
        
        /* ===== Table of Contents ===== */
        .toc {
          background: var(--color-bg-light);
          padding: 0;
          border-radius: 16px;
          margin: -19px 0;
        }

        .toc h3 {
          margin-bottom: 1rem;
          font-size: 1.3rem;
          font-weight: 700;
        }

        .toc ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .toc li {
          margin: 0.7rem 0;
        }

        .toc a {
          color: #1d4ed8;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
        }

        .toc a:hover {
          color: var(--color-accent);
          text-decoration: underline;
        }

        /* ===== Internal Links ===== */
        .internal-links {
          background: linear-gradient(135deg, var(--color-bg-gradient-start), var(--color-bg-gradient-end));
          padding: 3rem 2rem;
          border-radius: 20px;
          margin: 4rem 0;
          text-align: center;
        }

        .internal-links h3 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 2rem;
        }

        .internal-links .grid {
          display: grid;
          gap: 2rem;
        }

        @media(min-width: 768px) {
          .internal-links .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* ===== Disclaimer ===== */
        .disclaimer-box {
          background: #eff6ff;
          border-left: 6px solid var(--color-blue);
          padding: 2rem;
          border-radius: 0 12px 12px 0;
          margin: 4rem 0;
        }

        .disclaimer-box h3 {
          font-size: 2rem;
          color: #1e40af;
          margin-bottom: 1.5rem;
        }

        /* ===== Lists ===== */
        ul.list-disc, ul.list-inside {
          list-style: disc inside;
          margin: 1rem 0;
          padding-left: 1rem;
        }

        ol.list-decimal {
          list-style: decimal inside;
          margin: 1rem 0;
          padding-left: 1rem;
        }

        /* ===== Comparison Table ===== */
        table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          margin: 2rem 0;
        }

        th {
          padding: 1rem;
          font-weight: 700;
        }

        td {
          padding: 1rem;
          border-top: 1px solid #e5e7eb;
        }

        thead th {
          background: #f3f4f6;
        }

        tbody tr:nth-child(even) {
          background: #f9fafb;
        }

        /* ===== Boxes ===== */
        .dermatologist-box {
          background: #eafff2ff;
          border-left: 8px solid #ffe9e9ff;
          padding: 2rem;
          border-radius: 0 12px 12px 0;
          margin: 3rem 0;
        }

        /* ===== Markdown Content ===== */
        article.prose {
          margin-top: 2rem;
          line-height: 1.8;
          max-width: none;
        }

        /* FIX: Prose color issue */
        .prose {
          color: inherit !important;
        }
        .prose * {
          color: inherit !important;
        }

        /* FIX: FAQ cards (আপনার original style) */
        .faq-item {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 2rem;
          margin-bottom: 1.5rem;
        }
          @media (max-width:701px){
          .new-layout__main-title{font-size: 33px;
          }
          }
      `}</style>

      <div className="new-layout__container">
        {/* Cuprins */}
        {tocItems.length > 0 && (
          <div className="toc">
            <h3>Cuprins</h3>
            <ul>
              {tocItems.map((item, i) => (
                <li key={i}><a href={`#${item.id}`}>{item.title}</a></li>
              ))}
            </ul>
          </div>
        )}

        {/* Header */}
        <header className="text-center">
          <h1 className="new-layout__main-title">{frontmatter.h1mainkeyword}</h1>

          {frontmatter.img && (
            <Image
              src={frontmatter.img}
              alt={frontmatter.title}
              width={700}
              height={300}
              className="featured-img"
              priority
            />
          )}
        </header>

        {/* Introducere */}
        {frontmatter.intro && (
          <section>
            <div dangerouslySetInnerHTML={{ __html: frontmatter.intro }} />
          </section>
        )}

        {/* PROBLEMĂ */}
        {frontmatter.problemTitle && (
        <>
          {frontmatter.h2long_tail_keyword1 && (
            <h2>{frontmatter.h2long_tail_keyword1}</h2>
          )}
          <h3 id="problema" className="new-layout__section-title">
            {frontmatter.problemTitle}
          </h3>

          {problemList.length > 0 && (
            <div>
              <ul>
                {problemList.map((item, i) => (
                  <li key={i}>
                    <span role="img" aria-label="bullet">🔴</span>{" "}
                    <span className="markdown-content" dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
        )}

        {/* SOLUȚIE */}
        {(frontmatter.solution || solutionList.length > 0) && (
          <section id="solutie">
            {frontmatter.h2long_tail_keyword2  && (
              <h2>{frontmatter.h2long_tail_keyword2 }</h2>
            )}

            <h3 className="new-layout__section-title">Soluție</h3>

            {frontmatter.solution && (
              <div className="my-8 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: frontmatter.solution }} />
            )}

            {solutionList.length > 0 && (
              <ul className="list-disc">
                {solutionList.map((item, i) => (
                  <li key={i}>
                  <span role="img" aria-label="bullet">✨</span>{" "}
                  <span className="markdown-content" dangerouslySetInnerHTML={{ __html: item }} />
                </li>
                ))}
              </ul>
            )}
          </section>
        )}

        {/* Dermatologul spune */}
        {frontmatter.dermatologistsaywhattitle && (
          <>
            <h3 id="dermatologul-spune" className="new-layout__section-title">
              {frontmatter.dermatologistsaywhattitle}
            </h3>

            {dermatologistsaywhatlist.length > 0 && (
              <div className="dermatologist-box">
                <ul className="list-disc list-inside space-y-3 text-lg">
                  {dermatologistsaywhatlist.map((item, i) => (
                    <li key={i}>
                  <span role="img" aria-label="bullet"> 💫</span>{" "}
                  <span className="markdown-content" dangerouslySetInnerHTML={{ __html: item }} />
                </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        {/* Fă / Nu face */}
        {comparisonTable.length > 0 && (
          <section id="fa-nu-fa">
            {frontmatter.h2long_tail_keyword3  && (
              <h2>{frontmatter.h2long_tail_keyword3 }</h2>
            )}

            <h3 className="new-layout__section-title">
              {frontmatter.comparisonTitle || "Fă / Nu face"}
            </h3>

            <div className="overflow-x-auto my-10">
              <table className="w-full border-collapse text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-5 font-bold text-green-700">Fă</th>
                    <th className="p-5 font-bold text-red-700">Nu face</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-5 border-t">✓ {row.do || "—"}</td>
                      <td className="p-5 border-t">✗ {row.dont || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Rutină */}
        {routineList.length > 0 && (
        <section id="rutina">
          {frontmatter.h2long_tail_keyword4 && (
            <h2>{frontmatter.h2long_tail_keyword4}</h2>
          )}

          <h3 className="new-layout__section-title">
            {frontmatter.routineTitle || "Rutina de îngrijire a pielii"}
          </h3>

          <ol className="list-decimal">
            {routineList.map((step, i) => (
              <li key={i}>
                <span role="img" aria-label="clock">⏰</span>{" "}
                <span className="markdown-content" dangerouslySetInnerHTML={{ __html: step }} />
              </li>
            ))}
          </ol>
        </section>
        )}

        {/* FAQ */}
        {faqList.length > 0 && (
          <section id="faq">
            {frontmatter.h2long_tail_keyword5  && (
              <h2>{frontmatter.h2long_tail_keyword5 }</h2>
            )}

            <h3 className="new-layout__section-title">Întrebări frecvente</h3>

            <div className="space-y-8 my-12">
              {faqList.map((faq, i) => (
                <div key={i} className="faq-item">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h4>
                  <div className="text-gray-700 leading-relaxed markdown-content" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Linkuri interne */}
        {(frontmatter.linktitle1 || frontmatter.linktitle2 || frontmatter.linktitle3) && (
          <section className="internal-links text-center">
            <h3 className="text-3xl font-bold mb-12">Citește și</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i =>
                frontmatter[`linktitle${i}`] && frontmatter[`linkslug${i}`] ? (
                  <a
                    key={i}
                    href={`/ro/${frontmatter[`linkslug${i}`]}`}
                    className="block"
                  >
                    <div></div>
                    <div>
                      <h4>{frontmatter[`linktitle${i}`]}</h4>
                      <p>Citește mai mult →</p>
                    </div>
                  </a>
                ) : null
              )}
            </div>
          </section>
        )}

        {/* Disclaimer medical */}
        <section className="disclaimer-box my-20">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Notă medicală importantă</h3>
          <p className="text-lg leading-relaxed text-gray-800">
            Acest articol este redactat pe baza studiilor științifice din
            <strong> PubMed, Cochrane Library, Harvard Health, Oxford Academic </strong>
            și alte surse evaluate. Totuși,
            <strong> nu reprezintă un sfat medical.</strong>
            Înainte de a modifica rutina de îngrijire,
            <strong> consultați un dermatolog.</strong>
            Nu există linkuri afiliate aici.
          </p>
        </section>

        {/* Conținut Markdown */}
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

// STRUCTURED DATA (unchanged)
export function getStructuredData({ frontmatter, slug }) {
  const faqList = Array.isArray(frontmatter.faqList)
    ? frontmatter.faqList.filter(q => q?.question && q?.answer)
    : [];

  const routineList = Array.isArray(frontmatter.routineList)
    ? frontmatter.routineList.filter(Boolean)
    : [];
    
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://lemonskn.com/#website",
        "url": "https://lemonskn.com",
        "name": "Lemonskn",
        "inLanguage": "ro-RO"
      },
      {
        "@type": "WebPage",
        "@id": `https://lemonskn.com/ro/${slug}#webpage`,
        "url": `https://lemonskn.com/ro/${slug}`,
        "name": frontmatter.title,
        "description": frontmatter.description || "",
        "isPartOf": { "@id": "https://lemonskn.com/#website" },
        "inLanguage": "ro-RO",
        "breadcrumb": { "@id": `https://lemonskn.com/ro/${slug}#breadcrumbs` },
        "mainEntity": { "@id": `https://lemonskn.com/ro/${slug}#article` }
      },
      {
        "@type": "Article",
        "@id": `https://lemonskn.com/ro/${slug}#article`,
        "headline": frontmatter.title,
        "description": frontmatter.description,
        "image": frontmatter.img,
        "author": {
          "@type": "Person",
          "name": frontmatter.author || "Lemonskn Team",
          "description": "Specialiști în îngrijirea pielii",
          "sameAs": [
            "https://www.harvard.edu",
            "https://academic.oup.com",
            "https://pubmed.ncbi.nlm.nih.gov"
          ]
        },
        "publisher": {
          "@type": "Person",
          "name": frontmatter.author || "Lemonskn Team"
        },
        "datePublished": frontmatter.date,
        "dateModified": frontmatter.updated || frontmatter.date
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://lemonskn.com/ro/${slug}#breadcrumbs`,
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

      // FAQ Schema
      ...(faqList.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `https://lemonskn.com/ro/${slug}#faq`,
              "mainEntity": faqList.map(q => ({
                "@type": "Question",
                "name": stripHtml(q.question),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": stripHtml(q.answer)
                }
              }))
            }
          ]
        : []),

      // HowTo Schema (Routine)
      ...(routineList.length > 0
        ? [
            {
              "@type": "HowTo",
              "@id": `https://lemonskn.com/ro/${slug}#howto`,
              "name": frontmatter.routineTitle || "Rutina de îngrijire a pielii",
              "step": routineList.map((step, i) => ({
                "@type": "HowToStep",
                "name": `Pasul ${i + 1}`,
                "text": stripHtml(step)
              }))
            }
          ]
        : [])
    ]
  };
}
