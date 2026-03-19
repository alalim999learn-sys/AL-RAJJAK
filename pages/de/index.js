import Head from 'next/head';
import Layout from '../../component/Layout';
import { 
  ShieldCheck, Code2, Globe, Send, Lock, Server, 
  ShieldAlert, Zap, Search, Database, EyeOff, 
  Activity, LifeBuoy, Scale, GraduationCap, Image as ImageIcon,
  CheckCircle2, ArrowRight, Linkedin, UserCheck, ShieldPlus
} from 'lucide-react';

export default function Home() {
  return (
    <Layout>
      <div className="page-wrapper">
        <Head>
          <title>Lemonskn SECURITY | Shanon Khan - Experto en Seguridad Web</title>
          <meta name="description" content="Lemonskn SECURITY: Blindaje WordPress de 39 puntos para PYMEs. Protección conforme al RGPD por Shanon Khan." />
        </Head>

        <main className="main-content">
          {/* --- Hero Section --- */}
          <section className="hero">
            <div className="status-badge">Disponible para proyectos en España y la UE</div>
            <h1>Protegiendo <span className="accent">PYMEs</span> con seguridad de élite.</h1>
            
            <div className="expert-intro">
              <UserCheck size={20} color="#059669" />
              <p>Soy <strong>Shanon Khan</strong> — Tu Ingeniero de Seguridad Dedicado. No soy una agencia sin rostro, sino un experto personal con el que puedes hablar directamente.</p>
            </div>

            <p className="hero-sub">Construyo fortalezas digitales para negocios locales utilizando seguridad de grado industrial y aplicaciones de alto rendimiento.</p>
            
            <div className="brand-tagline">
              <ShieldPlus size={18} color="#0070f3" />
              <span><strong>Lemonskn SECURITY:</strong> Donde la ingeniería pura cumple con los estándares europeos del RGPD.</span>
            </div>

            <div className="hero-edu">
              <GraduationCap size={18} />
              <span>Excelencia Académica: Dhaka College (Grado en Química)</span>
            </div>
          </section>

          {/* --- Trust Indicator Bar --- */}
          <section className="trust-indicator">
            <div className="trust-item"><CheckCircle2 size={16} color="#059669" /> Listo para RGPD</div>
            <div className="trust-item"><CheckCircle2 size={16} color="#059669" /> Cumplimiento Legal UE</div>
            <div className="trust-item"><CheckCircle2 size={16} color="#059669" /> Garantía sin "Backdoors"</div>
          </section>

          {/* --- Agency vs Expert Section --- */}
          <section className="expert-vs-agency">
            <div className="comparison-box">
              <div className="comp-header">
                <h2>¿Por qué trabajar con un <span className="highlight">Experto Personal?</span></h2>
                <p>Las grandes agencias suelen cobrar precios elevados por trabajos básicos realizados por personal junior. Conmigo, tratas directamente con el ingeniero, no con un comercial.</p>
              </div>

              <div className="comp-grid">
                <div className="comp-card agency">
                  <h4>Agencias Tradicionales</h4>
                  <ul>
                    <li>❌ Altos costes fijos y tarifas ocultas</li>
                    <li>❌ Desarrolladores junior en tareas críticas</li>
                    <li>❌ Respuestas lentas mediante tickets</li>
                    <li>❌ Plugins de seguridad genéricos</li>
                  </ul>
                </div>

                <div className="comp-card expert">
                  <h4>Shanon (Tu Experto)</h4>
                  <ul>
                    <li>✅ Acceso directo al ingeniero 24/7</li>
                    <li>✅ Ejecución de nivel senior en cada tarea</li>
                    <li>✅ Auditorías de precio fijo y transparentes</li>
                    <li>✅ Protocolo propio de blindaje de 39 puntos</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* --- Visual Gallery --- */}
          <section className="gallery-section">
            <div className="section-title">
              <h2><ImageIcon size={22} /> Galería de Ingeniería</h2>
              <p>Evidencia visual de puntuaciones 100/100 en seguridad y bloqueo de servidores.</p>
            </div>
            
            <div className="bento-grid">
              <div className="bento-item img-1">
                <img src="/rijk1.png" alt="Análisis de Arquitectura" />
                <span className="img-caption">Éxito en Auditoría de Seguridad 100%</span>
              </div>
              <div className="bento-item img-2">
                <img src="/rijk2.png" alt="Firewall de Servidor" />
                <span className="img-caption">Lógica de Bloqueo de Firewall</span>
              </div>
              <img src="/rijk3.png" alt="Protocolo de Seguridad" className="img-3" />
              <img src="/img1.png" alt="Auditoría de Vulnerabilidades" className="img-4" />
              <img src="/img2.png" alt="Limpieza de Malware" className="img-5" />
            </div>
          </section>

          {/* --- 39-Point Framework --- */}
          <section className="technical-proof">
            <div className="proof-header">
              <span className="badge-small">La Metodología</span>
              <h2>El Marco de <span className="highlight">Blindaje de 39 Puntos</span></h2>
              <p>No me limito a "instalar" plugins. Reescribo la lógica de defensa de tu sitio en 39 pasos.</p>
            </div>

            <div className="proof-content">
              <div className="proof-column">
                <div className="col-header"><Lock size={20} color="#0070f3" /><h3>01. Bloqueo del Sistema</h3></div>
                <ul>
                  <li><CheckCircle2 size={16} className="check-icon" /> <div><strong>Escudo XML-RPC:</strong> <span>Bloquea el 90% de los puntos de entrada de bots.</span></div></li>
                  <li><CheckCircle2 size={16} className="check-icon" /> <div><strong>Fortificación de Configuración:</strong> <span>Bloquea archivos maestros para evitar ediciones externas.</span></div></li>
                  <li><CheckCircle2 size={16} className="check-icon" /> <div><strong>Ocultación de Huella:</strong> <span>Invisible ante escaneos automatizados de hackers.</span></div></li>
                </ul>
              </div>

              <div className="proof-column">
                <div className="col-header"><Database size={20} color="#0070f3" /><h3>02. Protección de Datos</h3></div>
                <ul>
                  <li><CheckCircle2 size={16} className="check-icon" /> <div><strong>Mutación de Prefijos:</strong> <span>Cambia las direcciones de la base de datos para que sean ilocalizables.</span></div></li>
                  <li><CheckCircle2 size={16} className="check-icon" /> <div><strong>Restricción de API:</strong> <span>Evita que los bots extraigan datos de tus clientes.</span></div></li>
                  <li><CheckCircle2 size={16} className="check-icon" /> <div><strong>Limpieza de Parámetros:</strong> <span>Filtra enlaces maliciosos antes de que lleguen al servidor.</span></div></li>
                </ul>
              </div>

              <div className="proof-column">
                <div className="col-header"><Scale size={20} color="#0070f3" /><h3>03. Cumplimiento Legal</h3></div>
                <ul>
                  <li><CheckCircle2 size={16} className="check-icon" /> <div><strong>Enmascaramiento de IP:</strong> <span>Protección ante multas de privacidad del RGPD.</span></div></li>
                  <li><CheckCircle2 size={16} className="check-icon" /> <div><strong>Cifrado HSTS:</strong> <span>Fuerza a los navegadores a usar siempre conexiones seguras.</span></div></li>
                  <li><CheckCircle2 size={16} className="check-icon" /> <div><strong>Localización de Fuentes:</strong> <span>Elimina el rastreo externo (Requisito legal en la UE).</span></div></li>
                </ul>
              </div>
            </div>
          </section>

          {/* --- Direct CTA Section --- */}
          <section className="cta-hero">
            <div className="cta-box">
              <h2>¿Listo para asegurar tu negocio?</h2>
              <p>Obtén una auditoría detallada y una garantía de cero vulnerabilidades.</p>
              <button className="main-btn-large">
                Reserva tu Auditoría Gratuita Hoy <ArrowRight size={20} />
              </button>
            </div>
          </section>

          {/* --- Footer & Social --- */}
          <section className="footer-simple">
            <div className="social-connect">
              <p>Verifica mi trayectoria profesional:</p>
              <a href="https://www.linkedin.com/in/shanon-khan-52852a283/" target="_blank" className="linkedin-link">
                <Linkedin size={20} /> Conecta con Shanon Khan
              </a>
            </div>
          </section>
        </main>

        <style jsx>{`
          /* Los estilos se mantienen iguales ya que no dependen del idioma */
          .page-wrapper { background: #ffffff; color: #1a1a1a; min-height: 100vh; font-family: 'Inter', sans-serif; padding-bottom: 5rem; }
          .main-content { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; }
          .hero { padding: 8rem 0 3rem; text-align: center; }
          h1 { font-size: 3.5rem; font-weight: 850; letter-spacing: -0.04em; line-height: 1.1; margin-bottom: 1.5rem; }
          .accent { color: #0070f3; }
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
          .bento-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
          .bento-item { position: relative; overflow: hidden; border-radius: 16px; border: 1px solid #e2e8f0; }
          .bento-grid img { width: 100%; height: 100%; object-fit: cover; transition: 0.3s; }
          .img-caption { position: absolute; bottom: 10px; left: 10px; background: rgba(0,0,0,0.7); color: #fff; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; }
          .img-1 { grid-column: span 2; } .img-2 { grid-column: span 2; }
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
            .img-1, .img-2 { grid-column: span 1; }
            .expert-intro { flex-direction: column; text-align: center; }
          }
        `}</style>
      </div>
    </Layout>
  );
}