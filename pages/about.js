import Layout from '../component/Layout';  // Layout এর সঠিক পাথ ইমপোর্ট করুন

export default function AboutPage() {
  return (
    <Layout>  {/* Layout কম্পোনেন্টটি ব্যবহার করুন */}
    <title>About</title>
      <div className="about-container">
        <h1>About Me</h1>
        <p>
          Hi! I'm owner of lemonskn.com, a fashion and beauty enthusiast who loves sharing tips on
          makeup, skincare, and stylish outfits — from everyday looks to elegant dresses.
        </p>

        <p>
          I started this blog to help others discover affordable beauty products, trendy clothing,
          and honest reviews of items I personally try. Whether you're looking for the perfect
          lipstick or a dress for a night out, I’ve got you covered.
        </p>

        <p>
          Everything I post is based on real experience, not just ads. I work with trusted
          affiliate programs like Zalando and Awin to recommend only products I truly love — 
          and yes, I may earn a small commission if you shop through my links, at no extra cost to you.
        </p>

        <p>
          Thank you for stopping by — I hope my content inspires you to look and feel your best!
        </p>

        <p>
          💌 Want to reach out? Head over to the <a href="/contact">Contact</a> page.
        </p>
      </div>

      <style jsx>{`
        .about-container {
          max-width: 700px;
          margin: 0 auto;
          padding: 2rem 1rem;
          font-family:  ;
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
