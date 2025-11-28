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
      <h1 style={{ color: '#003b08ff', marginBottom: '10px' }}>lemonskn </h1>
 <p style={{ fontSize: '14px', marginBottom: '25px' }}>
  Your guide to Lithuanian cosmetics and beauty trends
</p>

{/* Navigation Links */}
<div style={{ marginBottom: '25px' }}>
  <Link href="/lt/about" style={{ margin: '0 10px', color: '#555', textDecoration: 'none' }}>About</Link>|
  <Link href="/contact" style={{ margin: '0 10px', color: '#555', textDecoration: 'none' }}>Contact</Link>|
  <Link href="/privacy-policy" style={{ margin: '0 10px', color: '#555', textDecoration: 'none' }}>Privacy Policy</Link>
</div>

{/* Social Media Links */}
{/* Add icons or links here when ready */}

{/* Copyright */}
<div style={{ fontSize: '12px', color: '#aaa' }}>
  © 2025 lemonskn. All rights reserved.
</div>


    </footer>
  );
}
