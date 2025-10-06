{/*AL-RAJJAK*/}








































import { getPostSlugs, getPostBySlug } from '../../lib/posts';  
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import Layout from '../../component/Layout'; 



import Head from 'next/head';


function renderStars(rating) {
  return "⭐".repeat(rating) || '⭐';
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
  const { frontmatter, slug, content } = post;


  const products = Array.from({ length: 9 }, (_, i) => {
    const n = i + 1;
    return {
      image: frontmatter[`image${n}`],
      productName: frontmatter[`productname${n}`],
      price: frontmatter[`price${n}`],
      pros: Array.from({ length: 9 }, (_, j) => frontmatter[`pros${n}${j + 1}`]).filter(Boolean),
      cons: Array.from({ length: 3 }, (_, j) => frontmatter[`cons${n}${j + 1}`]).filter(Boolean),
      star: frontmatter[`star${n}`],
      best: frontmatter[`best${n}`],
      url: frontmatter[`url${n}`],
      description: frontmatter[`d${n}`],
      imagetext: frontmatter[`imagetext${n}`] || frontmatter[`productname${n}`] || 'Product image',
      verylong: frontmatter[`verylong${n}`], // Added verylong field
      details : frontmatter[`details${n}`],
    };
  }).filter(p => p.productName); 

 
  const jsonLd = {
  "author": {
   
    "name": "AL-RAJJAK",
    "@type": "Person"
  },
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
    "aggregateRating": product.star
      ? {
          "@type": "AggregateRating",
          "ratingValue": product.star,
          "reviewCount": 1,
        }
      : undefined,
    "review": product.pros.length || product.cons.length
      ? {
          "@type": "Review",
          "reviewBody": [
            product.pros.length ? `Pros: ${product.pros.join(', ')}` : '',
            product.cons.length ? `Cons: ${product.cons.join(', ')}` : '',
          ]
            .filter(Boolean)
            .join(' | '),
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": product.star || "4",
            "bestRating": "5",
            "worstRating": "1",
          },
        }
      : undefined,
  })),
};


  return (
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />

         <meta name="robots" content="index, follow" /> 
        <meta property="og:title" content={`${frontmatter.title} | AL-RAJJAK ব্লগ`} />
        <meta property="og:description" content={frontmatter.description} />
        {frontmatter.image1 && <meta property="og:image" content={frontmatter.image1} />}
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${frontmatter.title} | AL-RAJJAK ব্লগ`} />
        <meta name="twitter:description" content={frontmatter.description} />
        {frontmatter.image1 && <meta name="twitter:image" content={frontmatter.image1} />}

        <link rel="icon" href="/yellow-lemon-vector-fruit.png" />

        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
        />
      </Head>

      <main>
        <article>
          <header>
            <h1>{frontmatter.keyword1}</h1>
            <h2 class="h2"
            >{frontmatter.keyword2}</h2>
            <p>{frontmatter.description}</p>
          </header>

         
          <section  class="list" dangerouslySetInnerHTML={{ __html: content }} />

        
          <div className="list">
            {products.map((product, idx) => (
              <section key={idx} style={{ marginBottom: '2rem' }}>
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.imagetext}
            
                  />
                )}
                <h3>{product.productName}</h3>
                <p><strong class="price">kaina</strong>{product.price}</p>
                <p>{renderStars(product.star)}</p>
      <a
        className="buy-button"
        href={product.url}
        target="_blank"
        rel="nofollow noopener noreferrer"
  
      >
       pirkti
      </a>
                <h4>privalumai</h4>
                <ul>
                  {product.pros.map((pro, i) => (
                    <li key={i}>{pro}</li>
                  ))}
                </ul>

                <h4>trūkumai</h4>
                <ul>
                  {product.cons.map((con, i) => (
                    <li key={i}>{con}</li>
                  ))}
                </ul>

               
              </section>
            ))}
          </div>
            <h2 class="h2">{frontmatter.keyword3}</h2>

          <div className="table-container">
            <table aria-label="Product Comparison Table">
           
              <thead>
                <tr>
                  <th>vardas</th>
                  <th>kaina</th>
                  <th>įvertinimas</th>
                  <th>kodėl</th>
                  <th>pirkti</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, idx) => (
                  <tr key={idx}>
                    <td title={product.productName}>{product.productName}</td>
                    <td>{product.price}</td>
                    <td className="rating" title={`Rating: ${product.star}`}>
                      {product.star}
                    </td>
                    <td title={product.best}>{product.best}</td>
                    <td>
                      <a
                        className="buy-button"
                        href={product.url}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                 >
                       pirkti
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


     <section className="mid">
  <h2 class="h2">{frontmatter.keyword4}</h2> 

  {products.map((product, idx) => (
    <div key={idx}>
      <h3>{product.productName}</h3>
      <p>{product.details}</p> 
      <a
        className="buy-button"
        href={product.url}
        target="_blank"
        rel="nofollow noopener noreferrer"
  
      >
       pirkti
      </a>
    </div>
  ))}
</section>


<section id="very-long" style={{ marginTop: '6rem' }}>
  <h2 class="h2">{frontmatter.keyword5}</h2>

  {products.map((product, idx) => (
    <div key={idx}>
      <h3>{product.productName}</h3>
      <p>{product.verylong}</p>
      <a
        className="buy-button"
        href={product.url}
        target="_blank"
        rel="nofollow noopener noreferrer"
  
      >
       pirkti
      </a>
    </div>
  ))}
</section>

         
    
        </article>
      </main>
    </Layout>
  );
}
