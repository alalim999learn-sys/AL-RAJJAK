// pages/lt/index.js
import Layoutlt from '../../component/Layoutlt';
import Head from 'next/head';

export default function HomeLT() {
  return (
    <Layoutlt>
      <Head>
        <title>Lemonskn – Geriausi mados ir grožio produktai</title>
        <meta
          name="description"
          content="Atraskite geriausias mados ir grožio pasirinkimus – visi už mažiau nei 99% biudžeto. Išmanus apsipirkimas, gražus gyvenimas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://lemonskn.com/lt" />

        {/* Favicon */}
        <link rel="icon" href="/lemonskn.png" type="image/png" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph */}
        <meta property="og:title" content="Lemonskn – Geriausi mados ir grožio produktai" />
        <meta
          property="og:description"
          content="Atraskite geriausias mados ir grožio pasirinkimus – visi už mažiau nei 99% biudžeto. Išmanus apsipirkimas, gražus gyvenimas."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lemonskn.com/lt" />
        <meta property="og:image" content="https://lemonskn.com/lemonskn.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lemonskn – Geriausi mados ir grožio produktai" />
        <meta
          name="twitter:description"
          content="Atraskite geriausias mados ir grožio pasirinkimus – visi už mažiau nei 99% biudžeto. Išmanus apsipirkimas, gražus gyvenimas."
        />
        <meta name="twitter:image" content="https://lemonskn.com/lemonskn.png" />

        {/* Organization + Website JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer service",
                    "email": "info@lemonskn.com"
                  }
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
            }, null, 2),
          }}
        />
      </Head>

      <header className="hu">
        <img className="homelogo" src="/lemonskn.png" alt="Lemonskn Logo" />
      <h1>Sveiki atvykę į lemonskn.com</h1>
<p>
  Atraskite mūsų geriausius grožio patarimus ir išsamius gidus, kurie padės jaustis ir atrodyti nuostabiai.
</p>


      </header>

      <style jsx>{`
        .hu {
          text-align: center;
          line-height: 1.6;
          width: 100%;
          padding: 2rem 1rem;
        }
        .homelogo {
          width: 17%;
        }
        .hu h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: rgb(2, 67, 8);
        }
        .hu p {
          font-size: 1.25rem;
          color: #555;
          max-width: 600px;
          margin: 0 auto;
        }
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
      `}</style>
    </Layoutlt>
  );
}
