// pages/contact.js
import { useState } from 'react';
import Layout from '../component/Layout';  // Layout কম্পোনেন্ট ইনপোর্ট

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required!');
      return;
    }

    setError('');
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Layout>
      <div className="contact-container">
        <h1>Contact Us</h1>

        {isSubmitted ? (
          <div className="thank-you-message">
            <h2>Thank you for reaching out!</h2>
            <p>We will get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {error && <p className="error">{error}</p>}

            <button type="submit">Submit</button>
          </form>
        )}

        <style jsx>{`
          .contact-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 2rem 1rem;
            font-family: 'Arial', sans-serif;
            color: #333;
          }

          h1 {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 1.5rem;
          }

          .form-group {
            margin-bottom: 1.5rem;
          }

          label {
            display: block;
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
          }

          input,
          textarea {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 1rem;
          }

          textarea {
            resize: vertical;
            min-height: 150px;
          }

          button {
            background-color: #007bff;
            color: white;
            padding: 0.8rem 1.5rem;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
          }

          button:hover {
            background-color: #0056b3;
          }

          .error {
            color: #e91e63;
            font-size: 0.9rem;
            margin-top: 0.5rem;
          }

          .thank-you-message {
            text-align: center;
          }

          .thank-you-message h2 {
            color: green;
          }
        `}</style>
      </div>
    </Layout>
  );
}
