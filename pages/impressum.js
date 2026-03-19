// pages/impressum.js
import Head from 'next/head';
import Layout from '../component/Layout';

export default function Impressum() {
  return (
    <Layout>
      <Head>
        <title>Impressum | Legal Notice - Shanon Khan</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="impressum-container">
        <h1>Impressum</h1>
        <p className="subtitle">Legal Notice according to German and EU Law</p>

        <section>
          <h2>Angaben gemäß § 5 TMG (Information according to § 5 TMG)</h2>
          <p>
            <strong>Shanon Khan</strong><br />
            Flutter Developer & WordPress Security Expert<br />
            Road Name - Nakhalparaschool Road ,Home no ,230/1<br />
            East Nakhalpara ,Dhaka 1207<br />
            Bangladesh
          </p>
        </section>

        <section>
          <h2>Kontakt (Contact)</h2>
          <p>
            Telefon: [+8801601177293]<br />
            E-Mail: [shanonkhan47@gmail.com]<br />
            Website: <a href="https://lemonskn.com">www.lemonskn.com</a>
          </p>
        </section>

        <section>
          <h2>Redaktionell verantwortlich (Accountable for content)</h2>
          <p>
            Shanon Khan<br />
            [আপনার ঠিকানা আবার এখানে দিতে পারেন]
          </p>
        </section>

        <section>
          <h2>EU-Streitschlichtung (Dispute Resolution)</h2>
          <p>
            The European Commission provides a platform for online dispute resolution (OS): 
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer"> https://ec.europa.eu/consumers/odr</a>.<br />
            I am not obliged or willing to participate in dispute resolution proceedings before a consumer arbitration board.
          </p>
        </section>

        <section className="disclaimer">
          <h2>Disclaimer</h2>
          <p><strong>Liability for Contents:</strong> As a service provider, I am responsible for my own content on these pages according to general laws. However, I am not obligated to monitor transmitted or stored third-party information.</p>
          <p><strong>Liability for Links:</strong> My offer contains links to external websites of third parties. I have no influence on the contents of these websites and cannot assume any liability for them.</p>
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
      `}</style>
    </Layout>
  );
}