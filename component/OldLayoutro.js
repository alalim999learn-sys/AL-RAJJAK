// components/OldLayoutro.js
import React from "react";
import Image from "next/image";

export default function OldLayoutro({ frontmatter = {}, content = "", products = [], slug = "" }) {
  const safeProducts = Array.isArray(products) ? products : [];

  const cleanPrice = (price) => {
    if (!price) return 0;
    const num = parseFloat(String(price).replace(/[^0-9.,]/g, "").replace(",", "."));
    return isNaN(num) ? 0 : num;
  };

  const currency = frontmatter.currency || "EUR";

  return (
    <>
      {/* Global Styling for Old Layout */}
      <style jsx global>{`
        .old-layout-wrapper {
          min-height: 100vh;
          background: #f9fafb;
        }
        .old-header {
          text-align: center;
          padding: 4rem 1rem 5rem;
          background: linear-gradient(135deg, #fffbeb 0%, #fefce8 100%);
          border-bottom: 8px solid #facc15;
        }
        .old-title {
          font-size: 3.5rem;
          font-weight: 900;
          color: #111;
          line-height: 1.2;
          margin: 0;
        }
        .old-subtitle {
          font-size: 1.9rem;
          color: #4b5563;
          margin: 1.5rem 0 0;
          font-weight: 500;
        }
        .old-intro {
          font-size: 1.25rem;
          max-width: 900px;
          margin: 2rem auto 0;
          color: #374151;
          line-height: 1.8;
        }
        .product-grid {
          display: grid;
          gap: 2.8rem;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          max-width: 1400px;
          margin: 5rem auto;
          padding: 0 1rem;
        }
        .product-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
        }
        .product-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.18);
        }
        .product-image-wrapper {
          position: relative;
          height: 360px;
          overflow: hidden;
        }
        .price-tag {
          position: absolute;
          top: 16px;
          right: 16px;
          background: #facc15;
          color: black;
          font-size: 1.3rem;
          font-weight: bold;
          padding: 0.8rem 1.4rem;
          border-radius: 50px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        .rating {
          color: #fbbf24;
          font-size: 1.6rem;
          letter-spacing: 3px;
        }
        .pros-list {
          list-style: none;
          padding: 0;
          margin: 1rem 0;
        }
        .pros-list li {
          padding: 0.4rem 0;
          display: flex;
          align-items: center;
          color: #16a34a;
          font-weight: 600;
        }
        .pros-list li::before {
          content: "Checkmark";
          margin-right: 0.8rem;
          font-size: 1.3rem;
        }
        .buy-button {
          display: inline-block;
          background: #facc15;
          color: black;
          font-weight: bold;
          font-size: 1.2rem;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s;
          margin-top: 1rem;
        }
        .buy-button:hover {
          background: #eab308;
          transform: scale(1.07);
        }
        .comparison-table {
          width: 100%;
          max-width: 1200px;
          margin: 6rem auto;
          border-collapse: separate;
          border-spacing: 0;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }
        .comparison-table th {
          background: #1f2937;
          color: white;
          padding: 1.8rem;
          font-size: 1.2rem;
          font-weight: 700;
        }
        .comparison-table td {
          padding: 1.8rem;
          text-align: center;
          background: white;
          border-bottom: 1px solid #e5e7eb;
        }
        .comparison-table tr:nth-child(even) td {
          background: #f9fafb;
        }
        .buy-link {
          color: #16a34a;
          font-weight: bold;
          text-decoration: none;
        }
        .buy-link:hover {
          text-decoration: underline;
        }
        @media (max-width: 768px) {
          .old-title { font-size: 2.6rem; }
          .old-subtitle { font-size: 1.5rem; }
          .product-grid { grid-template-columns: 1fr; padding: 0 1rem; }
        }
      `}</style>

      <div className="old-layout-wrapper">
        {/* Header */}
        <header className="old-header">
          <h1 className="old-title">{frontmatter.keyword1}</h1>
          {frontmatter.keyword2 && <h2 className="old-subtitle">{frontmatter.keyword2}</h2>}
          {frontmatter.huuuuuuuuu && <p className="old-intro">{frontmatter.huuuuuuuuu}</p>}
        </header>

        {/* Main Markdown Content */}
        {content && (
          <section className="max-w-4xl mx-auto px-6 mb-20">
            <div className="prose prose-lg mx-auto" dangerouslySetInnerHTML={{ __html: content }} />
          </section>
        )}

        {/* Products Grid */}
        {safeProducts.length > 0 && (
          <section className="product-grid">
            {safeProducts.map((p, idx) => (
              <div key={idx} className="product-card">
                {p.image && (
                  <div className="product-image-wrapper">
                    <Image
                      src={p.image}
                      alt={p.imagetext || p.productName}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                    {p.price && (
                      <div className="price-tag">
                        {cleanPrice(p.price)} {currency}
                      </div>
                    )}
                  </div>
                )}

                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-3">{p.productName}</h3>

                  {p.star > 0 && (
                    <div className="mb-4">
                      <span className="rating">★★★★★</span>
                      <span className="text-gray-600 ml-3 text-lg">({p.star}/5)</span>
                    </div>
                  )}

                  {p.intro && <p className="text-gray-600 mb-6 leading-relaxed">{p.intro}</p>}

                  {p.pros?.length > 0 && (
                    <ul className="pros-list">
                      {p.pros.map((pro, i) => (
                        <li key={i}>{pro}</li>
                      ))}
                    </ul>
                  )}

                  {p.reviews?.length > 0 && (
                    <details className="mt-5 text-left">
                      <summary className="cursor-pointer font-bold text-blue-700">
                        Atsiliepimai ({p.reviews.length})
                      </summary>
                      <ul className="mt-3 text-sm text-gray-600 space-y-2">
                        {p.reviews.map((r, i) => (
                          <li key={i}>• {r}</li>
                        ))}
                      </ul>
                    </details>
                  )}

                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="buy-button"
                    >
                      Pirkti dabar
                    </a>
                  )}
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Comparison Table */}
        {safeProducts.length > 0 && (
          <section className="px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              {frontmatter.keyword3 || "Palyginimo lentelė"}
            </h2>
            <div className="overflow-x-auto">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Pavadinimas</th>
                    <th>Kaina</th>
                    <th>Įvertinimas</th>
                    <th>Kodėl geriausias</th>
                    <th>Pirkti</th>
                  </tr>
                </thead>
                <tbody>
                  {safeProducts.map((p, i) => (
                    <tr key={i}>
                      <td className="font-semibold text-lg">{p.productName}</td>
                      <td className="font-bold text-xl">
                        {p.price ? `${cleanPrice(p.price)} ${currency}` : "–"}
                      </td>
                      <td>{p.star ? `${p.star}/5` : "–"}</td>
                      <td>{p.best || "–"}</td>
                      <td>
                        {p.url ? (
                          <a href={p.url} target="_blank" rel="noopener noreferrer" className="buy-link">
                            Pirkti
                          </a>
                        ) : (
                          "–"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </div>
    </>
  );
}

// Google 2025-Ready Structured Data (এটাই সবচেয়ে গুরুত্বপূর্ণ)
export function getStructuredData({ frontmatter, products = [], slug }) {
  const currency = frontmatter.currency || "EUR";
  const cleanPrice = (p) => parseFloat(String(p).replace(/[^0-9.,]/g, "").replace(",", ".")) || 0;

  const validProducts = products.filter((p) => p?.productName);

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
          "height": 512,
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://lemonskn.com/#website",
        "url": "https://lemonskn.com",
        "name": "Lemonskn",
        "publisher": { "@id": "https://lemonskn.com/#organization" },
      },
      { 
        "@type": "WebPage",
        "@id": `https://lemonskn.com/ro/${slug}#webpage`,
        "url": `https://lemonskn.com/ro/${slug}`,
        "name": frontmatter.title || frontmatter.keyword1,
        "inLanguage": "ro_RO",
      },
      {
        "@type": "Article",
        "headline": frontmatter.title || frontmatter.keyword1,
        "description": frontmatter.description ,
        "image": frontmatter.image1 || "https://lemonskn.com/lemonskn.png",
        "author": { "@type": "Organization", "name": "Lemonskn" },
        "datePublished": frontmatter.date || "2025-01-01",
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Pradžia", "item": "https://lemonskn.com/ro/" },
          { "@type": "ListItem", "position": 2, "name": frontmatter.title || frontmatter.keyword1, "item": `https://lemonskn.com/ro/${slug}` },
        ],
      },
      ...validProducts.map((p) => ({
        "@type": "Product",
        "name": p.productName,
        "image": p.image || "https://lemonskn.com/lemonskn.png",
        "description": p.intro || p.description || p.productName,
        "offers": {
          "@type": "Offer",
          "url": p.url || `https://lemonskn.com/ro/${slug}`,
          "priceCurrency": currency,
          "price": cleanPrice(p.price),
          "availability": "https://schema.org/InStock",
        },
        "aggregateRating": p.star
          ? {
              "@type": "AggregateRating",
              "ratingValue": Number(p.star),
              "reviewCount": p.reviews?.length || 1,
              "bestRating": 5,
            }
          : undefined,
      })),
    ].filter(Boolean),
  };
}