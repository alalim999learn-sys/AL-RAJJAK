import Head from 'next/head'
import '../src/styles/globals.css'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [consent, setConsent] = useState(null)

  // কুকি থেকে মান পড়ার ফাংশন
  const getCookie = (name) => {
    if (typeof window === 'undefined') return null
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop().split(';').shift()
    return null
  }

  // কুকি সেট করার ফাংশন (১ বছর মেয়াদ)
  const setCookie = (name, value, days = 365) => {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    const expires = 'expires=' + date.toUTCString()
    document.cookie = `${name}=${value}; ${expires}; path=/`
  }

  // মাউন্ট হওয়ার সময় একবার কুকি পড়ে স্টেটে সেট করা হবে
  useEffect(() => {
    const cookieConsent = getCookie('cookie-consent')
    if (cookieConsent === 'true') setConsent(true)
    else if (cookieConsent === 'false') setConsent(false)
    else setConsent(null)
  }, [])

  // ইউজারের সিদ্ধান্ত অনুযায়ী কুকি সেট ও স্টেট আপডেট
  const acceptCookies = () => {
    setCookie('cookie-consent', 'true')
    setConsent(true)
  }

  const rejectCookies = () => {
    setCookie('cookie-consent', 'false')
    setConsent(false)
  }

  // এনালাইটিকস বা অন্য স্ক্রিপ্ট লোড করা (ঐচ্ছিক)
  useEffect(() => {
    if (consent === true) {
      console.log('Analytics loaded because user accepted cookies.')
      // এখানে আপনার analytics লোড কোড দিন
    }
  }, [consent])

  // কনসেন্ট ব্যানার কম্পোনেন্ট
  const ConsentBanner = () => (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#333',
      color: 'white',
      padding: '30px 40px',
      borderRadius: '10px',
      boxShadow: '0 2px 15px rgba(0,0,0,0.5)',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      maxWidth: '500px',
      width: '70%',
      zIndex: 1000,
    }}>
      <p>This website uses cookies to enhance your experience. By clicking "Accept" you agree to our <a href="/privacy-policy" style={{ color: '#e91e63' }}>Privacy Policy</a>.</p>
      <div style={{ marginTop: 20 }}>
        <button onClick={acceptCookies} style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '15px 25px',
          marginRight: '15px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '18px',
        }}>Accept</button>
        <button onClick={rejectCookies} style={{
          backgroundColor: '#f44336',
          color: 'white',
          padding: '15px 25px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '18px',
        }}>Reject</button>
      </div>
    </div>
  )

  return (
    <>
      <Head>
        <title>My Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/lemonskn.png" />
      </Head>

      {/* কনসেন্ট না নেওয়া থাকলে ব্যানার দেখাবে */}
      {consent === null && <ConsentBanner />}

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
