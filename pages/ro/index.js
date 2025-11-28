// ro home page
import Head from 'next/head';
import Layoutro from '../../component/Layoutro';

export default function Home() {
  return (
    <Layoutro>
    <Head>
  <title>Lemonskn – Cele mai bune produse</title>
  <meta name="description" content="Descoperiți cele mai bune alegeri în modă și frumusețe – toate sub 99% din buget. Cumpărături inteligente, viață frumoasă." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  
  {/* Canonical & Language */}
  <link rel="canonical" href="https://lemonskn.com/ro" />
  
  {/* Hreflang – খুব জরুরি (৩টা পেজেই দিবে) */}
  <link rel="alternate" hrefLang="ro" href="https://lemonskn.com/ro" />
  <link rel="alternate" hrefLang="lt" href="https://lemonskn.com/" />
  <link rel="alternate" hrefLang="en" href="https://lemonskn.com/en" />
  <link rel="alternate" hrefLang="x-default" href="https://lemonskn.com/" />

  {/* Favicon – সব সাইজ দাও */}
  <link rel="icon" href="/lemonskn.png" type="image/png" />
  <link rel="icon" sizes="192x192" href="/lemonskn.png" />
  <link rel="icon" sizes="512x512" href="/lemonskn.png" />
  <link rel="apple-touch-icon" href="/lemonskn.png" />

  {/* Open Graph – শুধু একবার */}
  <meta property="og:title" content="Lemonskn – Cele mai bune produse" />
  <meta property="og:description" content="Descoperiți cele mai bune alegeri în modă și frumusețe – toate sub 99% din buget. Cumpărături inteligente, viață frumoasă." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://lemonskn.com/ro" />
  <meta property="og:image" content="https://lemonskn.com/lemonskn.png" />
  <meta property="og:image:width" content="512" />
  <meta property="og:image:height" content="512" />
  <meta property="og:image:alt" content="Lemonskn Logo" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Lemonskn – Cele mai bune produse" />
  <meta name="twitter:description" content="Descoperiți cele mai bune alegeri în modă și frumusețe – toate sub 99% din buget." />
  <meta name="twitter:image" content="https://lemonskn.com/lemonskn.png" />

  {/* JSON-LD – সবচেয়ে গুরুত্বপূর্ণ (একই রাখো ৩টা পেজেই) */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://lemonskn.com/#organization",
            "name": "Lemonskn",
            "url": "https://lemonskn.com/",
            "logo": {
              "@type": "ImageObject",
              "url": "https://lemonskn.com/lemonskn.png",
              "width": 512,
              "height": 512
            },
            "sameAs": [
              "https://www.instagram.com/lemonskn",
              "https://www.facebook.com/lemonskn",
              "https://www.youtube.com/@lemonskn"
            ]
          },
          {
            "@type": "WebSite",
            "@id": "https://lemonskn.com/#website",
            "url": "https://lemonskn.com/",
            "name": "Lemonskn",
            "publisher": { "@id": "https://lemonskn.com/#organization" },
            "inLanguage": ["ro", "lt", "en"]
          }
        ]
      })
    }}
  />
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