import Head from 'next/head';
import '../src/styles/globals.css';
import { useEffect, useState } from 'react';

export default function MyApp({ Component, pageProps }) {
  const [cookieConsent, setCookieConsent] = useState(null);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // 1. Detect language from URL
    const path = window.location.pathname;
    if (path.startsWith('/es')) setLanguage('es');
    else if (path.startsWith('/de')) setLanguage('de');
    else setLanguage('en');

    // 2. Check existing cookie consent
    const match = document.cookie.match(/(^| )cookie-consent=([^;]+)/);
    if (match) setCookieConsent(match[2] === 'true');
  }, []);

  const setConsentCookie = (value) => {
    document.cookie = `cookie-consent=${value}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    setCookieConsent(value === 'true');
  };

  const texts = {
    en: {
      cookieText: 'This website uses cookies to improve your browsing experience.',
      accept: 'Accept',
      reject: 'Reject',
      settings: 'Cookie Settings'
    },
    es: {
      cookieText: 'Este sitio web utiliza cookies para mejorar su experiencia de navegación.',
      accept: 'Aceptar',
      reject: 'Rechazar',
      settings: 'Configuración de Cookies'
    },
    de: {
      cookieText: 'Diese Website verwendet Cookies, um Ihr Surferlebnis zu verbessern.',
      accept: 'Akzeptieren',
      reject: 'Ablehnen',
      settings: 'Cookie-Einstellungen'
    }
  };

  const currentText = texts[language] || texts.en;

  return (
    <>
      <Head>
        <link rel="icon" href="/lemonskn.png" />
        <meta property="og:image" content="https://lemonskn.com/lemonskn-logo-512.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Component {...pageProps} cookieConsent={cookieConsent} />

      {cookieConsent === null && (
        <div style={{
          padding: '1em', backgroundColor: '#222', color: '#fff',
          position: 'fixed', bottom: 0, width: '100%', textAlign: 'center',
          zIndex: 9999, fontSize: '14px'
        }}>
          <span>{currentText.cookieText} </span>
          <div style={{ marginTop: '10px' }}>
            <button onClick={() => setConsentCookie('true')} style={{ margin: '0 8px', padding: '8px 16px', background: '#4CAF50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              {currentText.accept}
            </button>
            <button onClick={() => setConsentCookie('false')} style={{ margin: '0 8px', padding: '8px 16px', background: '#f44336', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              {currentText.reject}
            </button>
          </div>
        </div>
      )}

      {cookieConsent !== null && (
        <div style={{ textAlign: 'center', margin: '2em 0' }}>
          <button onClick={() => setCookieConsent(null)} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            {currentText.settings}
          </button>
        </div>
      )}
    </>
  );
}