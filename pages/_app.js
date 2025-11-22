// pages/_app.js
// pages/_app.js
import Head from 'next/head';
import '../src/styles/globals.css';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [cookieConsent, setCookieConsent] = useState(null); // null = undecided
  const [language, setLanguage] = useState('lt');
  const [isShortPage, setIsShortPage] = useState(false);

  useEffect(() => {
    // Detect language from URL
    const path = window.location.pathname;
    if (path.startsWith('/ro')) setLanguage('ro');
    else setLanguage('lt');

    // Check existing cookie consent
    const match = document.cookie.match(/(^| )cookie-consent=([^;]+)/);
    if (match) setCookieConsent(match[2] === 'true');

    // Detect if page is shorter than viewport
    const checkPageHeight = () => setIsShortPage(document.body.scrollHeight <= window.innerHeight);
    checkPageHeight();
    window.addEventListener('resize', checkPageHeight);

    return () => window.removeEventListener('resize', checkPageHeight);
  }, []);

  const setConsentCookie = (value) => {
    document.cookie = `cookie-consent=${value}; path=/; max-age=${60 * 60 * 24 * 365}`;
    setCookieConsent(value === 'true');
  };

  const acceptCookies = () => setConsentCookie('true');
  const rejectCookies = () => setConsentCookie('false');
  const openCookieSettings = () => setCookieConsent(null);

  const texts = {
    lt: {
      cookieText: 'Ši svetainė naudoja slapukus, kad pagerintų jūsų patirtį.',
      accept: 'Priimti',
      reject: 'Atmesti',
      settings: 'Slapukų nustatymai'
    },
    ro: {
      cookieText: 'Acest site folosește cookie-uri pentru a vă îmbunătăți experiența.',
      accept: 'Accept',
      reject: 'Respinge',
      settings: 'Setări Cookie'
    }
  };

  const { cookieText, accept, reject, settings } = texts[language];

  return (
    <>
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/lemonskn.png" />

        {/* Open Graph & Twitter Cards – বড় লোগো (512×512) */}
        <meta property="og:image" content="https://lemonskn.com/lemonskn-logo-512.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="Lemonskn Logo" />
        <meta name="twitter:image" content="https://lemonskn.com/lemonskn-logo-512.png" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* ========== সঠিক Organization + WebSite Schema (2025 স্ট্যান্ডার্ড) ========== */}
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
                    "@id": "https://lemonskn.com/lemonskn-logo-512.png",
                    "url": "https://lemonskn.com/lemonskn-logo-512.png",
                    "width": 512,
                    "height": 512,
                    "caption": "Lemonskn"
                  },
                  "image": { "@id": "https://lemonskn.com/lemonskn-logo-512.png" },
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
                  "@id": "https://lemonskn.com/#website",
                  "url": "https://lemonskn.com",
                  "name": "Lemonskn",
                  "publisher": { "@id": "https://lemonskn.com/#organization" },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://lemonskn.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            })
          }}
        />
      </Head>

      {/* Page Component */}
      <Component {...pageProps} cookieConsent={cookieConsent} />

      {/* Cookie Banner */}
      {cookieConsent === null && (
        <div
          style={{
            padding: '1em',
            backgroundColor: '#222',
            color: '#fff',
            position: 'fixed',
            bottom: 0,
            width: '100%',
            textAlign: 'center',
            zIndex: 9999,
            fontSize: '14px',
            lineHeight: '1.5',
          }}
        >
          <span>{cookieText} </span>
          <a href="/lt/privacy-policy" style={{ color: '#4CAF50', textDecoration: 'underline' }}>
            Sužinoti daugiau
          </a>
          <div style={{ marginTop: '10px' }}>
            <button onClick={acceptCookies} style={{ margin: '0 8px', padding: '8px 16px', background: '#4CAF50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              {accept}
            </button>
            <button onClick={rejectCookies} style={{ margin: '0 8px', padding: '8px 16px', background: '#f44336', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              {reject}
            </button>
          </div>
        </div>
      )}

      {/* Cookie Settings Button (after consent) */}
      {cookieConsent !== null && (
        <div style={{ textAlign: 'center', margin: '2em 0' }}>
          <button
            onClick={openCookieSettings}
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            {settings}
          </button>
        </div>
      )}
    </>
  );
}

export default MyApp;