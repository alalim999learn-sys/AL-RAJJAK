// pages/services.js

import Layout from '../component/Layout';

export default function Services() {
  return (
    <Layout>
      <style jsx>{`
        .wrapper {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fef9f9;
          padding: 2rem;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }

        .services-container {
          background: white;
          padding: 3rem 2.5rem;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          max-width: 800px;
          width: 100%;
        }

        h2 {
          text-align: center;
          margin-bottom: 2rem;
          color: #d63384;
        }

        .service {
          margin-bottom: 2rem;
        }

        .service h3 {
          margin: 0;
          color: #b02060;
          font-size: 1.25rem;
        }

        .service p {
          margin-top: 0.5rem;
          color: #555;
          line-height: 1.6;
        }

        @media (max-width: 600px) {
          .services-container {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>

      <div className="wrapper">
        <div className="services-container">
          <h2>Our Beauty & Fashion Services</h2>

          <div className="service">
            <h3>Personal Styling</h3>
            <p>We help you find the perfect outfit for any occasion — weddings, parties, or everyday glam.</p>
          </div>

          <div className="service">
            <h3>Makeup Consultation</h3>
            <p>Get personalized makeup advice tailored to your skin type, tone, and preferences.</p>
          </div>

          <div className="service">
            <h3>Skincare Routines</h3>
            <p>Learn about daily skincare regimens using our curated cosmetic products for glowing skin.</p>
          </div>

          <div className="service">
            <h3>Custom Outfit Design</h3>
            <p>Work with our designers to create unique, custom-made dresses for special occasions.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
