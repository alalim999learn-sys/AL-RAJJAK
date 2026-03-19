//C:\Users\Shanon\al-rajjak\pages\de\index.js

import Head from 'next/head';
import Layout from '../../component/Layout';
import { 
  ShieldCheck, Lock, Database, ShieldPlus, 
  ArrowRight, Linkedin, Award, Check
} from 'lucide-react';

export default function ModernHomeDE() {
  return (
    <Layout>
      <div className="modern-container">
        <Head>
          <title>Shanon Khan | Elite Security Specialist</title>
        </Head>

        {/* --- 1. HERO SECTION (Text Left, Image Right) --- */}
        <section className="hero-split">
          <div className="hero-content">
            <div className="status-pill">
              <span className="dot"></span> Verfügbar für EU & USA Projekte
            </div>
            <h1 className="hero-title">
              Digitale <span className="gradient-text">Festungen</span> für Ihr Business.
            </h1>
            <p className="hero-desc">
              Ich bin <strong>Shanon Khan</strong>. Ich baue keine gewöhnlichen Websites – ich entwickle hochsichere, performante digitale Erlebnisse mit meinem <strong>39-Punkte-Härtungsprotokoll</strong>.
            </p>
            {/* --- HERO BUTTONS - CLEAN & PROFESSIONAL --- */}
<div className="hero-btns">
  {/* Primary Button: Email Audit */}
  <a href="mailto:shanonkhan47@gmail.com" className="btn-primary">
    <ShieldCheck size={18} /> Kostenloses Audit
  </a>

  {/* Secondary Button: Facebook Support (With Icon) */}
  <a href="https://www.facebook.com/profile.php?id=100074640281202" target="_blank" className="btn-secondary">
    <svg size={18} viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{marginRight: '8px'}}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg> 
    Facebook Support
  </a>
</div>
          </div>

          <div className="hero-image-container">
            <div className="image-blob">
              <img src="/shanon-99.png" alt="Shanon Khan" className="profile-img" />
            </div>
            {/* Floating Trust Badge */}
            <div className="floating-badge">
              <Award size={20} color="#10b981" />
              <span>Cybersecurity-Experte</span>
            </div>
          </div>
        </section>

        {/* --- 2. STATS BAR --- */}
        <section className="stats-bar">
          <div className="stat-item">
            <h3>39+</h3>
            <p>Sicherheitsschritte</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>DSGVO Konform</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Direkter Support</p>
          </div>
        </section>

        {/* --- 3. CORE SERVICES (Modern Cards) --- */}
        <section className="services-grid">
          <div className="service-card">
            <div className="icon-box blue"><Lock /></div>
            <h3>WordPress Härtung</h3>
            <p>Vollständiger Schutz gegen Brute-Force, SQL-Injections und Malware-Angriffe.</p>
          </div>
          <div className="service-card">
            <div className="icon-box green"><ShieldPlus /></div>
            <h3>DSGVO Sicherheit</h3>
            <p>Lokale Google Fonts, IP-Anonymisierung und rechtssichere Konfiguration.</p>
          </div>
          <div className="service-card">
            <div className="icon-box purple"><Database /></div>
            <h3>Custom App Dev</h3>
            <p>Entwicklung von sicheren Flutter & Next.js Anwendungen für moderne Unternehmen.</p>
          </div>
        </section>

        {/* --- 4. THE "EXISTENCE" PROOF (Why Me?) --- */}
        <section className="why-me">
          <div className="why-content">
            <h2>Warum direkt mit mir arbeiten?</h2>
            <p>Keine anonymen Agenturen, kein Junior-Personal. Sie erhalten Ingenieurskunst auf höchstem Niveau.</p>
            <ul className="trust-list">
              <li><Check size={18} className="check-green"/> Direkte Kommunikation (Keine Tickets)</li>
              <li><Check size={18} className="check-green"/> Akademische Präzision (Dhaka College)</li>
              <li><Check size={18} className="check-green"/> Transparente Festpreise</li>
            </ul>
          </div>
        </section>

        <style jsx>{`
          .modern-container {
            background: #ffffff;
            color: #0f172a;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
          }

          /* Hero Split Styling */
          .hero-split {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10rem 5% 5rem;
            max-width: 1200px;
            margin: 0 auto;
            gap: 50px;
          }

          .hero-content { flex: 1.2; }
          .hero-image-container { 
            flex: 0.8; 
            position: relative;
            display: flex;
            justify-content: center;
          }

          .status-pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: #f1f5f9;
            padding: 8px 16px;
            border-radius: 100px;
            font-size: 0.85rem;
            font-weight: 600;
            color: #475569;
            margin-bottom: 1.5rem;
          }

          .dot { width: 8px; height: 8px; background: #10b981; border-radius: 50%; display: inline-block; animation: pulse 2s infinite; }

          .hero-title { font-size: 4rem; font-weight: 850; line-height: 1.1; letter-spacing: -0.05em; margin-bottom: 1.5rem; }
          .gradient-text { background: linear-gradient(90deg, #0070f3, #10b981); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
          .hero-desc { font-size: 1.25rem; color: #475569; line-height: 1.6; margin-bottom: 2.5rem; max-width: 500px; }

          .hero-btns { display: flex; gap: 15px; }
          .btn-primary { background: #0f172a; color: #fff; padding: 15px 30px; border-radius: 12px; font-weight: 700; text-decoration: none; display: flex; align-items: center; gap: 10px; transition: 0.3s; }
          .btn-secondary { background: #fff; color: #0f172a; border: 1px solid #e2e8f0; padding: 15px 30px; border-radius: 12px; font-weight: 700; text-decoration: none; display: flex; align-items: center; gap: 10px; transition: 0.3s; }
          .btn-primary:hover { background: #0070f3; transform: translateY(-3px); }

          /* Profile Image Styling */
          .image-blob {
            width: 350px;
            height: 400px;
            background: #f1f5f9;
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            overflow: hidden;
            border: 8px solid #fff;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          }

          .profile-img { width: 100%; height: 100%; object-fit: cover; }

          .floating-badge {
            position: absolute;
            bottom: 20px;
            left: -20px;
            background: #fff;
            padding: 12px 20px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            font-weight: 700;
            font-size: 0.9rem;
          }

          /* Stats Bar */
          .stats-bar { display: flex; justify-content: space-around; background: #0f172a; color: #fff; padding: 3rem 5%; border-radius: 32px; max-width: 1100px; margin: 4rem auto; }
          .stat-item h3 { font-size: 2.5rem; margin: 0; color: #10b981; }
          .stat-item p { margin: 5px 0 0; color: #94a3b8; font-weight: 500; }

          /* Service Cards */
          .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; max-width: 1100px; margin: 5rem auto; padding: 0 5%; }
          .service-card { padding: 40px; border-radius: 24px; border: 1px solid #f1f5f9; transition: 0.3s; background: #fff; }
          .service-card:hover { border-color: #0070f3; transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.05); }
          .icon-box { width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; }
          .blue { background: #eff6ff; color: #0070f3; }
          .green { background: #f0fdf4; color: #10b981; }
          .purple { background: #faf5ff; color: #a855f7; }

          /* Why Me Section */
          .why-me { background: #f8fafc; padding: 5rem 5%; border-radius: 40px; max-width: 1100px; margin: 5rem auto; text-align: center; }
          .trust-list { list-style: none; padding: 0; display: flex; justify-content: center; gap: 30px; margin-top: 2rem; flex-wrap: wrap; }
          .trust-list li { display: flex; align-items: center; gap: 10px; font-weight: 600; color: #334155; }
          .check-green { color: #10b981; }

          @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.4; } 100% { opacity: 1; } }

          @media (max-width: 968px) {
            .hero-split { flex-direction: column; text-align: center; padding-top: 6rem; }
            .hero-title { font-size: 2.8rem; }
            .hero-desc { margin: 0 auto 2.5rem; }
            .hero-btns { justify-content: center; }
            .image-blob { width: 280px; height: 320px; }
            .services-grid { grid-template-columns: 1fr; }
            .stats-bar { flex-direction: column; gap: 2rem; }
          }
        `}</style>
      </div>
    </Layout>
  );
}