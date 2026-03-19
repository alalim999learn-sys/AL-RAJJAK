//C:\Users\Shanon\al-rajjak\pages\de\datenschutz.js
import Layout from '../../component/Layout';

export default function Datenschutz() {
  return (
    <Layout>
      <div style={{ padding: '40px', color: '#cbd5e1', maxWidth: '900px', margin: 'auto', lineHeight: '1.8' }}>
        <h1 style={{ color: '#10b981', borderBottom: '1px solid #334155', paddingBottom: '10px' }}>Datenschutzerklärung</h1>
        <p style={{ fontStyle: 'italic', fontSize: '14px' }}>Stand: 18. März 2026</p>

        <section style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#fff', fontSize: '20px' }}>1. Allgemeine Informationen</h2>
          <p>
            Der Schutz Ihrer persönlichen Daten hat bei <strong>lemonskn SECURITY</strong> höchste Priorität. 
            Diese Webseite ist so konzipiert, dass sie ohne die Erhebung personenbezogener Daten genutzt werden kann. 
            Wir betreiben kein Tracking und erstellen keine Nutzerprofile.
          </p>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#fff', fontSize: '20px' }}>2. Keine Datenerhebung (Zero-Form-Protokoll)</h2>
          <p>
            Um maximale Sicherheit zu gewährleisten und die Anforderungen der DSGVO (Datenschutz-Grundverordnung) zu erfüllen, 
            <strong>verzichtet diese Webseite vollständig auf Kontaktformulare</strong>. Wir speichern keine Namen, E-Mail-Adressen 
            oder Nachrichten auf unseren Servern. Für geschäftliche Anfragen nutzen Sie bitte meine verifizierten Profile 
            auf <strong>LinkedIn</strong> oder <strong>Facebook</strong>.
          </p>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#fff', fontSize: '20px' }}>3. Schriftarten (100% Google-Fonts-frei)</h2>
          <p>
            Diese Webseite ist <strong>vollständig frei von Google Fonts</strong>. Wir laden keine externen Schriftarten 
            von Servern Dritter nach. Alle verwendeten Schriftarten werden lokal von Ihrem System bereitgestellt. 
            Dadurch wird verhindert, dass Ihre IP-Adresse unbefugt an externe Anbieter (wie Google) in die USA übertragen wird. 
            Dies entspricht den höchsten Standards der DSGVO.
          </p>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#fff', fontSize: '20px' }}>4. Technische Sicherheits-Cookies</h2>
          <p>
            Wir verwenden lediglich ein technisch notwendiges "Strictly Necessary" Cookie (z.B. <code>ls_sec_de</code>), 
            um die Integrität der Sitzung und Sicherheitsvorkehrungen zu gewährleisten. Dieses Cookie dient nicht der 
            Analyse Ihres Surfverhaltens und wird gemäß Ihren Browsereinstellungen verwaltet.
          </p>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#fff', fontSize: '20px' }}>5. Links zu Drittanbietern</h2>
          <p>
            Unsere Webseite enthält Links zu sozialen Netzwerken (LinkedIn, Facebook). Sobald Sie <strong>lemonskn.com</strong> 
            verlassen, gelten die Datenschutzrichtlinien der jeweiligen Plattformbetreiber.
          </p>
        </section>

        <section style={{ marginTop: '40px', borderTop: '1px solid #334155', paddingTop: '20px', textAlign: 'center' }}>
          <p style={{ color: '#475569', fontSize: '13px' }}>
            Entwickelt für sichere Systeme. Konform mit der EU-DSGVO.
          </p>
        </section>
      </div>
    </Layout>
  );
}