// components/NewLayoutlt.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

export default function NewLayoutlt({ frontmatter = {}, content = "", slug = "" }) {
  if (!frontmatter?.title) {
    return (
      <div className="text-center py-32 text-4xl font-bold text-red-600">
        Puslapis nerastas
      </div>
    );
  }

  const problemList = Array.isArray(frontmatter.problemList) ? frontmatter.problemList.filter(Boolean) : [];
  const solutionList = Array.isArray(frontmatter.solutionList) ? frontmatter.solutionList.filter(Boolean) : [];
  const comparisonTable = Array.isArray(frontmatter.comparisonTable) ? frontmatter.comparisonTable : [];
  const routineList = Array.isArray(frontmatter.routineList) ? frontmatter.routineList.filter(Boolean) : [];
  const faqList = Array.isArray(frontmatter.faqList) ? frontmatter.faqList.filter(q => q?.question && q?.answer) : [];

  const tocItems = [
    frontmatter.problemTitle && { id: "problema", title: frontmatter.problemTitle },
    (frontmatter.solution || solutionList.length > 0) && { id: "sprendimas", title: "Sprendimas" },
    comparisonTable.length > 0 && { id: "daryk-nedaryk", title: frontmatter.comparisonTitle || "Daryk / Nedaryk" },
    routineList.length > 0 && { id: "rutina", title: frontmatter.routineTitle || "Odos priežiūros rutina" },
    faqList.length > 0 && { id: "faq", title: "Dažniausiai užduodami klausimai" },
  ].filter(Boolean);

  const stripHtml = (str = "") => String(str || "").replace(/<[^>]*>/g, "").trim();

  return (
    <>
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
    width: 100%;
    max-width: 800px;
    margin: 3rem auto;
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
    background: #fee2e2;
    border-left: 8px solid #ef4444;
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
`}</style>



      <div className="new-layout__container">

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

        <header className="text-center">
          <h1 className="new-layout__main-title">{frontmatter.h1mainkeyword}</h1>
         
          {frontmatter.img && (
            <Image
              src={frontmatter.img}
              alt={frontmatter.h1mainkeyword}
              width={1000}
              height={600}
              layout="responsive"
              className="featured-img"
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OhZPAAMAbo6CQXqggAAAABJRU5ErkJggg=="
            />
          )}
        </header>

        {frontmatter.intro && (
          <section className="my-12 text-lg leading-relaxed text-gray-700 max-w-4xl mx-auto">
            <div dangerouslySetInnerHTML={{ __html: frontmatter.intro }} />
          </section>
        )}

        {frontmatter.problemTitle && (
          <>
            {frontmatter.h2long_tail_keyword1_before_problem && <h2>{frontmatter.h2long_tail_keyword1_before_problem}</h2>}
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

        {(frontmatter.solution || solutionList.length > 0) && (
          <section id="sprendimas">
            {frontmatter.h2long_tail_keyword2_before_solution && <h2>{frontmatter.h2long_tail_keyword2_before_solution}</h2>}
            <h3 className="new-layout__section-title">Sprendimas</h3>
            {frontmatter.solution && <div className="my-8 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: frontmatter.solution }} />}
            {solutionList.length > 0 && (
              <ul className="list-disc">
                {solutionList.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
              </ul>
            )}
          </section>
        )}

        {comparisonTable.length > 0 && (
          <section id="daryk-nedaryk">
            {frontmatter.h2long_tail_keyword3_before_do_dont_table && <h2>{frontmatter.h2long_tail_keyword3_before_do_dont_table}</h2>}
            <h3 className="new-layout__section-title">{frontmatter.comparisonTitle || "Daryk / Nedaryk"}</h3>
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

        {routineList.length > 0 && (
          <section id="rutina">
            {frontmatter.h2long_tail_keyword4_before_routine && <h2>{frontmatter.h2long_tail_keyword4_before_routine}</h2>}
            <h3 className="new-layout__section-title">{frontmatter.routineTitle || "Odos priežiūros rutina"}</h3>
            <ol className="list-decimal list-inside space-y-6 my-10 text-lg font-medium">
              {routineList.map((step, i) => <li key={i} dangerouslySetInnerHTML={{ __html: step }} />)}
            </ol>
          </section>
        )}

        {faqList.length > 0 && (
          <section id="faq">
            {frontmatter.h2long_tail_keyword5_before_FAQ && <h2>{frontmatter.h2long_tail_keyword5_before_FAQ}</h2>}
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

        {(frontmatter.linktitle1 || frontmatter.linktitle2 || frontmatter.linktitle3) && (
          <section className="internal-links text-center">
            <h3 className="text-3xl font-bold mb-12">Skaitykite taip pat</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => {
                const title = frontmatter[`linktitle${i}`];
                const slugLink = frontmatter[`linkslug${i}`];
                if (!title || !slugLink) return null;
                return (
                  <Link key={i} href={`/lt/${slugLink}`} className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300">
                    <div className="h-48 bg-gradient-to-br from-yellow-100 to-amber-200"></div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-800 line-clamp-2">{title}</h4>
                      <p className="text-amber-600 font-medium mt-4 inline-flex items-center">Skaityti daugiau →</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

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

        {content && (
          <article className="prose prose-lg max-w-none mt-16">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSanitize]}
              components={{
                a: ({ href, children }) => (
                  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </article>
        )}
      </div>
    </>
  );
}

// ✅ Structured data export
export function getStructuredData({ frontmatter, slug }) {
  const faqList = Array.isArray(frontmatter.faqList) ? frontmatter.faqList.filter(q => q?.question && q?.answer) : [];
  const routineList = Array.isArray(frontmatter.routineList) ? frontmatter.routineList.filter(Boolean) : [];
  const stripHtml = (str = "") => String(str || "").replace(/<[^>]*>/g, "").trim();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://lemonskn.com/lt/${slug}#article`,
        "headline": frontmatter.title,
        "description": frontmatter.description || "",
        "image": frontmatter.img || "https://lemonskn.com/lemonskn.png",
        "author": { "@type": "Organization", "name": "Lemonskn" },
        "publisher": { "@id": "https://lemonskn.com/#organization" },
        "datePublished": frontmatter.date || "2025-01-01",
        "dateModified": frontmatter.updated || frontmatter.date || "2025-01-01"
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
