// pages/index.js
import Layoutro from '../../component/Layoutro';
import { useState } from "react";

const categories = [
  {
    name: "Prevenirea acneei 🧴",
    articles: [
      { title: "Cum să eviți coșurile pe pielea grasă iarna", url: "https://lemonskn.com/ro/Evitați-Coșurile-de-Pe-Pielea-Grasă-În-Iarnă" },
      { title: "Sfaturi pentru controlul sebumului iarna", url: "https://lemonskn.com/ro/Sfaturi-pentru-controlul-sebumului-iarna" },
    ],
  },
  {
    name: "Ingrediente naturale 🌿",
    articles: [
      { title: "Ingrediente naturale pentru îngrijirea pielii iarna", url: "https://lemonskn.com/ro/ingrediente-naturale-pentru-îngrijirea-pielii-iarna" },
      { title: "Remedii naturale pentru pielea grasă iarna", url: "https://lemonskn.com/ro/Remedii-Naturale-pentru-Pielea-Grasă-în-Iarnă" },
      { title: "Tratamente naturale pentru tenul gras iarna", url: "https://lemonskn.com/ro/Remedii-naturale-pentru-tenul-gras-iarna" },
    ],
  },
  {
    name: "Ten echilibrat ⚖️",
    articles: [
      { title: "Rutina pentru menținerea pielii echilibrate iarna", url: "https://lemonskn.com/ro/îngrijirea-pielii-echilibrate-iarna" },
    ],
  },
  {
    name: "Îngrijire adulți 🧓",
    articles: [
      { title: "Îngrijirea pielii adulților în sezonul rece", url: "https://lemonskn.com/ro/îngrijirea-pielii-iarna-adulți-România" },
    ],
  },
  {
    name: "Piele mixtă & grasă 🌀",
    articles: [
      { title: "Cum să îngrijești pielea mixtă și grasă iarna", url: "https://lemonskn.com/ro/ingrijire-piele-mixta-grasa-iarna" },
    ],
  },
  {
    name: "Curățare cu ulei 🛁",
    articles: [
      { title: "Curățarea pielii uscate folosind ulei", url: "https://lemonskn.com/ro/metoda-de-curățare-cu-ulei-pentru-pielea-uscată" },
    ],
  },
  {
    name: "Protecție iarnă ❄️",
    articles: [
      { title: "Protecția pielii grase iarna", url: "https://lemonskn.com/ro/Protecția-pielii-iarna-pentru-tenul-gras" },
    ],
  },
  {
    name: "Rutina dimineață ☀️",
    articles: [
      { title: "Rutina de dimineață pentru pielea grasă iarna", url: "https://lemonskn.com/ro/Rutina-de-Dimineață-pentru-Piele-Grasă-iarna" },
    ],
  },
  {
    name: "Dimineață piele mixtă 🌤️",
    articles: [
      { title: "Rutina de dimineață pentru pielea mixtă iarna", url: "https://lemonskn.com/ro/Rutina-de-dimineață-pentru-piele-mixtă-iarna" },
    ],
  },
  {
    name: "Hidratare iarna 💧",
    articles: [
      { title: "Rutina de hidratare pentru pielea grasă și cu acnee", url: "https://lemonskn.com/ro/rutina-de-hidratare-iarna-pentru-pielea-grasă-și-cu-acnee" },
    ],
  },
  {
    name: "Rutina de noapte 🌙",
    articles: [
      { title: "Rutina anti-îmbătrânire pe timpul nopții", url: "https://lemonskn.com/ro/Rutina-de-îngrijire-anti-îmbătrânire-pe-timp-de-noapte" },
    ],
  },
  {
    name: "Rutina completă ❄️",
    articles: [
      { title: "Îngrijirea pielii pe tot parcursul iernii", url: "https://lemonskn.com/ro/Rutina-de-îngrijire-a-pielii-iarna" },
    ],
  },
  {
    name: "Ten adolescent 👶",
    articles: [
      { title: "Rutina pentru adolescenți cu ten gras iarna", url: "https://lemonskn.com/ro/Rutina-de-îngrijire-a-pielii-iarna-adolescenți-ten-gras" },
    ],
  },
  {
    name: "Ten strălucitor ✨",
    articles: [
      { title: "Rutina de dimineață pentru un ten radiant", url: "https://lemonskn.com/ro/Rutina-de-Îngrijire-de-Dimineață-pentru-Piele-Strălucitoare" },
    ],
  },
  {
    name: "Rutina acasă 🏠",
    articles: [
      { title: "Rutina de îngrijire acasă pentru pielea mixtă iarna", url: "https://lemonskn.com/ro/rutina-îngrijire-iarna-acasă-piele-mixtă" },
    ],
  },
  {
    name: "Ten luminos 💡",
    articles: [
      { title: "Sfaturi pentru un ten luminos pe timp de iarnă", url: "https://lemonskn.com/ro/sfaturi-de-îngrijire-a-pielii-grase-iarna-pentru-un-ten-luminos" },
    ],
  },
  {
    name: "Noapte control 🌙",
    articles: [
      { title: "Sfaturi de seară pentru controlul pielii grase", url: "https://lemonskn.com/ro/Sfaturi-de-noapte-pentru-controlul-pielii-grase-iarna" },
    ],
  },
  {
    name: "Hidratare suplimentară 💧",
    articles: [
      { title: "Sfaturi de hidratare pentru pielea grasă iarna", url: "https://lemonskn.com/ro/sfaturi-hidratare-piele-grasa-iarna" },
    ],
  },
  {
    name: "Acnee & Sebum 🧴",
    articles: [
      { title: "Sfaturi pentru îngrijirea pielii predispuse la acnee iarna", url: "https://lemonskn.com/ro/sfaturi-îngrijire-piele-grasă-iarna" },
      { title: "Cum să controlezi excesul de sebum", url: "https://lemonskn.com/ro/Sfaturi-pentru-controlul-sebumului-iarna" },
      { title: "Sfaturi pentru prevenirea acneei iarna", url: "https://lemonskn.com/ro/Sfaturi-pentru-îngrijirea-pielii-predispuse-la-acnee-în-timpul-iernii" },
    ],
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Layoutro>
    <div style={{ padding: "1rem", fontFamily: "sans-serif", textAlign:  'center' }}>
      <img src="/lemonskn.png" alt="Lemonskn" style={{ width: '19%', maxWidth: '399px', marginBottom: '1.5rem', }} />
      <h1 style={{textAlign: "center"}}>Lemonskn</h1>
      <p>Bine ați venit la lemoskn.com</p>
      <h2>🧴 Categorii Îngrijire Piele</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "0.5rem",
          marginTop: "1rem",
        }}
      >
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: "0.5rem",
              cursor: "pointer",
              borderRadius: "5px",
              
              border:  "1px solid #333",
              background: "#f0f0f0",
              fontSize: "0.9rem",
              textAlign: "center",
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div
          style={{
           
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "1rem",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "1.5rem",
              borderRadius: "10px",
              width: "100%",
              maxWidth: "500px",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <h2>{selectedCategory.name}</h2>
            <ul>
              {selectedCategory.articles.map((article, i) => (
                <li key={i} style={{ marginBottom: "0.5rem" }}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0070f3", textDecoration: "underline" }}
                  >
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedCategory(null)}
              style={{
                marginTop: "1rem",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              ❌ Închide
            </button>
          </div>
        </div>
      )}
    </div>
    </Layoutro>
  );
}
