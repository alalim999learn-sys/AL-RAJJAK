import Head from 'next/head';
import '../src/styles/globals.css';

import Script from 'next/script';

// pages/_app.js
import { useEffect, useState } from 'react';


function MyApp({ Component, pageProps }) {
  const [cookieConsent, setCookieConsent] = useState(null);

  useEffect(() => {
    // Check if consent cookie exists
    const match = document.cookie.match(new RegExp('(^| )cookie-consent=([^;]+)'));
    if (match) {
      setCookieConsent(match[2] === 'true');
    }
  }, []);

  const acceptCookies = () => {
    document.cookie = 'cookie-consent=true; path=/; max-age=' + 60 * 60 * 24 * 365; // 1 year
    setCookieConsent(true);
  };

  const rejectCookies = () => {
    document.cookie = 'cookie-consent=false; path=/; max-age=' + 60 * 60 * 24 * 365;
    setCookieConsent(false);
  };

  return (
    <>
       <Head>
        {/* Favicon */}
        <link rel="icon" href="/lemonskn.png" />
        {/* Organization JSON-LD for all pages */}
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

      {/* Cookie Banner */}
      {cookieConsent === null && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: '#222',
          color: '#fff',
          padding: '1em',
          textAlign: 'center',
          zIndex: 9999,
        }}>
          <span>Ši svetainė naudoja slapukus, kad pagerintų jūsų patirtį. </span>
          <button 


          onClick={acceptCookies} style={{ marginLeft: '10px',padding: "1%", }}>Priimti</button>
          <button onClick={rejectCookies} style={{ marginLeft: '10px',padding: "1%",  }}>Atmesti </button>
        </div>

      )}

      {/* App Component */}
      <Component {...pageProps} cookieConsent={cookieConsent} />

      {/* Optional: Footer for changing settings */}
      {cookieConsent !== null && (
        <footer style={{ textAlign: 'center', padding: '1em', fontSize: '14px' }}>
        
          <button
  onClick={() => {
    document.cookie = 'cookie-consent=; Max-Age=0; path=/';
    window.location.reload();
  }}
  style={{
    backgroundColor: '#4CAF50', // green background
    color: 'white',             // white text
    padding: '10px 20px',       // top-bottom 10px, left-right 20px
    border: 'none',             // no border
    borderRadius: '5px',        // rounded corners
    cursor: 'pointer',          // pointer on hover
    fontSize: '16px',           // text size
    fontWeight: 'bold',         // bold text
    transition: 'background-color 0.3s' // smooth hover effect
  }}
  onMouseOver={e => e.currentTarget.style.backgroundColor = '#45a049'}
  onMouseOut={e => e.currentTarget.style.backgroundColor = '#4CAF50'}
>
  Slapukų nustatymai
</button>

        </footer>
      )}
    </>
  );
}

export default MyApp;
