//C:\Users\Shanon\al-rajjak\pages\de\about.js
import Layout from '../../component/Layout';
import Head from 'next/head';

export default function UeberMich() {
  const profileData = {
    name: "Shanon Khan",
    age: 24,
    location: "East Nakhalpara, Dhaka, Bangladesch",
    linkedin: "https://www.linkedin.com/in/YOUR_LINKEDIN_URL",
    facebook: "https://www.facebook.com/YOUR_FB_URL"
  };

  return (
    <Layout>
      <Head>
        <title>Über mich | {profileData.name} - IT Security & Developer</title>
      </Head>

      <div style={{ padding: '40px', color: '#cbd5e1', maxWidth: '900px', margin: 'auto', lineHeight: '1.8', fontFamily: 'sans-serif', backgroundColor: '#0f172a' }}>
        
        {/* --- প্রোফাইল হেডার --- */}
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
            <p style={{ color: '#10b981', fontWeight: 'bold', fontSize: '18px' }}>Security Specialist & Flutter Developer</p>
            <p>{profileData.age} Jahre alt | {profileData.location}</p>
          </div>
        </section>

        {/* --- একাডেমিক এক্সেলেন্স (Physics 97, ICT 91) --- */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#fff', borderBottom: '1px solid #334155', paddingBottom: '10px' }}>Akademische Exzellenz</h2>
          <p>
            Mein Hintergrund in der Wissenschaft bildet das Fundament für meine präzise Arbeitsweise. Ich habe sowohl meinen <strong>SSC</strong> als auch meinen <strong>HSC</strong> am Mohammadpur Model College mit der Bestnote <strong>GPA 5.00</strong> abgeschlossen.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '15px', marginTop: '20px' }}>
            <div className="score-card">
              <span className="score-label">Physik</span>
              <span className="score-value">97 / 100</span>
            </div>
            <div className="score-card">
              <span className="score-label">Informatik (ICT)</span>
              <span className="score-value">91 / 100</span>
            </div>
            <div className="score-card grey">
              <span className="score-label">Englisch</span>
              <span className="score-value">71 / 100</span>
            </div>
            <div className="score-card grey">
              <span className="score-label">Bangla</span>
              <span className="score-value">75 / 100</span>
            </div>
          </div>
        </section>

        {/* --- ইঞ্জিনিয়ারিং ছেড়ে কেমিস্ট্রিতে আসার গল্প --- */}
        <section style={{ marginBottom: '40px', backgroundColor: '#1e293b', padding: '25px', borderRadius: '12px' }}>
          <h2 style={{ color: '#fff' }}>Mein Fokus: Warum Chemie statt Ingenieurwesen?</h2>
          <p>
            Nach dem HSC erhielt ich die Zulassung für <strong>Bio-Resource Engineering</strong> an der Landwirtschaftlichen Universität in Gazipur. Doch ich traf eine bewusste Entscheidung: 
            Ich verließ den Ingenieurstudiengang, um meiner Leidenschaft für die analytische Wissenschaft am <strong>Dhaka College (Abteilung Chemie)</strong> zu folgen. 
          </p>
          <p style={{ marginTop: '10px' }}>
            Diese Entscheidung zeigt meine Arbeitsweise: Ich wähle nicht den einfachsten Weg, sondern den, der meine analytischen Fähigkeiten am besten fordert. Chemie lehrt mich, komplexe Systeme bis in die molekulare Ebene zu verstehen – eine Fähigkeit, die ich heute in der <strong>Cybersecurity</strong> anwende.
          </p>
        </section>

        {/* --- টেক জার্নি ও বিরতি (২০২০ থেকে) --- */}
        <section style={{ borderLeft: '6px solid #10b981', paddingLeft: '20px', marginBottom: '40px' }}>
          <h2 style={{ color: '#fff' }}>Ehrlichkeit & Tech-Reise (Seit 2020)</h2>
          <p>
            Meine Reise in die IT begann 2020 während der COVID-Ära. Ich setze auf <strong>radikale Ehrlichkeit</strong>: Ich bin kein Veteran mit Jahrzehnten an Erfahrung, sondern ein moderner Entwickler, der mit aktuellen Sicherheitsstandards gewachsen ist.
          </p>
          <p style={{ marginTop: '10px' }}>
            In den Jahren 2022 und 2024 legte ich bewusste Pausen für meine SSC- und HSC-Prüfungen ein. Trotz der Doppelbelastung durch mein Chemiestudium investiere ich jede Woche Zeit in die Perfektionierung meines <strong>39-Punkte WordPress Security Hardening Protokolls</strong> und die Entwicklung sicherer <strong>Flutter Apps</strong>.
          </p>
        </section>

        {/* --- সোশ্যাল লিঙ্কস --- */}
        <section style={{ textAlign: 'center', marginTop: '50px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn linkedin">LinkedIn</a>
            <a href={profileData.facebook} target="_blank" rel="noopener noreferrer" className="social-btn facebook">Facebook</a>
          </div>
        </section>

        <footer style={{ marginTop: '60px', textAlign: 'center', fontSize: '12px', color: '#475569' }}>
          <p>© 2026 lemonskn.com | Dhaka, Bangladesch</p>
        </footer>

        <style jsx>{`
          .score-card { background: #1e293b; padding: 15px; border-radius: 10px; display: flex; flex-direction: column; align-items: center; border-bottom: 3px solid #10b981; }
          .score-card.grey { border-bottom-color: #475569; }
          .score-label { color: #94a3b8; font-size: 13px; }
          .score-value { color: #fff; font-size: 22px; font-weight: bold; }
          .social-btn { padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: 0.3s; color: white; }
          .linkedin { background: #0077b5; }
          .facebook { background: #1877f2; }
          .social-btn:hover { opacity: 0.8; transform: translateY(-2px); }
          @media (max-width: 600px) { .profile-header { flex-direction: column; text-align: center; } }
        `}</style>
      </div>
    </Layout>
  );
}




