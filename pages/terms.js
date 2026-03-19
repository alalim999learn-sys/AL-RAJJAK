//C:\Users\Shanon\al-rajjak\pages\terms.js

import Layout from '../component/Layout';
const TermsAndConditions = () => {
  const lastUpdated = "March 19, 2026";
  const companyName = "lemonskn.com"; // You can change this to your legal name

  return (
    <Layout>
    <div className="bg-slate-50 text-slate-900 min-h-screen py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-slate-900 text-white p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 uppercase tracking-wide">
            Terms of Service
          </h1>
          <p className="text-slate-400 font-mono text-sm">
            Effective Date: {lastUpdated} | Version 2.1 (Global Compliance)
          </p>
        </div>

        <div className="p-8 sm:p-12 space-y-12">
          
          {/* 1. Services Overview */}
          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4 text-slate-800">1. Scope of Services</h2>
            <p className="leading-relaxed mb-4 font-medium text-slate-700">
              {companyName} provides specialized digital services including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>WP Sec:</strong> WordPress security auditing, malware removal, and firewall management.</li>
              <li><strong>Flutter Development:</strong> Cross-platform mobile application design and deployment.</li>
              <li><strong>AI Chat Services:</strong> Implementation of LLM-based conversational agents and automated support tools.</li>
            </ul>
          </section>

          {/* 2. AI Compliance (EU AI ACT & USA) */}
          <section className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <h2 className="text-xl font-bold mb-3 text-indigo-900 uppercase text-sm tracking-widest">2. AI Service Disclosure</h2>
            <p className="text-indigo-800 text-sm leading-relaxed">
              In accordance with the <strong>EU AI Act (2026)</strong> and US transparency guidelines, 
              users are hereby notified that our "AI Chat Services" interact using automated synthetic 
              intelligence. We do not guarantee 100% accuracy of AI-generated responses. 
              <strong> Users must not rely on AI output for critical legal, medical, or financial decisions.</strong>
            </p>
          </section>

          {/* 3. Data & Privacy (GDPR/USA) */}
          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4 text-slate-800">3. Data Processing & Privacy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-bold text-slate-700 underline">EU (GDPR) Compliance</h3>
                <p className="text-sm text-slate-600">
                  For EU residents, we act as a <strong>Data Processor</strong>. We implement 
                  Standard Contractual Clauses (SCCs) for any data transfers outside the EEA. 
                  Users retain the "Right to be Forgotten."
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-700 underline">USA Compliance</h3>
                <p className="text-sm text-slate-600">
                  We comply with state-specific laws (CCPA/CPRA). We do not "sell" your 
                  personal information. Our AI systems include safeguards to prevent the 
                  processing of PII (Personally Identifiable Information) unless required.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Security & Liability */}
          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4 text-slate-800">4. Security & Technical Liability</h2>
            <p className="text-slate-600 mb-4">
              While our <strong>WP Sec</strong> services aim to harden your website, no security measure 
              is impenetrable. 
            </p>
            <blockquote className="border-l-4 border-red-200 pl-4 italic text-slate-500 text-sm">
              "We are not liable for data breaches, loss of revenue, or site downtime resulting from 
              zero-day vulnerabilities, third-party plugin exploits, or user-side credential leaks."
            </blockquote>
          </section>

          {/* 5. Payments & Termination */}
          <section>
            <h2 className="text-2xl font-bold border-b pb-2 mb-4 text-slate-800">5. Subscription & Cancellation</h2>
            <p className="text-slate-600">
              Service fees are billed monthly or annually. Under EU law, consumers have a 14-day 
              right of withdrawal, <strong>unless</strong> service performance has begun with 
              prior express consent (e.g., immediate malware removal or code deployment).
            </p>
          </section>

          {/* Footer Contact */}
          <div className="mt-12 pt-8 border-t text-center">
            <p className="text-slate-500 mb-2 font-semibold">Questions regarding these terms?</p>
            <a 
              href="mailto:shanonkhan47@gmail.com" 
              className="px-6 py-3 bg-slate-900 text-white rounded-full inline-block hover:bg-slate-700 transition"
            >
              Contact Legal Dept
            </a>
          </div>
        </div>
      </div>
      
      <p className="text-center text-slate-400 mt-8 text-xs italic">
        This document is for informational purposes and does not constitute formal legal advice.
      </p>
    </div>
    </Layout>
  );
};

export default TermsAndConditions;