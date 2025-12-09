// pages/lt/index.js → ১০০% Google 2025 Ready
import Head from 'next/head';
import Layoutlt from '../../component/Layoutlt';

export default function HomeLT() {
  return (
    <Layoutlt>
      <Head>
        <title>Lemonskn – Grožio ir odos priežiūros gidas</title>
        <meta name="description" content="Moksliniai odos priežiūros patarimai. Nieko neparduodame – tik dalinamės žiniomis." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* ১. Canonical + hreflang – trailing slash সহ */}
        <link rel="canonical" href="https://lemonskn.com/lt/" />
        <link rel="alternate" hrefLang="en" href="https://lemonskn.com/" />
        <link rel="alternate" hrefLang="lt" href="https://lemonskn.com/lt/" />
        <link rel="alternate" hrefLang="ro" href="https://lemonskn.com/ro/" />
        <link rel="alternate" hrefLang="x-default" href="https://lemonskn.com/" />
<meta name="p:domain_verify" content="37aa5fb8283aca18395c940eaaf8b19c"/>
        {/* Favicon */}
        <link rel="icon" sizes="512x512" href="/lemonskn.png" />
        <link rel="apple-touch-icon" href="/lemonskn.png" />

        {/* ২. Full Open Graph */}
        <meta property="og:title" content="Lemonskn – Grožio ir odos priežiūros gidas" />
        <meta property="og:description" content="Moksliniai odos priežiūros patarimai. Nieko neparduodame – tik žinias." />
        <meta property="og:url" content="https://lemonskn.com/lt/" />
        <meta property="og:image" content="https://lemonskn.com/lemonskn.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="lt_LT" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://lemonskn.com/lemonskn.png" />

        {/* ৩. ১০০% Valid Schema (কমা+ব্রেস ঠিক আছে) */}
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
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "hello@lemonskn.com",
                    "contactType": "customer support"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://lemonskn.com/#website",
                  "url": "https://lemonskn.com",
                  "name": "Lemonskn",
                  "publisher": { "@id": "https://lemonskn.com/#organization" },
                  "inLanguage": ["en-US", "lt-LT", "ro-RO"]
                }
              ]
            }, null, 2)
          }}
        />
      </Head>

      <main style={{ textAlign: 'center', padding: '5rem 1rem', background: '#f9f9f9' }}>
        <img src="/lemonskn.png" alt="Lemonskn" style={{ width: '17%', maxWidth: '200px', marginBottom: '1.5rem' }} />
        <h1 style={{ fontSize: '3rem', color: '#024308' }}>Sveiki atvykę į Lemonskn.com</h1>
        <p style={{ fontSize: '1.3rem', color: '#444', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7' }}>
          Mes esame edukacinis odos priežiūros gidas.<br />
          Nieko neparduodame – tik moksliniais tyrimais pagrįsta informacija.
        </p>
      </main>
    </Layoutlt>
  );
}