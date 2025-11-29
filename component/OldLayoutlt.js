// component/OldLayoutlt.js ← ১০০% Google-Ready 2025 
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';

export default function OldLayoutlt({
  frontmatter = {},
  content = '',
  products = [],
  slug = ''
}) {  
  const safeProducts = Array.isArray(products) ? products : [];

  const cleanPrice = (price) => {
    if (!price) return 0;
    const num = parseFloat(String(price).replace(/[^0-9.,]/g, '').replace(',', '.'));
    return isNaN(num) ? 0 : num;
  };

  const currency = frontmatter.currency || 'EUR';

  // ===== FULL POWER SCHEMA – 2025 এর জন্য বাধ্যতামূলক =====
  const fullSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. Organization + Logo (তোর আগেরটা ঠিক আছে)
    {
      "@type": "Organization",
      "@id": "https://lemonskn.com/#organization",
      "name": "Lemonskn",
      "url": "https://lemonskn.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://lemonskn.com/lemonskn.png",
        "url": "https://lemonskn.com/lemonskn.png",
        "contentUrl": "https://lemonskn.com/lemonskn.png",
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

    // 2. WebSite schema ← নতুন যোগ হলো
    {
      "@type": "WebSite",
      "@id": "https://lemonskn.com/#website",
      "url": "https://lemonskn.com",
      "name": "Lemonskn",
      "publisher": { "@id": "https://lemonskn.com/#organization" },
      "inLanguage": ["en-US", "lt-LT", "ro-RO"]
    },

    // 3. WebPage
    {
      "@type": "WebPage",
      "@id": `https://lemonskn.com/lt/${slug}#webpage`,
      "url": `https://lemonskn.com/lt/${slug}`,
      "name": frontmatter.title,
      "isPartOf": { "@id": "https://lemonskn.com/#website" },
      "inLanguage": "lt-LT"
    },

    // 4. Article
    {
      "@type": "Article",
      "headline": frontmatter.title,
      "description": frontmatter.description || "",
      "image": frontmatter.image1 || "https://lemonskn.com/lemonskn.png",
      "author": { "@type": "Organization", "name": "Lemonskn" },
      "publisher": { "@id": "https://lemonskn.com/#organization" },
      "datePublished": frontmatter.date || "2025-01-01",
      "dateModified": frontmatter.date || new Date().toISOString().split("T")[0]
    },

    // 5. Breadcrumb ← নতুন যোগ হলো
    {
      "@type": "BreadcrumbList",
      "@id": `https://lemonskn.com/lt/${slug}#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Pradžia",
          "item": "https://lemonskn.com/lt/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": frontmatter.title,
          "item": `https://lemonskn.com/lt/${slug}`
        }
      ]
    }
  ]
};
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description || ''} />
        <link rel="canonical" href={`https://lemonskn.com/lt/${slug}`} />

        {/* Hreflang – x-default = English */}
        <link rel="alternate" hrefLang="en" href={`https://lemonskn.com/${slug}`} />
        <link rel="alternate" hrefLang="lt" href={`https://lemonskn.com/lt/${slug}`} />
        <link rel="alternate" hrefLang="ro" href={`https://lemonskn.com/ro/${slug}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://lemonskn.com/${slug}`} />

        {/* Favicon */}
        <link rel="icon" sizes="512x512" href="/lemonskn.png" />
        <link rel="apple-touch-icon" href="/lemonskn.png" />

        {/* Open Graph */}
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description || ''} />
        <meta property="og:url" content={`https://lemonskn.com/lt/${slug}`} />
        <meta property="og:image" content={frontmatter.image1 || "https://lemonskn.com/lemonskn.png"} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="lt_LT" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://lemonskn.com/lemonskn.png" />

        {/* MAIN SCHEMA – লোগো আসার ৯০% কারণ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(fullSchema, null, 2) }}
        />
      </Head>

      {/* তোমার বাকি সব ডিজাইন, প্রোডাক্ট লিস্ট, টেবিল – একদম আগের মতোই থাকবে */}
      <div className="old-layout container">
 
        {/* ===== Header ===== */}
        <header className="page-header text-center mb-5">
          <h1 className="main-title">{frontmatter.keyword1 || 'Keyword 1'}</h1>
          <h2 className="sub-title">{frontmatter.keyword2 || 'Keyword 2'}</h2>
          {frontmatter.huuuuuuuuu && <p className="intro-text mt-3">{frontmatter.huuuuuuuuu}</p>}
        </header>

        {/* ===== Markdown Content ===== */}
        <section
          className="markdown-content mb-5"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* ===== Products List ===== */}
        {safeProducts.length > 0 && (
          <section className="products-section mb-5">
            <div className="product-list">
              {safeProducts.map((p, idx) => {
                const reviewCount = p.reviews?.length || 0;

                return (
                  <div key={idx} className="product-box mb-4 p-4 border rounded shadow-sm">

                    {/* Product Image */}
                    {p.image && (
                      <Image
                        src={p.image}
                        alt={p.imagetext || p.productName}
                        width={300}
                        height={300}
                        className="product-img rounded mx-auto d-block mb-3"
                        style={{ objectFit: 'cover' }}
                        loading="lazy"
                      />
                    )}

                    {/* Product Name */}
                    <h3 className="product-name text-center">{p.productName || 'Unnamed Product'}</h3>

                    {/* Price & Rating */}
                    <div className="d-flex justify-content-center gap-4 mb-3">
                      <p className="price mb-0">
                        <strong>Price:</strong>{' '}
                        {p.price ? `${cleanPrice(p.price)} ${currency}` : 'N/A'}
                      </p>
                      <p className="rating mb-0">
                        <strong>Rating:</strong> {p.star || '0'} / 5
                      </p>
                    </div>

                    {/* Intro */}
                    {p.intro && (
                      <p className="intro text-center mb-3">
                        <strong>Intro:</strong> {p.intro}
                      </p>
                    )}

                    {/* Pros */}
                    {Array.isArray(p.pros) && p.pros.length > 0 && (
                      <div className="pros mb-3">
                        <strong>Pros:</strong>
                        <ul className="list-unstyled ms-3">
                          {p.pros.map((pro, i) => (
                            <li key={i}>✓ {pro}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Reviews — ALWAYS VISIBLE, NO DROPDOWN */}
                    {Array.isArray(p.reviews) && p.reviews.length > 0 && (
                      <div className="reviews-static p-3 bg-light rounded">
                        <p className="reviews-title mb-2">
                          <strong>Customer Reviews ({p.reviews.length}):</strong>
                        </p>
                        <ul className="reviews-list list-unstyled ms-3 mb-0">
                          {p.reviews.map((rev, i) => (
                            <li key={i}>• {rev}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Buy Button */}
                    {p.url && (
                      <div className="text-center mt-3">
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="buy-btn btn btn-primary"
                        >
                          Buy Now
                        </a>
                      </div>
                    )}

                    {/* JSON-LD for Google */}
                    <script
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: JSON.stringify(
                          {
                            '@context': 'https://schema.org',
                            '@type': 'Product',
                            name: p.productName || 'Unknown Product',
                            image: p.image || undefined,
                            description: p.description || 'No description provided',
                            offers: {
                              '@type': 'Offer',
                              url: p.url || '#',
                              price: cleanPrice(p.price),
                              priceCurrency: currency,
                              availability: 'https://schema.org/InStock'
                            },
                            aggregateRating: p.star
                              ? {
                                  '@type': 'AggregateRating',
                                  ratingValue: Number(p.star),
                                  reviewCount: reviewCount
                                }
                              : undefined,
                            review: p.reviews?.length > 0
                              ? p.reviews.map(rev => ({
                                  '@type': 'Review',
                                  author: { '@type': 'Person', name: 'Anonymous' },
                                  reviewBody: rev,
                                  reviewRating: {
                                    '@type': 'Rating',
                                    ratingValue: Number(p.star) || 0,
                                    bestRating: 5
                                  }
                                }))
                              : undefined
                          },
                          null,
                          2
                        )
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ===== Comparison Table ===== */}
        {safeProducts.length > 0 && (
          <section className="comparison-section">
            <h2 className="table-title text-center mb-3">
              {frontmatter.keyword3 || 'Comparison Table'}
            </h2>
            {frontmatter.keyword4 && <h3 className="text-center mb-4">{frontmatter.keyword4}</h3>}

            <div className="table-responsive">
              <table className="comparison-table table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Why Choose</th>
                    <th>Buy</th>
                  </tr>
                </thead>
                <tbody>
                  {safeProducts.map((p, idx) => (
                    <tr key={idx}>
                      <td>{p.productName || 'N/A'}</td>
                      <td>{p.price ? `${cleanPrice(p.price)} ${currency}` : 'N/A'}</td>
                      <td>{p.star || '0'} / 5</td>
                      <td>{p.best || '—'}</td>
                      <td>
                        {p.url ? (
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="buy-btn btn btn-sm btn-success"
                          >
                            Buy Now
                          </a>
                        ) : (
                          'N/A'
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



