// C:\Users\Shanon\al-rajjak\pages\de\AGB.js
import Layout from '../../component/Layout';

const TermsAndConditions = () => {
  const lastUpdated = "March 19, 2026";

  return (
    <Layout>
    <div className="terms-container" style={{ padding: '20px', lineHeight: '1.6', fontFamily: 'sans-serif', maxWidth: '850px', margin: 'auto' }}>
      <h1>General Terms and Conditions (AGB)</h1>
      <p><strong>Last Updated:</strong> {lastUpdated}</p>
      <p><strong>Service Provider:</strong> Shanon Khan </p>
      <p><strong>Address:</strong> East Nakhalpara, Dhaka-1207, Bangladesh</p>

      <hr />

      <section>
        <h2>1. Scope of Services</h2>
        <p>
          These terms apply to all technical professional services provided by Shanon Khan, including:
        </p>
        <ul>
          <li><strong>WordPress Security Hardening:</strong> Implementation of the 39-point security protocol and server-level integrity checks.</li>
          <li><strong>AI Chatbot Development:</strong> Integration of custom AI logic and API deployment.</li>
          <li><strong>Flutter Application Development:</strong> UI/UX design and cross-platform mobile coding.</li>
        </ul>
      </section>

      <section>
        <h2>2. Client Obligations</h2>
        <p>To ensure project success, the client must:</p>
        <ul>
          <li>Provide necessary administrative access to hosting or dashboards.</li>
          <li><strong>Maintain a full backup</strong> of all data before security hardening or development begins.</li>
          <li>Immediately update all credentials (passwords/API keys) upon project handover.</li>
        </ul>
      </section>

      <section>
        <h2>3. Security & Liability Disclaimer</h2>
        <p>
          As a Security Specialist, I implement high-level hardening protocols. However, 100% immunity against cyberattacks is technically impossible.
        </p>
        <ul>
          <li>I am not liable for data loss or hacking resulting from client-side negligence or third-party plugin vulnerabilities.</li>
          <li>My liability ends upon the successful verification of the 39-point security checklist.</li>
        </ul>
      </section>

      <section>
        <h2>4. Payment Terms</h2>
        <p>
          Standard payment structure is 50% upfront as a non-refundable commencement fee, and 50% upon project completion.
        </p>
      </section>

      {/* --- Merged Refund & Withdrawal Policy --- */}
      <section style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #10b981', marginTop: '30px' }}>
        <h2 style={{ marginTop: '0' }}>5. Refund & Right of Withdrawal (Widerrufsbelehrung)</h2>
        <p>
          According to <strong>Section 356 (4) BGB (German Civil Code)</strong> and EU consumer laws regarding highly customized digital services:
        </p>
        <ul style={{ color: '#334155' }}>
          <li style={{ marginBottom: '10px' }}>
            <strong>Expiration of Withdrawal:</strong> The client acknowledges that the right of withdrawal expires once the technical execution (e.g., security hardening or custom coding) has begun with the client’s express consent.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Non-Refundable Deposit:</strong> The 50% upfront payment is a reservation fee for technical resources and time, and is <strong>non-refundable</strong>.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Completed Works:</strong> Once the 39-point security checklist is verified or the Flutter app build is delivered, refunds are excluded.
          </li>
          <li>
            <strong>Quality Assurance:</strong> Technical defects reported within 7 days post-completion will be fixed at no extra cost, but do not constitute grounds for a refund.
          </li>
        </ul>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>6. Governing Law</h2>
        <p>
          These terms are governed by the laws of <strong>Bangladesh</strong> and applicable international digital service standards. Any disputes shall be settled under the jurisdiction of courts in Dhaka, Bangladesh.
        </p>
      </section>

      <footer style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px', fontSize: '0.9em', color: '#666', textAlign: 'center' }}>
        <p>&copy; 2026 Shanon Khan | Akinji Security Lab | lemonskn.com</p>
      </footer>
    </div>
    </Layout>
  );
};

export default TermsAndConditions;