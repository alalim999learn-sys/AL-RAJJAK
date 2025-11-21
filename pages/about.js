import Head from 'next/head';
import Link from 'next/link';
import Layout from '../component/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About - lemonskn.com</title>
        <meta name="description" content="About the owner of lemonskn.com - fashion and beauty tips, honest reviews, and affordable style inspiration." />
      </Head>

      <main className="about-container">
 
<h1>About Me</h1> 
<p> Hi! I’m the owner of lemonskn.com — a fashion and beauty enthusiast who loves sharing tips on makeup, skincare, and stylish outfits, from everyday looks to elegant dresses. </p>
 <p> I started this blog to help others discover affordable beauty products, trendy clothing, and honest reviews of items I’ve personally tested. Whether you're searching for the perfect lipstick or the ideal evening dress, I’m here to help. </p>
  <p> All my posts are based on real experience, not advertisements. I collaborate with trusted partners like Zalando and Awin to recommend only the products I truly love — and yes, I may earn a small commission if you purchase through my links, at no extra cost to you. </p>
   <p> Thank you for visiting — I hope my articles inspire you to look and feel your best! </p>
    <p> 💌 Want to get in touch? Visit the <Link href="/contact">Contact</Link> page. </p>
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



