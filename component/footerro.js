import Link from 'next/link';

export default function FooterRO() {
  return (
    <footer style={{
      backgroundColor: '#d6ffafff',
      padding: '50px 20px',
      textAlign: 'center',
      color: '#333',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Logo / Brand */}
      <h2 style={{ color: '#003b08ff', marginBottom: '10px' }}>lemonskn RO</h2>
      <p style={{ fontSize: '14px', marginBottom: '25px' }}>
        Ghidul dvs. pentru tendințele de frumusețe și cosmetice din România
      </p>

      {/* Navigation Links */}
      <div style={{ marginBottom: '25px' }}>
        <Link href="/ro/about" style={{ margin: '0 10px', color: '#555', textDecoration: 'none' }}>Despre noi</Link>|
        <Link href="/ro/contact" style={{ margin: '0 10px', color: '#555', textDecoration: 'none' }}>Contact</Link>|
        <Link href="/ro/privacy-policy" style={{ margin: '0 10px', color: '#555', textDecoration: 'none' }}>Politica de confidențialitate</Link>
      </div>

      {/* Social Media Links */}

      {/* Copyright */}
      <div style={{ fontSize: '12px', color: '#aaa' }}>
        © 2025 lemonskn. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
