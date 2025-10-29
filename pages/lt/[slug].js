{/*AL-RAJJAK*/}

































































































import { getPostSlugs, getPostBySlug } from '../../lib/posts';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import Layout from '../../component/Layout';
import Head from 'next/head';

function renderStars(rating) {
  return rating ? "⭐".repeat(rating) : "⭐";
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(post.content);

  const contentHtml = processedContent.toString();

  return {
    props: {
      post: {
        ...post,
        content: contentHtml,
      },
    },
  };
}

export async function getStaticPaths() {
  const slugs = getPostSlugs();
  return {
    paths: slugs.map(slug => ({
      params: { slug: slug.replace(/\.md$/, '') },
    })),
    fallback: false,
  };
}

export default function Post({ post }) {
  const { frontmatter, content } = post;

  // Prepare products
  const products = Array.from({ length: 9 }, (_, i) => {
    const n = i + 1;
    const productName = frontmatter[`productname${n}`];
    if (!productName) return null; // skip empty

    return {
      image: frontmatter[`image${n}`],
      productName,
      price: frontmatter[`price${n}`],
      pros: Array.from({ length: 9 }, (_, j) => frontmatter[`pros${n}${j + 1}`])
        .filter(p => p && p.trim() !== '' && p !== '@'),
      cons: Array.from({ length: 2 }, (_, j) => frontmatter[`cons${n}${j + 1}`])
        .filter(c => c && c.trim() !== '' && c !== '@'),
      star: frontmatter[`star${n}`],
      best: frontmatter[`best${n}`],
      url: frontmatter[`url${n}`],
      description: frontmatter[`d${n}`],
      imagetext: frontmatter[`imagetext${n}`] || productName || 'Product image',
      verylong: frontmatter[`verylong${n}`],
      details: frontmatter[`details${n}`],
    };
  }).filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org/",
    "@graph": products.map(product => ({
      "@type": "Product",
      "name": product.productName,
      "image": product.image || undefined,
      "description": product.description || frontmatter.description || '',
      "offers": {
        "@type": "Offer",
        "url": product.url,
        "price": product.price ? product.price.replace(/[^\d.]/g, '') : undefined,
        "priceCurrency": "€",
        "availability": "https://schema.org/InStock",
      },
      "aggregateRating": product.star ? {
        "@type": "AggregateRating",
        "ratingValue": product.star,
        "reviewCount": 1
      } : undefined,
      "review": (product.pros.length || product.cons.length) ? {
        "@type": "Review",
        "reviewBody": [
          product.pros.length ? `Pros: ${product.pros.join(', ')}` : '',
          product.cons.length ? `Cons: ${product.cons.join(', ')}` : ''
        ].filter(Boolean).join(' | '),
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": product.star || "4",
          "bestRating": "5",
          "worstRating": "1"
        }
      } : undefined
    }))
  };

  return (
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
        {frontmatter.image1 && <meta property="og:image" content={frontmatter.image1} />}
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta name="twitter:description" content={frontmatter.description} />
        {frontmatter.image1 && <meta name="twitter:image" content={frontmatter.image1} />}

      
        <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Lemonskn",
        "url": "https://lemonskn.com/",
        "logo": "https://lemonskn.com/lemonskn.png"
      }),
    }}
  />

  {/* Product JSON-LD */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
  />
        
      </Head>

    
        <article>
          <header>
            <h1 className="a">{frontmatter.keyword1}</h1>
            <h2 className="b">{frontmatter.keyword2}</h2>
            <p>{frontmatter.description}</p>
          </header>

          <section dangerouslySetInnerHTML={{ __html: content }} />

          <div className="list">
            {products.map((product, idx) => (
              <section key={idx} style={{ marginBottom: '2rem' }}>
                {product.image && (
                  <img loading="lazy" src={product.image} alt={product.imagetext} />
                )}
                <h3>{product.productName}</h3>
                {product.price && <p><strong className="price">Kaina:</strong> {product.price}</p>}
                {product.star && <p>{renderStars(product.star)}</p>}
                {product.url && (
                  <a
                    className="buy-button"
                    href={product.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    Pirkite iš Douglas
                  </a>
                )}

                {product.pros.length > 0 && (
                  <>
                    <h4>Privalumai</h4>
                    <ul className="pros">
                      {product.pros.map((pro, i) => <li key={i}>{pro}</li>)}
                    </ul>
                  </>
                )}

                {product.cons.length > 0 && (
                  <>
                    <h4>Trūkumai</h4>
                    <ul className="cons">
                      {product.cons.map((con, i) => <li key={i}>{con}</li>)}
                    </ul>
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
                    <td className="rating" title={`Rating: ${product.star}`}>{product.star}</td>
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
        .buy-button {
          display: inline-block;
          margin-top: 0.5rem;
          padding: 0.5rem 1rem;
          background-color: #0070f3;
          color: white;
          border-radius: 4px;
          text-decoration: none;
        }
        .buy-button:hover {
          background-color: #005bb5;
        }
          .read-more {
    margin-top: 3rem;
    padding: 1.5rem;
    border-top: 2px solid #eee;
    background-color: #fafafa;
    border-radius: 8px;
  }

  .read-more h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: #333;
  }

  .read-more ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .read-more li {
    margin-bottom: 0.75rem;
  }

  .read-more a {
    color: #0070f3;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
  }

  .read-more a:hover {
    color: #005bb5;
    text-decoration: underline;
  }
      `}</style>
    </Layout>
  );
}
