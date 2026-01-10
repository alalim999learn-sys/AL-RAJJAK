// component/HuuLayoutro.js
export function getStructuredData({ frontmatter, slug }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": frontmatter.title,
    "url": `https://lemonskn.com/ro/${slug}`,
    "description": frontmatter.description,
    "image": frontmatter.img || "https://lemonskn.com/lemonskn.png",
    "author": { "@type": "Person", "name": "Huu Author" },
    "publisher": { "@type": "Organization", "name": "Lemonskn" }
  };
}

export default function HuuLayoutro({ frontmatter, content, products, slug }) {
  return (
    <div className="huu-layout" style={{ background: '#fff3e0', padding: '25px', borderRadius: '12px' }}>
      <h2 style={{ color: '#e65100' }}>{frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      
      {products?.length > 0 && (
        <div className="huu-products" style={{ marginTop: '20px' }}>
          <h3>Products</h3>
          {products.map((p, i) => (
            <div key={i} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #e65100' }}>
              <h4>{p.productName}</h4>
              <p>{p.intro}</p>
              <p>Price: {p.price || 'N/A'}</p>
            </div>
          ))}
        </div>
      )}

      <footer style={{ marginTop: '20px', fontStyle: 'italic' }}>Huu Layout Footer</footer>
    </div>
  );
}
