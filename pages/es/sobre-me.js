//C:\Users\Shanon\al-rajjak\pages\es\sobre-me.js
import Layout from '../../component/Layout';
import Head from 'next/head';

export default function SobreMi() {
  const profileData = {
    name: "Shanon Khan",
    age: 24,
    location: "East Nakhalpara, Dhaka, Bangladesh",
    facebook: "https://www.facebook.com/people/Mohammad-Shanon/pfbid0pcMBM8riHDh8c8Ph1jffQJEafnpvVKQ1JcQRj7AmJqSgxpvF4qt7pqrLkBR9CghHl/",
    email: "shanonkhan47@gmail.com"
  };

  return (
    <Layout>
      <Head>
        <title>Sobre mí | {profileData.name} - Especialista en Seguridad IT</title>
      </Head>

      <div style={{ padding: '40px', color: '#cbd5e1', maxWidth: '900px', margin: 'auto', lineHeight: '1.8', fontFamily: 'sans-serif', backgroundColor: '#0f172a' }}>
        
        {/* --- Profile Header --- */}
        <section style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '40px' }} className="profile-header">
          <div style={{ flexShrink: 0 }}>
            <img 
              src="/shanon-99.png" 
              alt={profileData.name} 
              style={{ width: '180px', height: '180px', borderRadius: '20px', border: '4px solid #10b981', objectFit: 'cover', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }} 
            />
          </div>
          <div>
            <h1 style={{ color: '#fff', fontSize: '32px', marginBottom: '10px' }}>{profileData.name}</h1>
            <p style={{ color: '#10b981', fontWeight: 'bold', fontSize: '18px' }}>Especialista en Seguridad & Desarrollador Flutter</p>
            <p>{profileData.age} años | {profileData.location}</p>
          </div>
        </section>

        {/* --- Academic Excellence --- */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#fff', borderBottom: '1px solid #334155', paddingBottom: '10px' }}>Excelencia Académica</h2>
          <p>
            Mi formación científica es la base de mi precisión técnica. Completé mis estudios de <strong>SSC</strong> y <strong>HSC</strong> en Mohammadpur Model College con la calificación máxima de <strong>GPA 5.00</strong>.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '15px', marginTop: '20px' }}>
            <div className="score-card">
              <span className="score-label">Física</span>
              <span className="score-value">97 / 100</span>
            </div>
            <div className="score-card">
              <span className="score-label">Informática (ICT)</span>
              <span className="score-value">91 / 100</span>
            </div>
            <div className="score-card grey">
              <span className="score-label">Inglés</span>
              <span className="score-value">71 / 100</span>
            </div>
            <div className="score-card grey">
              <span className="score-label">Bengalí</span>
              <span className="score-value">75 / 100</span>
            </div>
          </div>
        </section>

        {/* --- Why Chemistry/Decision --- */}
        <section style={{ marginBottom: '40px', backgroundColor: '#1e293b', padding: '25px', borderRadius: '12px' }}>
          <h2 style={{ color: '#fff' }}>Mi Enfoque: ¿Por qué Química en lugar de Ingeniería?</h2>
          <p>
            Tras el HSC, fui admitido en <strong>Ingeniería de Bio-recursos</strong> en la Universidad Agrícola de Gazipur. Sin embargo, tomé una decisión consciente: 
            dejé la ingeniería para seguir mi pasión por las ciencias analíticas en el <strong>Dhaka College (Departamento de Química)</strong>. 
          </p>
          <p style={{ marginTop: '10px' }}>
            Esta elección define mi forma de trabajar: no elijo el camino más fácil, sino el que más desafía mis capacidades analíticas. La química me enseña a entender sistemas complejos a nivel molecular, una habilidad que aplico hoy en la <strong>Ciberseguridad</strong>.
          </p>
        </section>

        {/* --- Tech Journey --- */}
        <section style={{ borderLeft: '6px solid #10b981', paddingLeft: '20px', marginBottom: '40px' }}>
          <h2 style={{ color: '#fff' }}>Honestidad y Trayectoria Tech (Desde 2020)</h2>
          <p>
            Mi viaje en la informática comenzó en 2020. Apuesto por la <strong>honestidad radical</strong>: no soy un veterano con décadas de experiencia, sino un desarrollador moderno que ha crecido con los estándares de seguridad actuales.
          </p>
          <p style={{ marginTop: '10px' }}>
            Dedico cada semana a perfeccionar mi <strong>Protocolo de Seguridad de 39 puntos para WordPress</strong> y al desarrollo de <strong>Apps seguras con Flutter</strong>, equilibrando mis estudios universitarios con mi pasión por la tecnología.
          </p>
        </section>

        {/* --- Social Links --- */}
        <section style={{ textAlign: 'center', marginTop: '50px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href={profileData.facebook} target="_blank" rel="noopener noreferrer" className="social-btn facebook">
              Contacto vía Facebook
            </a>
            <a href={`mailto:${profileData.email}`} className="social-btn email">
              Enviar Email
            </a>
          </div>
        </section>

        <footer style={{ marginTop: '60px', textAlign: 'center', fontSize: '12px', color: '#475569' }}>
          <p>© 2026 lemonskn.com | Dhaka, Bangladesh</p>
        </footer>

        <style jsx>{`
          .score-card { background: #1e293b; padding: 15px; border-radius: 10px; display: flex; flex-direction: column; align-items: center; border-bottom: 3px solid #10b981; }
          .score-card.grey { border-bottom-color: #475569; }
          .score-label { color: #94a3b8; font-size: 13px; }
          .score-value { color: #fff; font-size: 22px; font-weight: bold; }
          .social-btn { padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: 0.3s; color: white; display: inline-block; }
          .facebook { background: #1877f2; }
          .email { background: transparent; border: 1px solid #10b981; color: #10b981; }
          .social-btn:hover { opacity: 0.8; transform: translateY(-2px); }
          .email:hover { background: #10b981; color: #fff; }
          @media (max-width: 600px) { 
            .profile-header { flex-direction: column; text-align: center; } 
            .social-btn { width: 100%; }
          }
        `}</style>
      </div>
    </Layout>
  );
}