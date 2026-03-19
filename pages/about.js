import Layout from '../component/Layout';
import Head from 'next/head';

export default function TermsEnglish() {
  const lastUpdated = "March 19, 2026";

  return (
    <Layout>
      <Head>
        <title>Terms & Conditions | Lemonskn SECURITY</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div style={{ padding: '40px', color: '#cbd5e1', maxWidth: '900px', margin: 'auto', lineHeight: '1.8', fontFamily: 'sans-serif' }}>
        <h1 style={{ color: '#10b981', borderBottom: '1px solid #334155', paddingBottom: '10px' }}>General Terms and Conditions</h1>
        <p style={{ fontStyle: 'italic', fontSize: '14px' }}>Last Updated: {lastUpdated}</p>

        <section style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#fff', fontSize: '20px' }}>1. Scope of Services</h2>
          <p>
            Shanon Khan (Lemonskn SECURITY) provides specialized technical services including:
          </p>
          <ul>
            <li><strong>WordPress Security Hardening:</strong> Implementation of a proprietary 39-point protocol.</li>
            <li><strong>Malware Remediation:</strong> Identification and removal of malicious code.</li>
            <li><strong>Application Development:</strong> Custom Flutter and Next.js development.</li>
          </ul>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#fff', fontSize: '20px' }}>2. Client Responsibilities</h2>
          <p>
            To perform security audits or development, the client must provide necessary administrative access. 
            <strong> Essential:</strong> The client is responsible for creating a full backup of all data before any technical work begins. Lemonskn SECURITY is not liable for data loss occurring due to existing system instabilities.
          </p>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#fff', fontSize: '20px' }}>3. Security Disclaimer</h2>
          <p>
            While my 39-point protocol significantly reduces attack surfaces, in the field of cybersecurity, 100% immunity is technically impossible. 
            My liability is limited to the professional execution of the agreed-upon security measures. I am not liable for damages caused by zero-day exploits or third-party hardware failures.
          </p>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#fff', fontSize: '20px' }}>4. Payment & Refund Policy</h2>
          <p>
            Services are billed as fixed-price projects or hourly rates. 
            <strong> Refund Policy:</strong> As these are highly customized digital services (Section 356 (4) BGB / EU Consumer Law), the right of withdrawal expires once the technical execution has started with the client's consent. Deposits are non-refundable.
          </p>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#fff', fontSize: '20px' }}>5. Legal Jurisdiction</h2>
          <p>
            The primary legal framework for services is the law of <strong>Bangladesh</strong>. For European clients, relevant EU consumer protection standards are respected where applicable.
          </p>
        </section>

        <footer style={{ marginTop: '50px', borderTop: '1px solid #334155', paddingTop: '20px', textAlign: 'center', fontSize: '12px', color: '#475569' }}>
          <p>© 2026 lemonskn.com | Shanon Khan - Dhaka, Bangladesh</p>
        </footer>
      </div>
    </Layout>
  );
}