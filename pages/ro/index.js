import Head from 'next/head';
import Layoutro from '../../component/Layoutro';

export default function Home() {
  return (
    <Layoutro>
      <Head>
        <title>Lemonskn – Cele mai bune produse</title>
        <meta name="description" content="Descoperiți cele mai bune alegeri în modă și frumusețe – toate sub 99% din buget. Cumpărături inteligente, viață frumoasă." />
        <link rel="canonical" href="https://lemonskn.com/ro" />
        <link rel="icon" href="/lemonskn.png" type="image/png" />
        <meta name="theme-color" content="#ffffff" />
    
        {/* Open Graph */}
        <meta property="og:title" content="Lemonskn – Cele mai bune produse" />
        <meta property="og:description" content="Descoperiți cele mai bune alegeri în modă și frumusețe – toate sub 99% din buget. Cumpărături inteligente, viață frumoasă." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lemonskn.com/ro" />
        <meta property="og:image" content="https://lemonskn.com/lemonskn.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lemonskn – Cele mai bune produse" />
        <meta name="twitter:description" content="Descoperiți cele mai bune alegeri în modă și frumusețe – toate sub 99% din buget. Cumpărături inteligente, viață frumoasă." />
        <meta name="twitter:image" content="https://lemonskn.com/lemonskn.png" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "name": "Lemonskn",
              "url": "https://lemonskn.com/",
              "logo": "https://lemonskn.com/lemonskn.png",
              "sameAs": [
                "https://www.instagram.com/lemonskn",
                "https://www.facebook.com/lemonskn",
                "https://www.youtube.com/@lemonskn"
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "email": "info@lemonskn.com"
                }
              ]
            },
            {
              "@type": "WebSite",
              "url": "https://lemonskn.com/",
              "name": "Lemonskn",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://lemonskn.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          ]
        }
        `}} />
      </Head>

      <main style={{ textAlign: 'center', padding: '3rem 1rem', backgroundColor: '#f9f9f9' }}>
        <img 
          src="/lemonskn.png" 
          alt="Logo Lemonskn" 
          style={{ width: '17%', maxWidth: '200px', height: 'auto', marginBottom: '1rem' }} 
        />
      <h1>Welcome to lemonskn.com</h1>
  <p>
    We are an educational guide – we don’t sell or offer any products. 
    We started this project to help people find reliable, clear, and science-backed information 
    about skincare and beauty.
  </p>
      </main>

      <style>

      {`
      @media (max-width: 600px) {
          .hu h1 {
            font-size: 2.2rem;
          }
          .homelogo {
            width: 50%;
          }
          .hu p {
            font-size: 1rem;
          }
        }
    
  

}`}
</style>
</Layoutro>
  );
}