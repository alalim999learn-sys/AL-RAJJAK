// components/FooterLT.js
import Link from 'next/link';

export default function FooterLT() {
  return (
    <footer style={{
      backgroundColor: '#d6ffafff',
      padding: '50px 20px',
      textAlign: 'center',
      color: '#333',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Logo / Brand */}
      <h2 style={{ color: '#003b08ff', marginBottom: '10px' }}>lemonskn LT</h2>
      <p style={{ fontSize: '14px', marginBottom: '25px' }}>
        Jūsų vadovas Lietuvos kosmetikos ir grožio tendencijoms
      </p>

      {/* Navigation Links */}
      <div style={{ marginBottom: '25px' }}>
        <Link href="/about" style={{ margin: '0 10px', color: '#555', textDecoration: 'none' }}>Apie</Link>|
        <Link href="/contact" style={{ margin: '0 10px', color: '#555', textDecoration: 'none' }}>Kontaktai</Link>|
        <Link href="/privacy-policy" style={{ margin: '0 10px', color: '#555', textDecoration: 'none' }}>Privatumo politika</Link>
      </div>

      {/* Social Media Links */}

      {/* Copyright */}
      <div style={{ fontSize: '12px', color: '#aaa' }}>
        © 2025 lemonskn. Visos teisės saugomos.
      </div>
    </footer>
  );
}
