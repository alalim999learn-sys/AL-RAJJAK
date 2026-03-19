//C:\Users\Shanon\al-rajjak\pages\privacy-policy.js
import Layout from '../component/Layout';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div style={{ padding: '40px', color: '#cbd5e1', maxWidth: '900px', margin: 'auto', lineHeight: '1.8' }}>
        <h1 style={{ color: '#10b981', borderBottom: '1px solid #334155', paddingBottom: '10px' }}>Privacy Policy</h1>
        <p style={{ fontStyle: 'italic', fontSize: '14px' }}>Effective Date: March 18, 2026</p>

        <section style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#fff', fontSize: '20px' }}>1. Our Commitment to Data Sovereignty</h2>
          <p>
            At <strong>lemonskn SECURITY</strong>, we operate with a "Security First" mindset. This portfolio 
            is designed to provide information without compromising your digital footprint. We do not track, 
            sell, or profile our visitors for marketing purposes.
          </p>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#fff', fontSize: '20px' }}>2. Zero Data Collection (No Contact Forms)</h2>
          <p>
            To ensure the highest level of security and to comply with global privacy standards (GDPR/DSGVO), 
            <strong>this website does not utilize contact forms</strong>. We do not collect your name, email address, 
            or any personal identifiers through this site. For all professional inquiries, please connect 
            via our verified <strong>LinkedIn</strong> or <strong>Facebook</strong> links.
          </p>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#fff', fontSize: '20px' }}>3. Font Privacy (Google-Fonts-Free)</h2>
          <p>
            This website is <strong>100% Google-Fonts-free</strong>. We do not load external typography 
            from third-party servers. All fonts are rendered locally from your system, preventing unauthorized 
            IP tracking by external providers. This ensures complete privacy and faster loading speeds.
          </p>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#fff', fontSize: '20px' }}>4. Technical Security Cookies</h2>
          <p>
            We use a single "Strictly Necessary" technical cookie (e.g., <code>ls_sec_en</code>) to maintain 
            the integrity of the system and prevent malicious activity. This cookie does not track your 
            behavior across other sites and is automatically managed by your browser.
          </p>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#fff', fontSize: '20px' }}>5. Third-Party Redirection</h2>
          <p>
            Links to external social media platforms (LinkedIn, Facebook) are provided for secure communication. 
            Once you leave <strong>lemonskn.com</strong>, the privacy policies of those respective 
            platforms will apply.
          </p>
        </section>

        <section style={{ marginTop: '40px', borderTop: '1px solid #334155', paddingTop: '20px', textAlign: 'center' }}>
          <p style={{ color: '#475569', fontSize: '13px' }}>
            Built for Secure Systems. Verified GDPR/DSGVO Standards.
          </p>
        </section>
      </div>
    </Layout>
  );
}