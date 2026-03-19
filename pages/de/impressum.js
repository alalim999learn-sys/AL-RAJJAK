// pages/impressum.js
import Head from 'next/head';
import Layout from '../../component/Layout';

export default function Impressum() {
  return (
    <Layout>
      <Head>
        <title>Impressum | Rechtliche Hinweise - Shanon Khan</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="impressum-container">
        <h1>Impressum</h1>
        <p className="subtitle">Rechtliche Informationen gemäß TMG und EU-Recht</p>

        <section>
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            <strong>Shanon Khan</strong><br />
            Flutter Developer & Experte für WordPress-Sicherheit<br />
            Road Name - Nakhalparaschool Road, Home no. 230/1<br />
            East Nakhalpara, Dhaka 1207<br />
            Bangladesch
          </p>
        </section>

        <section>
          <h2>Kontakt</h2>
          <p>
            Telefon: [+8801601177293]<br />
            E-Mail: <a href="mailto:shanonkhan47@gmail.com">shanonkhan47@gmail.com</a><br />
            Webseite: <a href="https://lemonskn.com">www.lemonskn.com</a>
          </p>
        </section>

        <section>
          <h2>Redaktionell verantwortlich</h2>
          <p>
            Shanon Khan<br />
            Road Name - Nakhalparaschool Road, Home no. 230/1<br />
            East Nakhalpara, Dhaka 1207<br />
            Bangladesch
          </p>
        </section>

        <section>
          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer"> https://ec.europa.eu/consumers/odr</a>.<br />
            Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section className="disclaimer">
          <h2>Haftungsausschluss</h2>
          <p><strong>Haftung für Inhalte:</strong> Als Diensteanbieter bin ich gemäß den allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten verantwortlich. Ich bin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.</p>
          <p><strong>Haftung für Links:</strong> Mein Angebot enthält Links zu externen Webseiten Dritter. Auf die Inhalte dieser Webseiten habe ich keinen Einfluss und kann daher keine Gewähr für diese fremden Inhalte übernehmen.</p>
        </section>
      </div>

      <style jsx>{`
        .impressum-container {
          max-width: 800px;
          margin: 4rem auto;
          padding: 2rem;
          line-height: 1.6;
          color: #333;
          font-family: 'Inter', sans-serif;
        }
        h1 { font-size: 2.5rem; margin-bottom: 0.5rem; color: #111; }
        .subtitle { color: #666; font-style: italic; margin-bottom: 3rem; }
        section { margin-bottom: 2.5rem; }
        h2 { font-size: 1.25rem; color: #0070f3; margin-bottom: 1rem; border-bottom: 1px solid #eee; padding-bottom: 0.5rem; }
        p { margin: 0.5rem 0; }
        a { color: #0070f3; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .disclaimer { font-size: 0.9rem; color: #555; }
        
        @media (max-width: 600px) {
          .impressum-container { margin: 2rem auto; padding: 1rem; }
          h1 { font-size: 2rem; }
        }
      `}</style>
    </Layout>
  );
}