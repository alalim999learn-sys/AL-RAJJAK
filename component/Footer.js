//C:\Users\Shanon\al-rajjak\component\Footer.js
"use client";

import Link from 'next/link';
import { ShieldCheck, Lock, Terminal } from 'lucide-react';
import { usePathname } from 'next/navigation'; // ফিক্স: App Router এর জন্য usePathname

export default function Footer() {
  const pathname = usePathname(); // ফিক্স: pathname সরাসরি এখান থেকে আসবে

  // ১. ভাষা শনাক্তকরণ
  const isGerman = pathname?.startsWith('/de');
  const isSpanish = pathname?.startsWith('/es');

  // ২. ল্যাঙ্গুয়েজ অনুযায়ী অনুবাদ (আপনার রিনেম করা পাথ অনুযায়ী)
  const translations = {
    en: {
      mission: "Hardening WordPress environments and building secure digital infrastructures.",
      home: "Home",
      about: "About Me",
      legal: "Legal Notice",
      privacy: "Privacy Policy",
      terms: "Terms",
      copyright: "Built with Next.js & Hardened Logic.",
      aboutUrl: "/about"
    },
    de: {
      mission: "Härtung von WordPress-Umgebungen und Aufbau sicherer digitaler Infrastrukturen.",
      home: "Startseite",
      about: "Über mich",
      legal: "Impressum",
      privacy: "Datenschutz",
      terms: "AGB",
      copyright: "Erstellt mit Next.js & Hardened Logic.",
      aboutUrl: "/de/ueber-mich" // আপনার নতুন রিনেম করা পাথ
    },
    es: {
      mission: "Fortalecimiento de entornos WordPress y construcción de infraestructuras digitales seguras.",
      home: "Inicio",
      about: "Sobre mí",
      legal: "Aviso Legal",
      privacy: "Privacidad",
      terms: "Términos",
      copyright: "Creado con Next.js y Lógica Reforzada.",
      aboutUrl: "/es/about"
    }
  };

  const t = isGerman ? translations.de : isSpanish ? translations.es : translations.en;
  const langPrefix = isGerman ? '/de' : isSpanish ? '/es' : '';

  // --- Styles ---
  const footerStyle = {
    backgroundColor: '#0f172a',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '50px 20px',
    textAlign: 'center',
    color: '#94a3b8',
    fontFamily: 'sans-serif'
  };

  const navLinkStyle = {
    margin: '0 10px',
    color: '#94a3b8',
    textDecoration: 'none',
    fontSize: '11px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1.5px'
  };

  const badgeStyle = (color) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '10px',
    fontFamily: 'monospace',
    color: color,
    backgroundColor: `${color}15`,
    padding: '4px 8px',
    borderRadius: '4px',
    border: `1px solid ${color}30`
  });

  return (
    <footer style={footerStyle}>
      {/* Brand & Mission */}
      <div style={{ marginBottom: '30px' }}>
        <div style={{ color: '#ffffff', fontSize: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '5px' }}>
          <ShieldCheck color="#10b981" size={24} />
          LEMONSKN SECURITY
        </div>
        <p style={{ fontSize: '14px', maxWidth: '400px', margin: '0 auto', lineHeight: '1.6' }}>
          {t.mission}
        </p>
      </div>

      {/* Primary Navigation */}
      <div style={{ marginBottom: '20px' }}>
        <Link href={langPrefix || "/"} style={navLinkStyle}>{t.home}</Link>
        <span style={{ color: '#334155' }}>|</span>
        <Link href={t.aboutUrl} style={navLinkStyle}>{t.about}</Link>
      </div>

      {/* Legal Links (German Market Optimized) */}
      <div style={{ marginBottom: '30px', borderTop: '1px solid #1e293b', paddingTop: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
        {isGerman ? (
          <>
            <Link href="/de/impressum" style={navLinkStyle}>{t.legal}</Link>
            <Link href="/de/datenschutz" style={navLinkStyle}>{t.privacy}</Link>
            <Link href="/de/AGB" style={navLinkStyle}>{t.terms}</Link>
          </>
        ) : (
          <>
            <Link href={`${langPrefix}/terms`} style={navLinkStyle}>{t.terms}</Link>
            <Link href={`${langPrefix}/privacy`} style={navLinkStyle}>{t.privacy}</Link>
          </>
        )}
      </div>

      {/* Security Badges */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '20px', opacity: '0.6' }}>
        <div style={badgeStyle('#10b981')}>
          <Lock size={12} /> SSL ENCRYPTED
        </div>
        <div style={badgeStyle('#3b82f6')}>
          <Terminal size={12} /> HARDENED LOGIC
        </div>
      </div>

      {/* Copyright */}
      <div style={{ fontSize: '11px', color: '#475569', fontFamily: 'monospace', textTransform: 'uppercase' }}>
        © 2026 {t.copyright}
      </div>
    </footer>
  );
}