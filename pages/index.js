// pages/index.js → https://lemonskn.com/ (English + x-default)
import Head from 'next/head';
import Layout from '../component/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Lemonskn – Skincare & Beauty Guide</title>
        <meta name="description" content="Science-backed skincare and beauty advice. No sales, no products – just pure knowledge." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://lemonskn.com/" />
<meta name="p:domain_verify" content="37aa5fb8283aca18395c940eaaf8b19c"/>
        {/* Correct hreflang */}
        <link rel="alternate" hrefLang="en" href="https://lemonskn.com/" />
        <link rel="alternate" hrefLang="lt" href="https://lemonskn.com/lt" />
        <link rel="alternate" hrefLang="ro" href="https://lemonskn.com/ro" />
        <link rel="alternate" hrefLang="x-default" href="https://lemonskn.com/" />

        {/* Favicon */}
        <link rel="icon" sizes="192x192" href="/lemonskn.png" />
        <link rel="icon" sizes="512x512" href="/lemonskn.png" />
        <link rel="apple-touch-icon" href="/lemonskn.png" />

        {/* OG + Twitter */}
        <meta property="og:title" content="Lemonskn – Skincare & Beauty Guide" />
        <meta property="og:description" content="No products. No sales. Just science." />
        <meta property="og:image" content="https://lemonskn.com/lemonskn.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Powerful Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://lemonskn.com/#organization",
              "name": "Lemonskn",
              "url": "https://lemonskn.com/",
              "logo": {
                "@type": "ImageObject",
                "@id": "https://lemonskn.com/lemonskn.png",
                "url": "https://lemonskn.com/lemonskn.png",
                "contentUrl": "https://lemonskn.com/lemonskn.png",
                "width": 512,
                "height": 512,
                "caption": "Lemonskn Logo"
              },
              "sameAs": [
                "https://www.instagram.com/lemonskn",
                "https://www.facebook.com/lemonskn",
                "https://www.youtube.com/@lemonskn",
                "https://www.tiktok.com/@lemonskn"
              ],
              "contactPoint": { "@type": "ContactPoint", "email": "hello@lemonskn.com", "contactType": "customer support" }
            },
            {
              "@type": "WebSite",
              "@id": "https://lemonskn.com/#website",
              "url": "https://lemonskn.com/",
              "name": "Lemonskn",
              "publisher": { "@id": "https://lemonskn.com/#organization" },
              "inLanguage": ["en-US", "lt-LT", "ro-RO"]
            }
          ]
        }, null, 2) }} />
      </Head>

      <main style={{ textAlign: 'center', padding: '5rem 1rem', background: '#f9f9f9' }}>
        <img src="/lemonskn.png" alt="Lemonskn" style={{ width: '17%', maxWidth: '200px', marginBottom: '1.5rem' }} />
        <h1 style={{ fontSize: '3rem', color: '#024308' }}>Welcome to Lemonskn.com</h1>
        <p style={{ fontSize: '1.3rem', color: '#444', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7' }}>
          We are an educational skincare & beauty guide.<br />
          No products. No sales. Just science-backed advice.
        </p>
      </main>
    </Layout>
  );
}