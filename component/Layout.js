//C:\Users\Shanon\al-rajjak\component\Layout.js
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from './Footer';

export default function Layout({ children }) {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [langCode, setLangCode] = useState('en');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const path = window.location.pathname;
    const handleScroll = () => setHasShadow(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);

    // ১. ভাষা শনাক্তকরণ (Path Based)
    let currentLang = 'en';
    if (path.startsWith('/es')) {
      currentLang = 'es';
    } else if (path.startsWith('/de')) {
      currentLang = 'de';
    }
    setLangCode(currentLang);

    // ২. সিকিউরিটি কুকি সেটআপ (সেশন ম্যানেজমেন্ট)
    const cookieName = `ls_sec_${currentLang}`;
    const cookieValue = `security_active_${currentLang}`;
    if (!document.cookie.includes(cookieName)) {
      document.cookie = `${cookieName}=${cookieValue}; path=/; max-age=86400; SameSite=Strict; Secure`;
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ৩. মেনু ডাটা (আপনার নতুন ফাইল স্ট্রাকচার অনুযায়ী)
  const menuData = {
    en: {
      home: "Terminal (Home)", homeUrl: "/",
      about: "About Me", aboutUrl: "/about",
      terms: "Terms & Conditions", termsUrl: "/terms",
      ver: "VER: 2.0.1-STABLE"
    },
    es: {
      home: "Terminal (Inicio)", homeUrl: "/es",
      about: "Sobre mí", aboutUrl: "/es/about",
      terms: "Términos y Condiciones", termsUrl: "/es/terms",
      ver: "VER: 2.0.1-ESTABLE"
    },
    de: {
      home: "Terminal (Home)", homeUrl: "/de",
      about: "Über mich", aboutUrl: "/de/ueber-mich", // রিনেম করা পাথ
      legal: "Impressum", legalUrl: "/de/impressum",
      privacy: "Datenschutz", privacyUrl: "/de/datenschutz",
      terms: "AGB", termsUrl: "/de/AGB",
      ver: "VER: 2.0.1-STABIL"
    }
  };

  const currentMenu = menuData[langCode];

  const openSidebar = () => setSidebarActive(true);
  const closeSidebar = () => setSidebarActive(false);

  // হাইড্রেশন এরর এড়াতে মাউন্ট হওয়ার আগে কিছুই রেন্ডার হবে না
  if (!isMounted) return null;

  // --- Styles ---
  const headerStyle = {
    position: 'fixed', top: 0, width: '100%', height: '60px',
    backgroundColor: '#0f172a', display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', padding: '0 20px',
    boxShadow: hasShadow ? '0 4px 20px rgba(0,0,0,0.4)' : 'none',
    borderBottom: '1px solid rgba(255,255,255,0.05)', zIndex: 1000, transition: 'all 0.3s'
  };

  const sidebarStyle = {
    position: 'fixed', top: 0, left: sidebarActive ? 0 : '-280px',
    width: '280px', height: '100%', backgroundColor: '#1e293b',
    zIndex: 2000, transition: 'left 0.3s ease', padding: '40px 20px',
    boxShadow: '10px 0 30px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column'
  };

  const navLinkStyle = {
    display: 'block', padding: '12px 0', color: '#cbd5e1',
    textDecoration: 'none', fontSize: '15px', fontWeight: '500',
    borderBottom: '1px solid rgba(255,255,255,0.03)', transition: 'color 0.2s'
  };

  const overlayStyle = {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', zIndex: 1500
  };

  return (
    <>
      <header style={headerStyle}>
        <button onClick={openSidebar} aria-label="Menu" style={{ background: 'none', border: 'none', color: '#10b981', fontSize: '24px', cursor: 'pointer' }}>
          &#9776;
        </button>
        <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '18px', letterSpacing: '1px' }}>
          LEMONSKN SECURITY
        </div>
        <div style={{ width: '24px' }}></div>
      </header>

      <nav style={sidebarStyle}>
        <button onClick={closeSidebar} aria-label="Close" style={{ alignSelf: 'flex-end', background: 'none', border: 'none', color: '#ef4444', fontSize: '30px', cursor: 'pointer', marginBottom: '30px' }}>
          &times;
        </button>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link href={currentMenu.homeUrl} style={navLinkStyle} onClick={closeSidebar}>{currentMenu.home}</Link></li>
          <li><Link href={currentMenu.aboutUrl} style={navLinkStyle} onClick={closeSidebar}>{currentMenu.about}</Link></li>
          
          {/* জার্মান পেজগুলোর জন্য কন্ডিশনাল লিঙ্ক (Impressum, Datenschutz, AGB) */}
          {langCode === 'de' && (
            <>
              <li><Link href={currentMenu.legalUrl} style={navLinkStyle} onClick={closeSidebar}>{currentMenu.legal}</Link></li>
              <li><Link href={currentMenu.privacyUrl} style={navLinkStyle} onClick={closeSidebar}>{currentMenu.privacy}</Link></li>
            </>
          )}
          
          <li><Link href={currentMenu.termsUrl} style={navLinkStyle} onClick={closeSidebar}>{currentMenu.terms}</Link></li>
        </ul>

        {/* ল্যাঙ্গুয়েজ সুইচার */}
        <div style={{ marginTop: '20px', display: 'flex', gap: '15px', borderTop: '1px solid #334155', paddingTop: '15px' }}>
            <Link href="/" style={{fontSize: '12px', color: '#10b981', textDecoration: 'none', fontWeight: 'bold'}}>EN</Link>
            <Link href="/es" style={{fontSize: '12px', color: '#10b981', textDecoration: 'none', fontWeight: 'bold'}}>ES</Link>
            <Link href="/de" style={{fontSize: '12px', color: '#10b981', textDecoration: 'none', fontWeight: 'bold'}}>DE</Link>
        </div>

        <div style={{ marginTop: 'auto', color: '#475569', fontSize: '11px', textAlign: 'center', fontFamily: 'monospace' }}>
          {currentMenu.ver}
        </div>
      </nav>

      {sidebarActive && <div style={overlayStyle} onClick={closeSidebar} />}

      <main style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: '#0f172a' }}>
        {children}
      </main>

      <Footer />
    </>
  );
}