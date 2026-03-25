//C:\Users\Shanon\al-rajjak\component\Footer.js
"use client";

import Link from 'next/link';
import { ShieldCheck, Lock, Terminal } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  // ১. ভাষা শনাক্তকরণ
  const isGerman = pathname?.startsWith('/de');
  const isSpanish = pathname?.startsWith('/es');

  // ২. ল্যাঙ্গুয়েজ অনুযায়ী অনুবাদ এবং সঠিক পাথ কনফিগারেশন
  const translations = {
    en: {
      mission: "Hardening WordPress environments and building secure digital infrastructures.",
      home: "Home",
      about: "About Me",
      legal: "Legal Notice",
      privacy: "Privacy Policy",
      terms: "Terms",
      copyright: "Built with Next.js & Hardened Logic.",
      homeUrl: "/",
      aboutUrl: "/about",
      legalUrl: "/impressum",
      privacyUrl: "/privacy-policy",
      termsUrl: "/terms"
    },
    de: {
      mission: "Härtung von WordPress-Umgebungen und Aufbau sicherer digitaler Infrastrukturen.",
      home: "Startseite",
      about: "Über mich",
      legal: "Impressum",
      privacy: "Datenschutz",
      terms: "AGB",
      copyright: "Erstellt mit Next.js & Hardened Logic.",
      homeUrl: "/de",
      aboutUrl: "/de/ueber-mich",
      legalUrl: "/de/impressum",
      privacyUrl: "/de/datenschutz",
      termsUrl: "/de/agb"
    },
    es: {
      mission: "Fortalecimiento de entornos WordPress y construcción de infraestructuras digitales seguras.",
      home: "Inicio",
      about: "Sobre mí",
      legal: "Aviso Legal",
      privacy: "Privacidad",
      terms: "Términos",
      copyright: "Creado con Next.js y Lógica Reforzada.",
      homeUrl: "/es",
      aboutUrl: "/es/sobre-me",
      legalUrl: "/es/aviso-legal",
      privacyUrl: "/es/política-de-privacidad",
      termsUrl: "/es/terminos" // যদি terminos.js ফাইল থাকে
    }
  };

  // বর্তমান ভাষা নির্বাচন
  const t = isGerman ? translations.de : isSpanish ? translations.es : translations.en;

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

      {/* Primary Navigation (Home & About) */}
      <div style={{ marginBottom: '20px' }}>
        <Link href={t.homeUrl} style={navLinkStyle}>{t.home}</Link>
        <span style={{ color: '#334155' }}>|</span>
        <Link href={t.aboutUrl} style={navLinkStyle}>{t.about}</Link>
      </div>

      {/* Legal Links - আপনার ফাইল নাম অনুযায়ী ডায়নামিক করা হয়েছে */}
      <div style={{ marginBottom: '30px', borderTop: '1px solid #1e293b', paddingTop: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
        <Link href={t.legalUrl} style={navLinkStyle}>{t.legal}</Link>
        <Link href={t.privacyUrl} style={navLinkStyle}>{t.privacy}</Link>
        <Link href={t.termsUrl} style={navLinkStyle}>{t.terms}</Link>
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