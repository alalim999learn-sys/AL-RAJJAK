//Component/Layout.js
import { useState, useEffect } from 'react';

import Link from 'next/link';
import styles from './Layout.module.css';


export default function Layout({ children }) {
  const [sidebarActive, setSidebarActive] = useState(false);  // Sidebar Active কিনা
  const [hasShadow, setHasShadow] = useState(false);  // Navbar এর শ্যাডো

  useEffect(() => {
    const handleScroll = () => setHasShadow(window.scrollY > 0);  // Scroll হলে Navbar Shadow
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openSidebar = () => setSidebarActive(true);  // Sidebar ওপেন
  const closeSidebar = () => setSidebarActive(false);  // Sidebar ক্লোজ

  return (
    <>
      <header className={`${styles.navbar} ${hasShadow ? styles.shadow : ''}`}>
        <button
          className={styles.menuButton}
          onClick={openSidebar}
          aria-label="Open menu"
          aria-expanded={sidebarActive}
          aria-controls="sidebar"
        >
          &#9776;
        </button>

        <div className={styles.middle}>lemonskn.com</div>
    
        <img className={styles.logo} src='/lemonskn.png'></img>
      </header>

      <nav
        id="sidebar"
        className={`${styles.sidebar} ${sidebarActive ? styles.active : ''}`}
        aria-label="Sidebar Navigation"
      >
        <button
          className={styles.closeButton}
          onClick={closeSidebar}
          aria-label="Close menu"
        >
          &times;
        </button>

        <ul>
          <li>
            <Link href="/" onClick={closeSidebar} className={styles.navLink}>Pagrindinis (Home)</Link>
          </li>
          <li>
            <Link href="/about" onClick={closeSidebar} className={styles.navLink}>Apie (About)</Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeSidebar} className={styles.navLink}>Kontaktai (Contact)</Link>
          </li>
          <li>
            <Link href="/privacy-policy" onClick={closeSidebar} className={styles.navLink}>Privatumo politika (Privacy Policy)</Link>
          </li>
        </ul>
      </nav>

      {/* Sidebar Overlay */}
      {sidebarActive && (
        <div
          className={styles.overlay}
          onClick={closeSidebar}
          aria-hidden="true"
          tabIndex={-1}
        />
      )}

      <main className={styles.mainContent}>{children}</main>
    </>
  );
}
