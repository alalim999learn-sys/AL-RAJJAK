import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../component/Layoutro';

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About - lemonskn.com</title>
        <meta name="description" content="About the owner of lemonskn.com - fashion and beauty tips, honest reviews, and affordable style inspiration." />
      </Head>

      <main className="about-container">
   <h1>Despre mine</h1>
<p>
  Bună! Sunt proprietara lemonskn.com, o pasionată de modă și frumusețe, care iubește să împărtășească sfaturi despre
  machiaj, îngrijirea pielii și ținute stilate — de la outfituri de zi cu zi până la rochii elegante.
</p>

<p>
  Am început acest blog pentru a-i ajuta pe alții să descopere produse de frumusețe accesibile, haine la modă și recenzii
  sincere despre articole pe care le-am testat personal. Fie că cauți rujul ideal sau rochia perfectă pentru o seară —
  sunt aici să te ajut.
</p>

<p>
  Toate postările mele sunt bazate pe experiență reală, nu pe reclame. Colaborez cu parteneri de încredere, precum
  Zalando și Awin, pentru a recomanda doar produsele pe care le iubesc cu adevărat — și da, pot câștiga un mic comision
  dacă cumperi prin linkurile mele, fără costuri suplimentare pentru tine.
</p>

<p>
  Mulțumesc că ai vizitat — sper ca articolele mele să te inspire să arăți și să te simți cât mai bine!
</p>

<p>
  💌 Vrei să iei legătura cu mine? Accesează pagina de <Link href="/contact">Contact</Link>.
</p>

      </main>

      <style jsx>{`
        .about-container {
          max-width: 700px;
          margin: 0 auto;
          padding: 2rem 1rem;
          font-family: Arial, sans-serif;
          color: #333;
          line-height: 1.7;
        }

        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #222;
        }

        p {
          margin-bottom: 1.2rem;
        }

        a {
          color: #e91e63;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        @media (max-width: 600px) {
          .about-container {
            padding: 1.5rem 1rem;
          }

          h1 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </Layout>
  );
}
