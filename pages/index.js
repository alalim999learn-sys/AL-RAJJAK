// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../component/Layout';
import { getAllPosts } from '../lib/posts';

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
}

export default function Home({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Lemonskn</title>
        <meta
          name="description"
          content="Explore top fashion and beauty picks — all under 99% budget. Smart shopping, beautiful living. Discover expert reviews and buying guides."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://lemonskn.com/" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/lemonskn.png" type="image/png" />
        <meta name="theme-color" content="#ffffff" />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="Fashion & Beauty Under Budget | Lemonskn" />
        <meta
          property="og:description"
          content="Explore top fashion and beauty picks — all under 99% budget. Smart shopping, beautiful living."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lemonskn.com/" />
        <meta property="og:image" content="https://lemonskn.com/lemonskn.png" />
{/* এই meta tag টা যোগ করো Head এর মধ্যে */}
{/* এই meta tag টা যোগ করো Head এর মধ্যে */}
<link rel="icon" sizes="192x192" href="/lemonskn.png" />
<link rel="apple-touch-icon" href="/lemonskn.png" />

{/* আর লোগোটা যদি 512x512 px-এর একটা ভার্সন থাকে তাহলে এটা দাও */}
<link rel="icon" type="image/png" sizes="512x512" href="/lemonskn-512.png" />
        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fashion & Beauty Under Budget | Lemonskn" />
        <meta
          name="twitter:description"
          content="Atraskite geriausias mados ir grožio pasirinkimus – visi už mažiau nei 99% biudžeto. Išmanus apsipirkimas, gražus gyvenimas."
        />
        <meta name="twitter:image" content="https://lemonskn.com/lemonskn.png" />

        {/* ✅ Organization + Website JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Organization",
                    "name": "Lemonskn",
                    "url": "https://lemonskn.com/",
                    "logo": "https://lemonskn.com/lemonskn.png",
                    "sameAs": [
                      "https://www.instagram.com/lemonskn",
                      "https://www.facebook.com/lemonskn",
                      "https://www.youtube.com/@lemonskn"
                    ],
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "contactType": "customer service",
                      "email": "info@lemonskn.com"
                    }
                  },
                  {
                    "@type": "WebSite",
                    "url": "https://lemonskn.com/",
                    "name": "Lemonskn",
                    "potentialAction": {
                      "@type": "SearchAction",
                      "target": "https://lemonskn.com/search?q={search_term_string}",
                      "query-input": "required name=search_term_string"
                    }
                  }
                ]
              },
              null,
              2
            ),
          }}
        />
      </Head>

     <header className="hu">
  <img className="homelogo" src="/lemonskn.png" alt="Lemonskn Logo" />
  <h1>Welcome to lemonskn.com</h1>
  <p>
    We are an educational guide – we don’t sell or offer any products. 
    We started this project to help people find reliable, clear, and science-backed information 
    about skincare and beauty.
  </p>
 
</header>


   
      <style jsx>{`
        .hu {
          text-align: center;
          line-height: 1.6;
          width: 100%;
          padding: 2rem 1rem;
        }
        .homelogo {
          width: 17%;
        }
        .hu h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: rgb(2, 67, 8);
        }
        .hu p {
          font-size: 1.25rem;
          color: #555;
          max-width: 600px;
          margin: 0 auto;
        }
        .section {
          max-width: 1000px;
          margin: 2rem auto;
          padding: 0 1rem;
        }
        .post-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .card {
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
          padding: 1.5rem;
          transition: transform 0.2s ease;
        }
        .card:hover {
          transform: translateY(-5px);
        }
        .card h3 {
          color: #d63384;
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }
        .card a {
          color: #b02060;
          text-decoration: none;
          font-weight: 500;
        }
        .card a:hover {
          text-decoration: underline;
        }
        div {
          margin: 2% 0;
        }
        div h3 {
          text-align: left;
        }
        @media (max-width: 600px) {
          .hu h1 {
            font-size: 2.2rem;
          }
          .homelogo {
            width: 50%;
          }
          .hu p {
            font-size: 1rem;
          }
        }
      `}</style>
    </Layout>
  );
}
