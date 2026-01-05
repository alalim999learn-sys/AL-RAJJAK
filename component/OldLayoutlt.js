// components/OldLayoutlt.js
import React from "react";
import Image from "next/image";

/* ---------------- HELPERS ---------------- */
const MAX_PRODUCTS = 9;

const cleanPrice = (price) => {
  if (!price) return null;
  const num = parseFloat(
    String(price)
      .replace(/\s/g, "")
      .replace(/[^0-9.,]/g, "")
      .replace(",", ".")
  );
  return isNaN(num) ? null : num;
};
 
const normalizeCurrency = (c) => {
  if (!c) return "EUR";
  const cur = c.toUpperCase();
  return ["EUR", "USD", "GBP", "PLN"].includes(cur) ? cur : "EUR";
};

/* ---------------- COMPONENT ---------------- */
export default function OldLayoutlt({
  frontmatter = {},
  content = "",
  products = [],
  slug = "",
}) {
  /* 🔥 BUILD PRODUCTS DYNAMICALLY */
  const safeProducts =
    products.length > 0
      ? products
      : (() => {
          const arr = [];
          for (let i = 1; i <= MAX_PRODUCTS; i++) {
            const name = frontmatter[`productname${i}`];
            if (!name) continue;

            arr.push({
              productName: name,
              price: frontmatter[`price${i}`],
              image: frontmatter[`image${i}`],
              imagetext: frontmatter[`imagetext${i}`],
              star: Number(frontmatter[`star${i}`]) || 0,
              best: frontmatter[`best${i}`],
              intro: frontmatter[`intro${i}`],
              url: frontmatter[`url${i}`],
              pros: [
                frontmatter[`pros${i}1`],
                frontmatter[`pros${i}2`],
                frontmatter[`pros${i}3`],
                frontmatter[`pros${i}4`],
                frontmatter[`pros${i}5`],
              ].filter(Boolean),
              reviews: [
                frontmatter[`review${i}1`],
                frontmatter[`review${i}2`],
                frontmatter[`review${i}3`],
              ].filter(Boolean),
            });
          }
          return arr;
        })();

  const currency = normalizeCurrency(frontmatter.currency);




  return (
    <>
      <style jsx global>{`
        .old-layout-wrapper {
          min-height: 100vh;
          background: #f9fafb;
        }
        .old-header {
          text-align: center;
          padding: 4rem 1rem 5rem;
          background: linear-gradient(135deg, #fffbeb, #fefce8);
          border-bottom: 8px solid #facc15;
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
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,.1);
        }
        .product-image-wrapper {
          position: relative;
          height: 360px;
        }
        .price-tag {
          position: absolute;
          top: 16px;
          right: 16px;
          background: #facc15;
          padding: .8rem 1.4rem;
          border-radius: 50px;
          font-weight: bold;
           
        }
        .rating {
          color: #fbbf24;
          font-size: 1.5rem;
          letter-spacing: 3px;
        }
        .pros-list {
          list-style: none;
          padding: 0;
          margin: 1rem 0;
        }
        .pros-list li {
          color: #16a34a;
          font-weight: 600;
          margin: .4rem 0;
        }
        .buy-button {
          display: inline-block;
          background: #facc15;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: bold;
          margin-top: 1.2rem;
        }
      `}</style>

      <div className="old-layout-wrapper">
        <header className="old-header">
          <h1>{frontmatter.keyword1}</h1>
          {frontmatter.keyword2 && <h2>{frontmatter.keyword2}</h2>}
          <p>{frontmatter.huuuuuuuuu}</p>
        </header>
             
        {content && (
          <section className="max-w-4xl mx-auto px-6 mb-20">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </section>
        )}

        {safeProducts.length > 0 && (
          <section className="product-grid">
            {safeProducts.map((p, i) => (
              <div key={i} className="product-card">
               {p.image && (
  <div className="product-image-wrapper">
    <Image src={p.image} alt={p.productName} fill />
    {cleanPrice(p.price) && (
      <div className="price-tag">
        {cleanPrice(p.price)} {currency}
      </div>
    )}
  </div>
)}


                  <h3>{p.productName}</h3>

 

                  {p.star > 0 && (
                    <div>
                      <span className="rating">★★★★★</span> ({p.star}/5)
                    </div>
                  )}

                  {p.intro && <p>{p.intro}</p>}

                  {p.pros.length > 0 && (
                    <ul className="pros-list">
                      {p.pros.map((pro, idx) => (
                        <li key={idx}>{pro}</li>
                      ))}
                    </ul>
                  )}

                  {p.reviews.length > 0 && (
                  <details   >
  <summary  style={{ fontWeight: 'bold' }}>
    Skaityti visų atsiliepimų santrauką ⬇️
  </summary>
  <ul>
    {p.reviews.map((r, idx) => (
      <li key={idx}>• {r}</li>
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
              
            ))}
          </section>
        )}
      </div>
    </>
  );
}

/* ---------------- STRUCTURED DATA ---------------- */
export function getStructuredData({ frontmatter, products = [], slug }) {
  const currency = normalizeCurrency(frontmatter.currency);

  const validProducts = products.filter(
    (p) => p?.productName && cleanPrice(p.price)
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://lemonskn.com/#organization",
        name: "Lemonskn",
        url: "https://lemonskn.com",
      },
      {
        "@type": "WebPage",
        "@id": `https://lemonskn.com/lt/${slug}`,
        url: `https://lemonskn.com/lt/${slug}`,
        inLanguage: "lt-LT",
        name: frontmatter.title || frontmatter.keyword1,
      },
      ...validProducts.map((p) => ({
        "@type": "Product",
        name: p.productName,
        image: p.image,
        description: p.intro || p.productName,
        offers: {
          "@type": "Offer",
          url: p.url,
          priceCurrency: currency,
          price: cleanPrice(p.price), // ✅ NUMBER
          availability: "https://schema.org/InStock",
        },
        ...(p.star && {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: Number(p.star),
            reviewCount: p.reviews?.length || 1,
            bestRating: 5,
          },
        }),
      })),
    ],
  };
}
