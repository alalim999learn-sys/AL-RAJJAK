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
    <h1>Apie mane</h1>
<p>
  Sveiki! Esu lemonskn.com savininkė, mados ir grožio entuziastė, mėgstanti dalintis patarimais apie
  makiažą, odos priežiūrą ir stilingus drabužius — nuo kasdienių aprangų iki elegantiškų suknelių.
</p>

<p>
  Šį tinklaraštį pradėjau tam, kad padėčiau kitiems atrasti prieinamus grožio produktus, madingus
  drabužius ir sąžiningus atsiliepimus apie prekes, kurias asmeniškai išbandžiau. Nesvarbu, ar
  ieškote idealaus lūpų dažų, ar suknelės vakarui — aš jums padėsiu.
</p>

<p>
  Visi mano įrašai pagrįsti tikra patirtimi, ne reklama. Dirbsiu su patikimomis partnerystėmis, tokiomis kaip
  Zalando ir Awin, kad rekomenduočiau tik tuos produktus, kuriuos tikrai myliu — ir taip, galiu uždirbti
  nedidelį komisinį atlyginimą, jei pirksite per mano nuorodas, be jokių papildomų išlaidų jums.
</p>

<p>
  Ačiū, kad apsilankėte — tikiuosi, kad mano turinys įkvėps jus atrodyti ir jaustis geriausiai!
</p>

<p>
  💌 Norite susisiekti? Eikite į <Link href="/contact">Kontaktų</Link> puslapį.
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
