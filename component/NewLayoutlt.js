// components/NewLayoutlt.js
import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

// Google Rich Results এর জন্য HTML ট্যাগ রিমুভ করার ফাংশন
const stripHtml = (str = "") => String(str || "").replace(/<[^>]*>/g, "").trim();

export default function NewLayoutlt({ frontmatter = {}, content = "", slug = "" }) {
  if (!frontmatter?.title) {
    return (
      <div className="text-center py-32 text-4xl font-bold text-red-600">
        Puslapis nerastas
      </div>
    );
  }

  // Safe extraction with fallbacks
  const problemList = Array.isArray(frontmatter.problemList) ? frontmatter.problemList.filter(Boolean) : [];
  const solutionList = Array.isArray(frontmatter.solutionList) ? frontmatter.solutionList.filter(Boolean) : [];
  const comparisonTable = Array.isArray(frontmatter.comparisonTable) ? frontmatter.comparisonTable : [];
  const routineList = Array.isArray(frontmatter.routineList) ? frontmatter.routineList.filter(Boolean) : [];
  const faqList = Array.isArray(frontmatter.faqList) ? frontmatter.faqList.filter(q => q?.question && q?.answer) : [];

  // Table of Contents
  const tocItems = [
    frontmatter.problemTitle && { id: "problema", title: frontmatter.problemTitle },
    (frontmatter.solution || solutionList.length > 0) && { id: "sprendimas", title: "Sprendimas" },
    comparisonTable.length > 0 && { id: "daryk-nedaryk", title: frontmatter.comparisonTitle || "Daryk / Nedaryk" },
    routineList.length > 0 && { id: "rutina", title: frontmatter.routineTitle || "Odos priežiūros rutina" },
    faqList.length > 0 && { id: "faq", title: "Dažniausiai užduodami klausimai" },
  ].filter(Boolean);

  return (
    <>
      {/* Global Styling */}
      <style jsx global>{`
        .new-layout__container { max-width: 900px; margin: 0 auto; padding: 2.5rem 1rem; line-height: 1.8; color: #1f2937; font-family: system-ui, -apple-system, sans-serif; }
        .new-layout__main-title { font-size: 2.9rem; font-weight: 800; text-align: center; color: #111; margin: 1.5rem 0 1rem; }
        .new-layout__subtitle { font-size: 1.5rem; text-align: center; color: #4b5563; margin-bottom: 3.5rem; }
        .new-layout__section-title { font-size: 2.2rem; font-weight: 700; margin: 4.5rem 0 1.8rem; position: relative; padding-bottom: 1rem; }
        .new-layout__section-title::after { content: ""; position: absolute; left: 0; bottom: 0; width: 120px; height: 6px; background: #facc15; border-radius: 4px; }
        .featured-img { width: 100%; max-width: 800px; margin: 3rem auto; border-radius: 20px; box-shadow: 0 25px 50px rgba(0,0,0,0.15); display: block; }
        .toc { background: #f8fafc; padding: 2rem; border-radius: 16px; border: 1px solid #e2e8f0; margin: 3.5rem 0; }
        .toc h3 { margin: 0 0 1rem; font-size: 1.3rem; font-weight: 700; }
        .toc ul { list-style: none; padding: 0; margin: 0; }
        .toc li { margin: 0.7rem 0; }
        .toc a { color: #1d4ed8; font-weight: 600; text-decoration: none; transition: all 0.2s; }
        .toc a:hover { color: #facc15; text-decoration: underline; }
        .internal-links { background: linear-gradient(135deg, #fffbeb, #fefce8); padding: 3rem 2rem; border-radius: 20px; margin: 4rem 0; }
        .disclaimer-box { background: #eff6ff; border-left: 6px solid #3b82f6; padding: 2rem; border-radius: 0 12px 12px 0; margin: 4rem 0; }
        @media (max-width: 768px) {
          .new-layout__main-title { font-size: 2.3rem; }
          .new-layout__section-title { font-size: 1.9rem; }
        }
      `}</style>

      <div className="new-layout__container">

        {/* Table of Contents */}
        {tocItems.length > 0 && (
          <div className="toc">
            <h3>Turinys</h3>
            <ul>
              {tocItems.map((item, i) => (
                <li key={i}><a href={`#${item.id}`}>{item.title}</a></li>
              ))}
            </ul>
          </div>
        )}

        {/* Header */}
        <header className="text-center">
       <h1 className="new-layout__main-title">
  {frontmatter.h1mainkeyword}
</h1>


          {frontmatter.subtitle && <p className="new-layout__subtitle">{frontmatter.subtitle}</p>} 
          {frontmatter.img && (
            <Image
              src={frontmatter.img}
              alt={frontmatter.h1mainkeyword}
              width={1000} // Original width (for aspect ratio)
        height={600} // Original height (for aspect ratio)
        layout="responsive" // This makes it responsive
              className="featured-img"
            
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OhZPAAMAbo6CQXqggAAAABJRU5ErkJggg=="
            />
          )}
        </header>

        {/* Intro */}
        {frontmatter.intro && (
          <section className="my-12 text-lg leading-relaxed text-gray-700 max-w-4xl mx-auto">
            <div dangerouslySetInnerHTML={{ __html: frontmatter.intro }} />
          </section>
        )}

        {/* PROBLEM SECTION */}
        {frontmatter.problemTitle && (
          <>
            {frontmatter.h2long_tail_keyword1_before_problem && (
              <h2>{frontmatter.h2long_tail_keyword1_before_problem}</h2>
            )}
            <h3 id="problema" className="new-layout__section-title">{frontmatter.problemTitle}</h3>
            {problemList.length > 0 && (
              <div className="bg-red-50 border-l-8 border-red-500 p-8 rounded-r-xl my-10">
                <ul className="list-disc list-inside space-y-3 text-lg">
                  {problemList.map((item, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        {/* SOLUTION SECTION */}
        {(frontmatter.solution || solutionList.length > 0) && (
          <section id="sprendimas">
            {frontmatter.h2long_tail_keyword2_before_solution && (
              <h2>{frontmatter.h2long_tail_keyword2_before_solution}</h2>
            )}
            <h3 className="new-layout__section-title">Sprendimas</h3>
            {frontmatter.solution && (
              <div className="my-8 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: frontmatter.solution }} />
            )}
            {solutionList.length > 0 && (
              <ul className="list-disc">
                {solutionList.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            )}
          </section>
        )}

        {/* DO / DON'T SECTION */}
        {comparisonTable.length > 0 && (
          <section id="daryk-nedaryk">
            {frontmatter.h2long_tail_keyword3_before_do_dont_table && (
              <h2>{frontmatter.h2long_tail_keyword3_before_do_dont_table}</h2>
            )}
            <h3 className="new-layout__section-title">
              {frontmatter.comparisonTitle || "Daryk / Nedaryk"}
            </h3>
            <div className="overflow-x-auto my-10">
              <table className="w-full border-collapse text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-5 font-bold text-green-700">Daryk</th>
                    <th className="p-5 font-bold text-red-700">Nedaryk</th>
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

        {/* ROUTINE SECTION */}
        {routineList.length > 0 && (
          <section id="rutina">
            {frontmatter.h2long_tail_keyword4_before_routine && (
              <h2>{frontmatter.h2long_tail_keyword4_before_routine}</h2>
            )}
            <h3 className="new-layout__section-title">
              {frontmatter.routineTitle || "Odos priežiūros rutina"}
            </h3>
            <ol className="list-decimal list-inside space-y-6 my-10 text-lg font-medium">
              {routineList.map((step, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: step }} />
              ))}
            </ol>
          </section>
        )}

        {/* FAQ SECTION */}
        {faqList.length > 0 && (
          <section id="faq">
            {frontmatter.h2long_tail_keyword5_before_FAQ && (
              <h2>{frontmatter.h2long_tail_keyword5_before_FAQ}</h2>
            )}
            <h3 className="new-layout__section-title">Dažniausiai užduodami klausimai</h3>
            <div className="space-y-8 my-12">
              {faqList.map((faq, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-lg transition">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h4>
                  <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Internal Links */}
        {(frontmatter.linktitle1 || frontmatter.linktitle2 || frontmatter.linktitle3) && (
          <section className="internal-links text-center">
            <h3 className="text-3xl font-bold mb-12">Skaitykite taip pat</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i =>
                frontmatter[`linktitle${i}`] && frontmatter[`linkslug${i}`] ? (
                  <a
                    key={i}
                    href={`/lt/${frontmatter[`linkslug${i}`]}`}
                    className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300"
                  >
                    <div className="h-48 bg-gradient-to-br from-yellow-100 to-amber-200"></div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-800 line-clamp-2">
                        {frontmatter[`linktitle${i}`]}
                      </h4>
                      <p className="text-amber-600 font-medium mt-4 inline-flex items-center">
                        Skaityti daugiau →
                      </p>
                    </div>
                  </a>
                ) : null
              )}
            </div>
          </section>
        )}

        {/* Medical Disclaimer */}
        <section className="disclaimer-box my-20">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Svarbi medicininė pastaba</h3>
          <p className="text-lg leading-relaxed text-gray-800">
            Šis straipsnis parengtas remiantis moksliniais tyrimais iš
            <strong> PubMed, Cochrane Library, Harvard Health, Oxford Academic </strong>
            ir kitų recenzuojamų šaltinių. Tačiau <strong>jis nėra medicininė konsultacija</strong>.
            Prieš keisdami odos priežiūros rutiną, <strong>būtinai pasitarkite su dermatologu</strong>.
            Čia nėra jokių afiliuotų nuorodų.
          </p>
        </section>

        {/* Extra Markdown Content */}
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

/* GOOGLE 2025-READY STRUCTURED DATA – 100% VALID */
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
        "@type": "Organization",
        "@id": "https://lemonskn.com/#organization",
        "name": "Lemonskn",
        "url": "https://lemonskn.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://lemonskn.com/lemonskn.png",
          "width": 512,
          "height": 512
        }
      },
      {
        "@type": "MedicalWebPage",
        "@id": `https://lemonskn.com/lt/${slug}#webpage`,
        "url": `https://lemonskn.com/lt/${slug}`,
        "name": frontmatter.title,
        "description": frontmatter.description || "",
        "inLanguage": "lt-LT",
        "isPartOf": { "@id": "https://lemonskn.com/#website" }
      },
      {
        "@type": "Article",
        "@id": `https://lemonskn.com/lt/${slug}#article`,
        "headline": frontmatter.title,
        "description": frontmatter.description,
        "image": frontmatter.img || "https://lemonskn.com/lemonskn.png",
        "author": { "@type": "Organization", "name": "Lemonskn" },
        "publisher": { "@id": "https://lemonskn.com/#organization" },
        "datePublished": frontmatter.date || "2025-01-01",
        "dateModified": frontmatter.updated || frontmatter.date || "2025-01-01"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://lemonskn.com/lt/${slug}#breadcrumbs`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Pradžia", "item": "https://lemonskn.com/lt/" },
          { "@type": "ListItem", "position": 2, "name": frontmatter.title, "item": `https://lemonskn.com/lt/${slug}` }
        ]
      },
      ...(faqList.length > 0 ? [{
        "@type": "FAQPage",
        "@id": `https://lemonskn.com/lt/${slug}#faq`,
        "mainEntity": faqList.map(q => ({
          "@type": "Question",
          "name": stripHtml(q.question),
          "acceptedAnswer": { "@type": "Answer", "text": stripHtml(q.answer) }
        }))
      }] : []),
      ...(routineList.length > 0 ? [{
        "@type": "HowTo",
        "@id": `https://lemonskn.com/lt/${slug}#howto`,
        "name": frontmatter.routineTitle || "Odos priežiūros rutina",
        "description": frontmatter.routineList || "Veiksminga kasdienė rutina",
        "totalTime": "PT10M",
        "step": routineList.map((text, i) => ({
          "@type": "HowToStep",
          "name": `Žingsnis ${i + 1}`,
          "text": stripHtml(text)
        }))
      }] : [])
    ]
  };
}