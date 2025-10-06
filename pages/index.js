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
        <title> Fashion & Beauty Under Budget</title>
        <meta name="description" content=" Al-Rajjak" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Head>

      <style jsx>{`
        .hu {
         
        
          text-align: center;
          line-height:59px;
          width: 100%;
          height: 100%;
        }
        
        .hu h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color:rgb(2, 67, 8);
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
          font-size: 1.2rem;
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

        @media (max-width: 600px) {
          .hero h1 {
            font-size: 2.2rem;
          }

          .hero p {
            font-size: 1rem;
          }
        }
      `}</style>
      
      <div className="hu">
        <img className='homelogo' src="/lemonskn.png"></img>
        <h1>Welcome to lemonskn.com</h1>
     
        <p>Explore top fashion and beauty picks — all under 99% budget. Smart shopping, beautiful living.</p>
      </div>

    
    </Layout>
  );
}
