import { useState } from 'react';
import Head from 'next/head';
import Layout from '../component/Layout';

// সমস্ত আরটীকেল লিঙ্ক
const articles = {
  ro: [
    { title: "Evitați Coșurile de Pe Pielea Grasă În Iarnă", url: "/ro/Evitați-Coșurile-de-Pe-Pielea-Grasă-În-Iarnă" },
    { title: "Ingrediente Naturale Pentru Îngrijirea Pielii Iarna", url: "/ro/ingrediente-naturale-pentru-îngrijirea-pielii-iarna" },
    { title: "Îngrijirea Pielii Echilibrate Iarna", url: "/ro/îngrijirea-pielii-echilibrate-iarna" },
    { title: "Îngrijirea Pielii Iarna Adulți România", url: "/ro/îngrijirea-pielii-iarna-adulți-România" },
    { title: "Îngrijire Piele Mixtă Grasă Iarna", url: "/ro/ingrijire-piele-mixta-grasa-iarna" },
    { title: "Metoda de Curățare cu Ulei pentru Pielea Uscată", url: "/ro/metoda-de-curățare-cu-ulei-pentru-pielea-uscată" },
    { title: "Protecția Pielii Iarna pentru Tenul Gras", url: "/ro/Protecția-pielii-iarna-pentru-tenul-gras" },
    { title: "Remedii Naturale pentru Pielea Grasă în Iarnă", url: "/ro/Remedii-Naturale-pentru-Pielea-Grasă-în-Iarnă" },
    { title: "Remedii naturale pentru tenul gras iarna", url: "/ro/Remedii-naturale-pentru-tenul-gras-iarna" },
    { title: "Rutina de Dimineață pentru Piele Grasă iarna", url: "/ro/Rutina-de-Dimineață-pentru-Piele-Grasă-iarna" },
    { title: "Rutina de dimineață pentru piele mixtă iarna", url: "/ro/Rutina-de-dimineață-pentru-piele-mixtă-iarna" },
    { title: "Rutina de hidratare iarna pentru pielea grasă și cu acnee", url: "/ro/rutina-de-hidratare-iarna-pentru-pielea-grasă-și-cu-acnee" },
    { title: "Rutina de îngrijire anti-îmbătrânire pe timp de noapte", url: "/ro/Rutina-de-îngrijire-anti-îmbătrânire-pe-timp-de-noapte" },
    { title: "Rutina de îngrijire a pielii iarna", url: "/ro/Rutina-de-îngrijire-a-pielii-iarna" },
    { title: "Rutina de îngrijire a pielii iarna adolescenți ten gras", url: "/ro/Rutina-de-îngrijire-a-pielii-iarna-adolescenți-ten-gras" },
    { title: "Rutina de Îngrijire de Dimineață pentru Piele Strălucitoare", url: "/ro/Rutina-de-Îngrijire-de-Dimineață-pentru-Piele-Strălucitoare" },
    { title: "Rutina îngrijire iarna acasă piele mixtă", url: "/ro/rutina-îngrijire-iarna-acasă-piele-mixtă" },
    { title: "Sfaturi de îngrijire a pielii grase iarna pentru un ten luminos", url: "/ro/sfaturi-de-îngrijire-a-pielii-grase-iarna-pentru-un-ten-luminos" },
    { title: "Sfaturi de noapte pentru controlul pielii grase iarna", url: "/ro/Sfaturi-de-noapte-pentru-controlul-pielii-grase-iarna" },
    { title: "Sfaturi hidratare piele grasa iarna", url: "/ro/sfaturi-hidratare-piele-grasa-iarna" },
    { title: "Sfaturi îngrijire piele grasă iarna", url: "/ro/sfaturi-îngrijire-piele-grasă-iarna" },
    { title: "Sfaturi pentru controlul sebumului iarna", url: "/ro/Sfaturi-pentru-controlul-sebumului-iarna" },
    { title: "Sfaturi pentru îngrijirea pielii predispuse la acnee în timpul iernii", url: "/ro/Sfaturi-pentru-îngrijirea-pielii-predispuse-la-acnee-în-timpul-iernii" }
  ],
  lt: [
    { title: "Geriausi Natūralios Odos Priežiūros Patarimai Paaugliams", url: "/lt/geriausi-natūralios-odos-priežiūros-patarimai-paaugliams" },
    { title: "Geriausi Žiemos Odos Drėkinimo Patarimai", url: "/lt/geriausi-žiemos-odos-drėkinimo-patarimai" },
    { title: "Geriausia Paprasta Odos Priežiūra Paaugliams Lietuvoje", url: "/lt/geriausia-paprasta-odos-priežiūra-paaugliams-Lietuvoje" },
    { title: "Odos Priežiūros Patarimai Paaugliui su Akne", url: "/lt/odos-priežiūros-patarimai-paaugliui-su-akne" },
    { title: "Odos Priežiūros Patarimai Pradedantiesiems", url: "/lt/odos-priežiūros-patarimai-pradedantiesiems" },
    { title: "Odos Priežiūros Rutina po 30 Lietuva", url: "/lt/odos-priežiūros-rutina-po-30-Lietuva" },
    { title: "Švytinčios Odos Rutina Žiemą Lietuvoje", url: "/lt/švytinčiosodos-rutina-žiemą-Lietuvoje" },
    { title: "Žiemos Odos Priežiūra Paaugliams Lietuvoje", url: "/lt/žiemos-odos-priežiūra-paaugliams-lietuvoje" },
    { title: "Žiemos Odos Priežiūra Sausai Odai Lietuvoje", url: "/lt/Žiemos-odos-priežiūra-sausai-odai-Lietuvoje" }
  ]
};

export default function Home() {
  const [lang, setLang] = useState('ro'); // ডিফল্ট Romanian

  return (
    <Layout>
      <Head>
        <title>Lemonskn – Skincare & Beauty Guide</title>
        <meta name="description" content="Science-backed skincare and beauty advice. No sales, no products – just pure knowledge." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://lemonskn.com/" />
        <link rel="alternate" hrefLang="en" href="https://lemonskn.com/" />
        <link rel="alternate" hrefLang="lt" href="https://lemonskn.com/lt" />
        <link rel="alternate" hrefLang="ro" href="https://lemonskn.com/ro" />
        <link rel="alternate" hrefLang="x-default" href="https://lemonskn.com/" />
      </Head>

      <main style={{ textAlign: 'center', padding: '2rem 1rem', background: '#f9f9f9' }}>
        <img src="/lemonskn.png" alt="Lemonskn" style={{ width: '17%', maxWidth: '200px', marginBottom: '1rem' }} />
        <h1 style={{ fontSize: '2.5rem', color: '#024308' }}>Welcome to Lemonskn.com</h1>
        <p style={{ fontSize: '1.2rem', color: '#444', maxWidth: '700px', margin: '0 auto 2rem', lineHeight: '1.7' }}>
          We are an educational skincare & beauty guide.<br />
          No products. No sales. Just science-backed advice.
        </p>

        {/* Language selector */}
        <div style={{ marginBottom: '2rem' }}>
          <button onClick={() => setLang('lt')} style={{ marginRight: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}>Read in Lithuanian</button>
          <button onClick={() => setLang('ro')} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>Read in Romanian</button>
        </div>

        {/* Article list */}
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'left' }}>
          <h2>Articles ({lang === 'lt' ? 'Lithuanian' : 'Romanian'})</h2>
          <ul>
            {articles[lang].map((article, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>
                <a href={article.url} style={{ color: '#011603ff' }}>{article.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
}
