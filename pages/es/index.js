import Head from 'next/head';
import Layout from '../../component/Layout';
import { 
  ShieldCheck, Lock, Database, ShieldPlus, 
  ArrowRight, Linkedin, Award, Check
} from 'lucide-react';

export default function ModernHomeES() {
  return (
    <Layout>
      <div className="modern-container">
        <Head>
          <title>Shanon Khan | Especialista en Seguridad de Élite</title>
        </Head>

        {/* --- 1. SECCIÓN HERO --- */}
        <section className="hero-split">
          <div className="hero-content">
            <div className="status-pill">
              <span className="dot"></span> Disponible para proyectos en la UE y EE. UU.
            </div>
            <h1 className="hero-title">
              Fortalezas <span className="gradient-text">Digitales</span> para su Negocio.
            </h1>
            <p className="hero-desc">
              Soy <strong>Shanon Khan</strong>. No construyo sitios web ordinarios: desarrollo experiencias digitales de alto rendimiento y máxima seguridad con mi <strong>protocolo de blindaje de 39 puntos</strong>.
            </p>
            
            <div className="hero-btns">
              {/* Auditoría por Email */}
              <a href="mailto:shanonkhan47@gmail.com" className="btn-primary">
                <ShieldCheck size={18} /> Auditoría Gratuita
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/8801601177293" className="btn-primary">
                <ShieldCheck size={18} /> WhatsApp
              </a>
              {/* Facebook Support */}
              <a href="https://www.facebook.com/profile.php?id=100074640281202" target="_blank" className="btn-secondary">
                <svg size={18} viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{marginRight: '8px'}}>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg> 
                Soporte en Facebook
              </a>
            </div>
          </div>

          <div className="hero-image-container">
            <div className="image-blob">
              <img src="/shanon-99.png" alt="Shanon Khan" className="profile-img" />
            </div>
            <div className="floating-badge">
              <Award size={20} color="#10b981" />
              <span>Experto en Ciberseguridad</span>
            </div>
          </div>
        </section>

        {/* --- 2. BARRA DE ESTADÍSTICAS --- */}
        <section className="stats-bar">
          <div className="stat-item">
            <h3>39+</h3>
            <p>Puntos de Seguridad</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Conforme al RGPD</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Soporte Directo</p>
          </div>
        </section>

        {/* --- 3. SERVICIOS PRINCIPALES --- */}
        <section className="services-grid">
          <div className="service-card">
            <div className="icon-box blue"><Lock /></div>
            <h3>Blindaje de WordPress</h3>
            <p>Protección total contra fuerza bruta, inyecciones SQL y ataques de malware.</p>
          </div>
          <div className="service-card">
            <div className="icon-box green"><ShieldPlus /></div>
            <h3>Seguridad RGPD</h3>
            <p>Google Fonts locales, anonimización de IP y cumplimiento legal estricto.</p>
          </div>
          <div className="service-card">
            <div className="icon-box purple"><Database /></div>
            <h3>Apps a Medida</h3>
            <p>Desarrollo de aplicaciones seguras con Flutter y Next.js para empresas modernas.</p>
          </div>
        </section>

        {/* --- 4. POR QUÉ TRABAJAR CONMIGO --- */}
        <section className="why-me">
          <div className="why-content">
            <h2>¿Por qué trabajar directamente conmigo?</h2>
            <p>Sin agencias anónimas ni personal junior. Usted recibe ingeniería de seguridad al más alto nivel.</p>
            <ul className="trust-list">
              <li><Check size={18} className="check-green"/> Comunicación Directa (Sin tickets)</li>
              <li><Check size={18} className="check-green"/> Precisión Académica (Dhaka College)</li>
              <li><Check size={18} className="check-green"/> Precios Fijos y Transparentes</li>
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

          .hero-btns { display: flex; gap: 15px; flex-wrap: wrap; }
          .btn-primary { background: #0f172a; color: #fff; padding: 15px 30px; border-radius: 12px; font-weight: 700; text-decoration: none; display: flex; align-items: center; gap: 10px; transition: 0.3s; }
          .btn-secondary { background: #fff; color: #0f172a; border: 1px solid #e2e8f0; padding: 15px 30px; border-radius: 12px; font-weight: 700; text-decoration: none; display: flex; align-items: center; gap: 10px; transition: 0.3s; }
          .btn-primary:hover { background: #0070f3; transform: translateY(-3px); }

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

          .stats-bar { display: flex; justify-content: space-around; background: #0f172a; color: #fff; padding: 3rem 5%; border-radius: 32px; max-width: 1100px; margin: 4rem auto; }
          .stat-item h3 { font-size: 2.5rem; margin: 0; color: #10b981; }
          .stat-item p { margin: 5px 0 0; color: #94a3b8; font-weight: 500; }

          .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; max-width: 1100px; margin: 5rem auto; padding: 0 5%; }
          .service-card { padding: 40px; border-radius: 24px; border: 1px solid #f1f5f9; transition: 0.3s; background: #fff; }
          .service-card:hover { border-color: #0070f3; transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.05); }
          .icon-box { width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; }
          .blue { background: #eff6ff; color: #0070f3; }
          .green { background: #f0fdf4; color: #10b981; }
          .purple { background: #faf5ff; color: #a855f7; }

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