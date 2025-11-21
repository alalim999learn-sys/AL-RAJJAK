"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Layout from '../../component/Layoutlt';

export default function ContactForm({ cookieConsent }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [responseMsg, setResponseMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  // Lazy load reCAPTCHA only if consent
  const ReCAPTCHA = cookieConsent
    ? dynamic(() => import("react-google-recaptcha"), { ssr: false })
    : null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setResponseMsg("⚠️ Please fill in all fields.");
      return;
    }

    if (cookieConsent) {
      if (!recaptchaToken) {
        setResponseMsg("⚠️ Please complete the reCAPTCHA.");
        return;
      }
      formData.captcha_token = recaptchaToken;
    }

    setResponseMsg("");
    setIsSubmitting(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "6a9e7033-bef8-4435-abc7-007bf34203af", // your key
          ...formData,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setResponseMsg("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setRecaptchaToken(null); // reset token
      } else {
        setResponseMsg("❌ Failed to send message. Try again later.");
      }
    } catch (err) {
      console.error(err);
      setResponseMsg("⚠️ Error sending message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} noValidate>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
        />

        {cookieConsent && ReCAPTCHA ? (
          <ReCAPTCHA
            sitekey="6LeTTvIrAAAAAFDqsWouZTRoq4A0XBbkaoF1sfhf"
            onChange={(token) => setRecaptchaToken(token)}
          />
        ) : (
          <p style={{ color: 'red', textAlign: 'center' }}>
            Accept cookies to enable spam protection (reCAPTCHA)
          </p>
        )}

        <button type="submit" disabled={isSubmitting || cookieConsent === false}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>

        {responseMsg && <p style={{ textAlign: 'center', marginTop: '1rem' }}>{responseMsg}</p>}
      </form>

      <style jsx>{`
        form {
          max-width: 400px;
          margin: 2rem auto;
          padding: 2rem;
          background: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        input, textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          margin-bottom: 1.25rem;
          border: 1.5px solid #ccc;
          border-radius: 5px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
          box-sizing: border-box;
          font-family: inherit;
        }
        input:focus, textarea:focus {
          border-color: #4a90e2;
          outline: none;
          box-shadow: 0 0 6px rgba(74, 144, 226, 0.6);
        }
        textarea {
          min-height: 120px;
          resize: vertical;
        }
        button {
          background-color: #4a90e2;
          color: white;
          padding: 0.75rem 1.5rem;
          font-size: 1.1rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          width: 100%;
        }
        button:disabled {
          background-color: #999;
          cursor: not-allowed;
        }
        button:hover:not(:disabled) {
          background-color: #357abd;
        }
        p {
          font-weight: 600;
          color: #333;
        }
        :global(.g-recaptcha) {
          margin-bottom: 1.25rem;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </Layout>
  );
}
