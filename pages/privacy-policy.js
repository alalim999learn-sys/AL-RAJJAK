import Layout from '../component/Layout';

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="privacy-container">
        <h1>Privacy Policy</h1>

        <p>
          At <strong>lemonskn.com</strong>, we respect your privacy. This website does not track you,
          does not use analytics tools, and does not collect personal data from visitors.
        </p>

        <h2>Cookies</h2>
        <p>
          We only use a basic cookie to remember your cookie consent choice (Accept or Reject).
          This cookie does not collect any personal data, and it is not used for advertising or
          tracking.
        </p>

        <h2>Contact Form</h2>
        <p>
          If you use the contact form, the data you enter (name, email, message) is not stored on
          any server. It is only used temporarily to display a “Thank You” message. We do not store,
          share, or process that information in any way.
        </p>

        <h2>No Analytics or Advertising</h2>
        <p>
          This website does not use Google Analytics, Facebook Pixel, or any ad tracking tools.
        </p>

        <h2>Affiliate Links (Future Use)</h2>
        <p>
          Currently, we do not use affiliate links. In the future, we may participate in programs
          like Awin or Zalando. If affiliate links are added, they may include tracking provided by
          those networks. When that happens, we will update this Privacy Policy and implement a
          proper cookie consent manager (CMP).
        </p>

        <h2>Your Rights</h2>
        <p>
          Since we don’t store or process any personal data, there is nothing to request or delete.
          However, if you have questions, feel free to <a href="/contact">contact us</a>.
        </p>

        <h2>Last Updated</h2>
        <p>This privacy policy was last updated on October 5, 2025.</p>

        <style jsx>{`
          .privacy-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem 1rem;
            font-family: Arial, sans-serif;
            color: #333;
            line-height: 1.7;
          }

          h1 {
            font-size: 2rem;
            margin-bottom: 1.5rem;
          }

          h2 {
            font-size: 1.3rem;
            margin-top: 2rem;
            color: #111;
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
        `}</style>
      </div>
    </Layout>
  );
}
