//C:\Users\Shanon\al-rajjak\pages\es\política-de-privacidad.js
import Layout from '../../component/Layout';
import Head from 'next/head';

export default function Privacidad() {
  return (
    <Layout>
      <Head>
        <title>Política de Privacidad | lemonskn SECURITY</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div style={{ padding: '40px', color: '#cbd5e1', maxWidth: '900px', margin: 'auto', lineHeight: '1.8', fontFamily: 'Inter, sans-serif' }}>
        <h1 style={{ color: '#10b981', borderBottom: '1px solid #334155', paddingBottom: '10px' }}>Política de Privacidad</h1>
        <p style={{ fontStyle: 'italic', fontSize: '14px' }}>Última actualización: 24 de marzo de 2026</p>

        <section style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#fff', fontSize: '20px' }}>1. Información General</h2>
          <p>
            La protección de sus datos personales es la máxima prioridad en <strong>lemonskn SECURITY</strong>. 
            Este sitio web está diseñado para que pueda ser utilizado sin la necesidad de recopilar datos de carácter personal. 
            No realizamos seguimiento (tracking) ni creamos perfiles de usuario.
          </p>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#fff', fontSize: '20px' }}>2. Sin Recopilación de Datos (Protocolo Zero-Form)</h2>
          <p>
            Para garantizar la máxima seguridad y cumplir con las exigencias del <strong>RGPD (Reglamento General de Protección de Datos)</strong>, 
            este sitio web <strong>prescinde totalmente de formularios de contacto</strong>. No almacenamos nombres, direcciones de correo electrónico 
            ni mensajes en nuestros servidores. Para consultas comerciales, por favor utilice mis perfiles verificados 
            en <strong>LinkedIn</strong> o <strong>Facebook</strong>.
          </p>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#fff', fontSize: '20px' }}>3. Tipografías (100% Libre de Google Fonts)</h2>
          <p>
            Este sitio web es <strong>completamente ajeno a Google Fonts</strong>. No cargamos fuentes externas de servidores de terceros. 
            Todas las tipografías utilizadas son proporcionadas localmente por su sistema o servidor propio. 
            Esto evita que su dirección IP sea transmitida sin autorización a proveedores externos (como Google) en EE. UU., 
            cumpliendo con los estándares más altos del RGPD en España.
          </p>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#fff', fontSize: '20px' }}>4. Cookies Técnicas de Seguridad</h2>
          <p>
            Utilizamos únicamente una cookie técnica "Strictly Necessary" (ej. <code>ls_sec_es</code>) 
            para garantizar la integridad de la sesión y las medidas de seguridad. Esta cookie no se utiliza para el 
            análisis de su comportamiento de navegación y se gestiona de acuerdo con la configuración de su navegador.
          </p>
        </section>

        <section style={{ marginTop: '30px' }}>
          <h2 style={{ color: '#fff', fontSize: '20px' }}>5. Enlaces a Terceros</h2>
          <p>
            Nuestro sitio web contiene enlaces a redes sociales (LinkedIn, Facebook). Una vez que abandona <strong>lemonskn.com</strong>, 
            se aplican las políticas de privacidad de los respectivos proveedores de las plataformas.
          </p>
        </section>

        <section style={{ marginTop: '40px', borderTop: '1px solid #334155', paddingTop: '20px', textAlign: 'center' }}>
          <p style={{ color: '#475569', fontSize: '13px' }}>
            Desarrollado para sistemas seguros. Conforme al RGPD de la Unión Europea.
          </p>
        </section>
      </div>
    </Layout>
  );
}