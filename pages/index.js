//C:\Users\Shanon\al-rajjak\pages\index.js

import Head from 'next/head';

import Layout from '../component/Layout';

import {

  ShieldCheck, Lock, Database, Scale, GraduationCap,

  Image as ImageIcon, CheckCircle2, ArrowRight,

  Linkedin, UserCheck, ShieldPlus

} from 'lucide-react';



export default function HomeEnglish() {

  return (

    <Layout>

      <div className="page-wrapper">

        <Head>

          <title>Lemonskn SECURITY | Shanon Khan - EU-Standard Web Security</title>

          <meta name="description" content="Lemonskn SECURITY: 39-Point WordPress Hardening for SMEs. GDPR-compliant protection by Shanon Khan." />

        </Head>



        <main className="main-content">

          {/* --- Hero Section --- */}

          <section className="hero">

            <div className="status-badge">Available for Projects in UK, US & EU</div>

            <h1>Elite Security for the Global <span className="accent">Market</span>....</h1>

           

            <div className="expert-intro">

              <UserCheck size={20} color="#059669" />

              <p>I am <strong>Shanon Khan</strong> — Your Personal Security Expert. Not an anonymous agency, but a direct partner for your IT security needs.</p>

            </div>



            <p className="hero-sub">I build digital fortresses for businesses through industrial security standards and high-performance applications.</p>

           

            <div className="brand-tagline">

              <ShieldPlus size={18} color="#0070f3" />

              <span><strong>Lemonskn SECURITY:</strong> Where Engineering meets international GDPR standards.</span>

            </div>



            <div className="hero-edu">

              <GraduationCap size={18} />

              <span>Academic Excellence: Dhaka College (Chemistry Honours)</span>

            </div>

          </section>



          {/* --- Trust Indicator Bar --- */}

          <section className="trust-indicator">

            <div className="trust-item"><CheckCircle2 size={16} color="#059669" /> GDPR Compliant</div>

            <div className="trust-item"><CheckCircle2 size={16} color="#059669" /> EU Legal Certainty</div>

            <div className="trust-item"><CheckCircle2 size={16} color="#059669" /> No-Backdoor Guarantee</div>

          </section>



          {/* --- Agency vs Expert Section --- */}

          <section className="expert-vs-agency">

            <div className="comparison-box">

              <div className="comp-header">

                <h2>Why a <span className="highlight">Personal Expert?</span></h2>

                <p>Large agencies often charge premium prices for standard work handled by juniors. With me, you work directly with the engineer.</p>

              </div>



              <div className="comp-grid">

                <div className="comp-card agency">

                  <h4>Traditional Agencies</h4>

                  <ul>

                    <li>❌ High overhead & hidden fees</li>

                    <li>❌ Juniors handle critical tasks</li>

                    <li>❌ Slow support tickets</li>

                    <li>❌ "Standard" security plugins</li>

                  </ul>

                </div>



                <div className="comp-card expert">

                  <h4>Shanon (Your Expert)</h4>

                  <ul>

                    <li>✅ Direct contact with the engineer</li>

                    <li>✅ Senior-level execution of every task</li>

                    <li>✅ Transparent fixed-price audits</li>

                    <li>✅ Proprietary 39-point hardening protocol</li>

                  </ul>

                </div>

              </div>

            </div>

          </section>



          {/* --- Visual Gallery --- */}

          <section className="gallery-section">

            <div className="section-title">

              <h2><ImageIcon size={22} /> Engineering Showcase</h2>

              <p>Visual proof of 100/100 security scores and server lockdowns.</p>

            </div>

           

            <div className="bento-grid">

              <div className="bento-item img-1">

                <img src="/rijk1.png" alt="Architecture Analysis" />

                <span className="img-caption">100% Audit Success</span>

              </div>

              <div className="bento-item img-2">

                <img src="/rijk2.png" alt="Server Firewall" />

                <span className="img-caption">Firewall Logic</span>

              </div>

              <img src="/rijk3.png" alt="Security Protocol" className="img-3" />

              <img src="/img1.png" alt="Vulnerability Audit" className="img-4" />

              <img src="/img2.png" alt="Malware Removal" className="img-5" />

            </div>

          </section>



          {/* --- 39-Point Framework --- */}

          <section className="technical-proof">

            <div className="proof-header">

              <span className="badge-small">The Methodology</span>

              <h2>The 39-Point <span className="highlight">Hardening Framework</span></h2>

              <p>I don't just install plugins. I rewrite your site's defense logic in 39 rigorous steps.</p>

            </div>



            <div className="proof-content">

              <div className="proof-column">

                <div className="col-header"><Lock size={20} color="#0070f3" /><h3>01. System Lockdown</h3></div>

                <ul>

                  <li><CheckCircle2 size={16} className="check-icon" /> <div><strong>XML-RPC Protection:</strong> <span>Blocks 90% of bot attacks (stops Brute-Force).</span></div></li>

                  <li><CheckCircle2 size={16} className="check-icon" /> <div><strong>Config Hardening:</strong> <span>Locks core files against unauthorized code changes.</span></div></li>

                  <li><CheckCircle2 size={16} className="check-icon" /> <div><strong>Footprint Hiding:</strong> <span>Makes your site invisible to automated hacker scans.</span></div></li>

                </ul>

              </div>



              <div className="proof-column">

                <div className="col-header"><Database size={20} color="#0070f3" /><h3>02. Data Protection</h3></div>

                <ul>

                  <li><CheckCircle2 size={16} className="check-icon" /> <div><strong>Prefix Mutation:</strong> <span>Changes DB structures so hackers cannot find them.</span></div></li>

                  <li><CheckCircle2 size={16} className="check-icon" /> <div><strong>API Restriction:</strong> <span>Prevents bots from scraping customer data.</span></div></li>

                  <li><CheckCircle2 size={16} className="check-icon" /> <div><strong>Parameter Scrubbing:</strong> <span>Filters malicious links before they hit the server.</span></div></li>

                </ul>

              </div>



              <div className="proof-column">

                <div className="col-header"><Scale size={20} color="#0070f3" /><h3>03. Legal Security</h3></div>

                <ul>

                  <li><CheckCircle2 size={16} className="check-icon" /> <div><strong>IP Masking:</strong> <span>Protects you from high GDPR privacy fines.</span></div></li>

                  <li><CheckCircle2 size={16} className="check-icon" /> <div><strong>HSTS Encryption:</strong> <span>Forces permanently secure browser connections.</span></div></li>

                  <li><CheckCircle2 size={16} className="check-icon" /> <div><strong>Font Localization:</strong> <span>Removes external tracking (Crucial for legal compliance).</span></div></li>

                </ul>

              </div>

            </div>

          </section>



          {/* --- Direct CTA Section --- */}

     



          {/* --- Footer & Social --- */}

          <section className="footer-simple">

            <div className="social-connect">

           

              <a href="https://www.linkedin.com/in/shanon-khan-52852a283/" target="_blank" className="linkedin-link" rel="noreferrer">

                <Linkedin size={20} /> Connect with Shanon Khan

              </a>

            </div>

          </section>

        </main>



        <style jsx>{`

          .page-wrapper { background: #ffffff; color: #1a1a1a; min-height: 100vh; font-family: 'Inter', sans-serif; padding-bottom: 5rem; }

          .main-content { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; }

          .hero { padding: 8rem 0 3rem; text-align: center; }

          h1 { font-size: 3.5rem; font-weight: 850; letter-spacing: -0.04em; line-height: 1.1; margin-bottom: 1.5rem; }

          .accent { color: #0070f3; }

          .status-badge { display: inline-block; background: #eff6ff; color: #0070f3; padding: 6px 14px; border-radius: 100px; font-size: 0.8rem; font-weight: 800; margin-bottom: 2rem; border: 1px solid #dbeafe; }

          .expert-intro { display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 1.5rem; color: #1e293b; background: #f0fdf4; border: 1px solid #dcfce7; padding: 10px 20px; border-radius: 12px; font-size: 1rem; }

          .hero-sub { font-size: 1.25rem; color: #4b5563; max-width: 600px; margin: 0 auto 2rem; }

          .brand-tagline { display: inline-flex; align-items: center; gap: 10px; background: #f8fafc; padding: 12px 20px; border-radius: 12px; margin-bottom: 2rem; border: 1px solid #e2e8f0; font-size: 0.95rem; }

          .hero-edu { color: #9ca3af; font-size: 0.9rem; display: flex; align-items: center; justify-content: center; gap: 8px; }

          .trust-indicator { display: flex; justify-content: center; gap: 3rem; padding: 2rem 0; border-top: 1px solid #f1f5f9; border-bottom: 1px solid #f1f5f9; }

          .trust-item { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; font-weight: 700; color: #475569; }

          .expert-vs-agency { padding: 4rem 0; }

          .comparison-box { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 32px; padding: 4rem 2rem; }

          .comp-header { text-align: center; margin-bottom: 3rem; }

          .comp-header h2 { font-size: 2.2rem; font-weight: 850; }

          .comp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }

          .comp-card { padding: 2.5rem; border-radius: 24px; }

          .agency { background: #f8fafc; border: 1px solid #e2e8f0; }

          .expert { background: #111; color: #fff; border: 1px solid #0070f3; box-shadow: 0 20px 40px rgba(0,112,243,0.1); }

          .comp-card h4 { font-size: 1.3rem; margin-bottom: 1.5rem; }

          .comp-card ul { list-style: none; padding: 0; }

          .comp-card li { margin-bottom: 1rem; font-size: 1rem; display: flex; align-items: center; gap: 10px; }

          .highlight { color: #0070f3; }

          .gallery-section { padding: 6rem 0; }

          .section-title { text-align: center; margin-bottom: 3rem; }

          .section-title h2 { font-size: 2rem; font-weight: 850; display: flex; align-items: center; justify-content: center; gap: 10px; }

          .bento-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }

          .bento-item { position: relative; overflow: hidden; border-radius: 16px; border: 1px solid #e2e8f0; }

          .bento-grid img { width: 100%; height: 100%; object-fit: cover; transition: 0.3s; }

          .img-caption { position: absolute; bottom: 10px; left: 10px; background: rgba(0,0,0,0.7); color: #fff; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; }

          .img-1 { grid-column: span 2; height: 300px; } .img-2 { grid-column: span 2; height: 300px; }

          .img-3, .img-4, .img-5 { height: 200px; border-radius: 16px; border: 1px solid #e2e8f0; object-fit: cover; }

          .technical-proof { padding: 5rem 2.5rem; background: #f8fafc; border-radius: 32px; border: 1px solid #e2e8f0; margin: 4rem 0; }

          .proof-header { text-align: center; margin-bottom: 4rem; }

          .badge-small { font-size: 0.75rem; font-weight: 800; color: #0070f3; background: #eff6ff; padding: 5px 12px; border-radius: 6px; text-transform: uppercase; }

          .proof-content { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2.5rem; }

          .col-header { display: flex; align-items: center; gap: 10px; margin-bottom: 1.5rem; }

          .proof-column h3 { font-size: 1.2rem; font-weight: 800; margin: 0; }

          ul { list-style: none; padding: 0; }

          li { display: flex; gap: 12px; margin-bottom: 1.5rem; line-height: 1.5; }

          li strong { display: block; color: #1e293b; font-size: 1rem; }

          li span { font-size: 0.9rem; color: #64748b; }

          .check-icon { margin-top: 4px; flex-shrink: 0; color: #0070f3; }

          .cta-box { background: #111; border-radius: 32px; padding: 5rem 2rem; text-align: center; color: #fff; }

          .main-btn-large { background: #0070f3; color: #fff; padding: 1.5rem 3.5rem; border: none; border-radius: 100px; font-size: 1.25rem; font-weight: 800; cursor: pointer; display: inline-flex; align-items: center; gap: 12px; transition: 0.2s; }

          .main-btn-large:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,112,243,0.3); }

          .footer-simple { text-align: center; border-top: 1px solid #f1f5f9; padding-top: 3rem; }

          .linkedin-link { display: inline-flex; align-items: center; gap: 8px; color: #0077b5; font-weight: 700; text-decoration: none; font-size: 1.1rem; }

          @media (max-width: 768px) {

            h1 { font-size: 2.5rem; }

            .trust-indicator { flex-direction: column; gap: 1rem; align-items: center; }

            .comp-grid { grid-template-columns: 1fr; }

            .bento-grid { grid-template-columns: 1fr; }

            .img-1, .img-2 { grid-column: span 1; height: 200px; }

            .img-3, .img-4, .img-5 { height: 200px; }

            .expert-intro { flex-direction: column; text-align: center; }

          }

        `}</style>

      </div>

    </Layout>

  );

}

elite