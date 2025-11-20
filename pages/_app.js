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
    document.cookie = `cookie-consent=${value}; path=/; max-age=${60 * 60 * 24 * 365}`; // 1 year
    setCookieConsent(value === 'true');
  };

  const acceptCookies = () => setConsentCookie('true');
  const rejectCookies = () => setConsentCookie('false');
  const openCookieSettings = () => setCookieConsent(null); // reopen banner

  // Language texts
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
        <link rel="icon" href="/lemonskn.png" />
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
      </Head>

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
            ...(isShortPage ? { minHeight: '50px' } : {}),
          }}
        >
          <span>{cookieText}</span>
          <div style={{ marginTop: '1em' }}>
            <button
              onClick={acceptCookies}
              style={{
                marginRight: '10px',
                padding: '0.5em 1em',
                cursor: 'pointer',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: '#4CAF50',
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              {accept}
            </button>
            <button
              onClick={rejectCookies}
              style={{
                padding: '0.5em 1em',
                cursor: 'pointer',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: '#f44336',
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              {reject}
            </button>
          </div>
        </div>
      )}

      {/* Inline Cookie Settings Button */}
      {cookieConsent !== null && (
        <div style={{ textAlign: 'center', marginTop: '2em' }}>
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
              transition: 'background-color 0.3s',
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#45a049'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#4CAF50'}
          >
            {settings}
          </button>
        </div>
      )}
    </>
  );
}

export default MyApp;
