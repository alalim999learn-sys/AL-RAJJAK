{/*AL-RAJJAK*/}

































































































import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import Layout from '../../component/Layout';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Static paths
export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'posts/lt');
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

  const paths = files.map(file => ({
    params: { slug: file.replace(/\.md$/, '') },
  }));

  return { paths, fallback: false };
}

// Static props
export async function getStaticProps({ params }) {
  const fullPath = path.join(process.cwd(), 'posts/lt', `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data: frontmatter, content } = matter(fileContents);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);

  const contentHtml = processedContent.toString();

  const products = Array.from({ length: 9 }, (_, i) => {
  const n = i + 1;
  const productName = frontmatter[`productname${n}`];
  if (!productName) return null;

  const pros = [];
  for (let j = 1; j <= 5; j++) {
    const pro = frontmatter[`pros${n}${j}`];
    if (pro && pro.trim() !== '' && pro !== '@') pros.push(pro);
  }

  const reviews = [];
  for (let k = 1; k <= 3; k++) {
    const rev = frontmatter[`review${n}${k}`];
    if (rev && rev.trim() !== '' && rev !== '@') reviews.push(rev);
  }

  return {
    image: frontmatter[`image${n}`],
    amount: frontmatter[`amount${n}`] || reviews.length, // ✅ use frontmatter amount1, amount2
    productName,
    price: frontmatter[`price${n}`],
    pros,
    reviews,
    star: frontmatter[`star${n}`],
    best: frontmatter[`best${n}`],
    url: frontmatter[`url${n}`],
    intro: frontmatter[`intro${n}`],
    description: frontmatter.description || '',
    imagetext: frontmatter[`imagetext${n}`] || productName || 'Product image',
  };
}).filter(Boolean);



  return {
    props: {
      post: { frontmatter, content: contentHtml },
      products,
    },
  };
}

// Helper function to render stars
function renderStarsWithValue(rating) {
  if (!rating) return '⭐';
  return `⭐${rating}/5`;
}

// Main component
export default function Post({ post, products }) {
  const { frontmatter, content } = post;

  const jsonLd = {
    "@context": "https://schema.org/",
    "@graph": products.map(product => ({
      "@type": "Product",
      "name": product.productName,
      "image": product.image || undefined,
      "description": product.description || "No description provided",
      "offers": {
        "@type": "Offer",
        "url": product.url,
        "price": product.price ? product.price.replace(',', '.') : "0.00",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": "Free Shipping"
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "returnPolicyCategory": "https://schema.org/ReturnPolicy"
        }
      },
      "aggregateRating": product.star ? {
        "@type": "AggregateRating",
        "ratingValue": Number(product.star),
        "reviewCount": product.amount || 1
      } : undefined,
      "review": product.reviews.length ? product.reviews.map(rev => ({
        "@type": "Review",
        "author": { "@type": "Person", "name": "Anonymous" },
        "reviewBody": rev,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": product.star || "4",
          "bestRating": "5",
          "worstRating": "1"
        }
      })) : undefined
    }))
  };

  return (
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
        {frontmatter.image1 && <meta property="og:image" content={frontmatter.image1} />}
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta name="twitter:description" content={frontmatter.description} />
        {frontmatter.image1 && <meta name="twitter:image" content={frontmatter.image1} />}

        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Lemonskn",
            "url": "https://lemonskn.com/",
            "logo": "https://lemonskn.com/lemonskn.png"
          }) }}
        />

        {/* Author JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": frontmatter.author || "Admin"
          }) }}
        />

        {/* Product JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
        />
      </Head>

      <article>
        <header>
          <h1>{frontmatter.keyword1}</h1>
          <h2>{frontmatter.keyword2}</h2>
          <p className='hu'>{frontmatter.huuuuuuuuu}</p>
        </header>

        <section dangerouslySetInnerHTML={{ __html: content }} />

        <div className="list">
          {products.map((product, idx) => (
            <section key={idx} style={{ marginBottom: '2rem' }}>
              {product.image && <img loading="lazy" src={product.image} alt={product.imagetext} />}
              <h3>{product.productName}</h3>
              {product.price && <p><strong>Kaina:</strong> {product.price}</p>}
              {product.star && (
                <p>
           {renderStarsWithValue(product.star)} – surinkta iš {product.amount} atsiliepim{product.amount > 1 ? 'ų' : 'o'}

                </p>
              )}
              {product.url && (
                <a className="buy-button" href={product.url} target="_blank" rel="nofollow noopener noreferrer">
                  Pirkite
                </a>
              )}
              {product.intro && (
                <>
                  <p className="intro"><strong>Įvadas</strong></p>
                  <p className='introtext'>{product.intro}</p>
                </>
              )}
              {product.pros.length > 0 && <ul className="pros">{product.pros.map((pro, i) => <li key={i}>{pro}</li>)}</ul>}
              {product.reviews.length > 0 && (
                <>
                  <p><strong>Vartotojų atsiliepimai</strong></p>
                  <ul className="reviews">{product.reviews.map((rev, i) => <li key={i}>{rev}</li>)}</ul>
                  <p className="review-source">
                   Pastaba: visi atsiliepimai surinkti iš Reddit, Quora, Ubuy, Amazon, Makeup UK, Daraz, Sephora, Facebook.
                  </p>
                </>
              )}
            </section>
          ))}
        </div>

        <h2 className="c">{frontmatter.keyword3}</h2>
        <h2 className="d">{frontmatter.keyword4}</h2>
        <p className="compare">Palyginimo lentelė jums</p>

        <div className="table-container">
          <table aria-label="Product Comparison Table">
            <thead>
              <tr>
                <th>Vardas</th>
                <th>Kaina</th>
                <th>Įvertinimas</th>
                <th>Kodėl</th>
                <th>Pirkti</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, idx) => (
                <tr key={idx}>
                  <td title={product.productName}>{product.productName}</td>
                  <td>{product.price}</td>
                  <td className="rating" title={`Rating: ${product.star}`}>{renderStarsWithValue(product.star)}</td>
                  <td title={product.best}>{product.best}</td>
                  <td>
                    {product.url && (
                      <a
                        className="buy-button"
                        href={product.url}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        Pirkti
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      <style jsx>{`
        .hu{
          margin: 1% 0;
        }
        .list {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .list section {
          flex: 1 1 300px;
          border: 1px solid #ddd;
          padding: 1rem;
          border-radius: 8px;
        }
        .intro{
          color: #004623ff;
        }
        .introtext{
          color: #02aa0bff;
        }
        .buy-button {
          display: inline-block;
          margin-top: 0.5rem;
          padding: 0.5rem 1rem;
          background-color: #0070f3;
          color: white;
          border-radius: 4px;
          text-decoration: none;
        }
        .buy-button:hover { background-color: #005bb5; }
        .pros, .reviews { margin: 0.5rem 0; padding-left: 1.2rem; }
        .review-source { font-size: 0.9rem; color: #555; margin-top: 0.5rem; }
        .table-container { overflow-x: auto; margin-top: 2rem; }
        table { width: 100%; border-collapse: collapse; }
        th, td { border: 1px solid #ddd; padding: 0.5rem; text-align: left; }
      `}</style>
    </Layout>
  );
}
