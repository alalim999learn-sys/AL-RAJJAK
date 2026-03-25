//C:\Users\Shanon\al-rajjak\pages\es\aviso-legal.js
import Head from 'next/head';
import Layout from '../../component/Layout';

export default function AvisoLegal() {
  return (
    <Layout>
      <Head>
        <title>Aviso Legal | Información Legal - Shanon Khan</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="legal-container">
        <h1>Aviso Legal</h1>
        <p className="subtitle">Información legal conforme a la LSSI-CE y normativa de la UE</p>

        <section>
          <h2>Datos Identificativos</h2>
          <p>
            En cumplimiento con el deber de información recogido en el artículo 10 de la 
            <strong> Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE)</strong>, 
            se reflejan los siguientes datos del titular:
          </p>
          <p>
            <strong>Titular:</strong> Shanon Khan<br />
            Desarrollador Flutter y Experto en Seguridad de WordPress<br />
            Dirección: Road Name - Nakhalparaschool Road, Home no. 230/1<br />
            East Nakhalpara, Dhaka 1207<br />
            Bangladesh
          </p>
        </section>

        <section>
          <h2>Contacto</h2>
          <p>
            Teléfono: [+8801601177293]<br />
            Correo electrónico: <a href="mailto:shanonkhan47@gmail.com">shanonkhan47@gmail.com</a><br />
            Sitio Web: <a href="https://lemonskn.com">www.lemonskn.com</a>
          </p>
        </section>

        <section>
          <h2>Responsabilidad Editorial</h2>
          <p>
            Shanon Khan<br />
            Road Name - Nakhalparaschool Road, Home no. 230/1<br />
            East Nakhalpara, Dhaka 1207<br />
            Bangladesh
          </p>
        </section>

        <section>
          <h2>Resolución de litigios en línea</h2>
          <p>
            La Comisión Europea facilita una plataforma de resolución de litigios en línea (OS) que se encuentra disponible en el siguiente enlace: 
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer"> https://ec.europa.eu/consumers/odr</a>.<br />
            No estoy dispuesto ni obligado a participar en procedimientos de resolución de litigios ante un organismo de arbitraje de consumo.
          </p>
        </section>

        <section className="disclaimer">
          <h2>Exención de Responsabilidad</h2>
          <p><strong>Contenidos:</strong> Como prestador de servicios, soy responsable de los contenidos propios de estas páginas según las leyes generales. Sin embargo, no estoy obligado a supervisar la información ajena transmitida o almacenada.</p>
          <p><strong>Enlaces:</strong> Mi oferta contiene enlaces a sitios web externos de terceros. No tengo influencia sobre los contenidos de dichos sitios web y, por lo tanto, no puedo asumir ninguna garantía por estos contenidos ajenos.</p>
        </section>
      </div>

      <style jsx>{`
        .legal-container {
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
          .legal-container { margin: 2rem auto; padding: 1rem; }
          h1 { font-size: 2rem; }
        }
      `}</style>
    </Layout>
  );
}