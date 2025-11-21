// components/LayoutRO.js
// components/Layout.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Layout.module.css';
import FooterLT from './FooterLT';

export default function Layout({ children }) {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasShadow(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openSidebar = () => setSidebarActive(true);
  const closeSidebar = () => setSidebarActive(false);

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
        <img className={styles.logo} src="/lemonskn.png" alt="Logo" />
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
            <Link href="/" passHref>
              <span onClick={closeSidebar} className={styles.navLink}> (Home)</span>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <span onClick={closeSidebar} className={styles.navLink}>(About)</span>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <span onClick={closeSidebar} className={styles.navLink}>(Contact)</span>
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy" passHref>
              <span onClick={closeSidebar} className={styles.navLink}>(Privacy Policy)</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Overlay */}
      {sidebarActive && (
        <div
          className={styles.overlay}
          onClick={closeSidebar}
          aria-hidden="true"
          tabIndex={-1}
        />
      )}

      {/* Main Content */}
      <main className={styles.mainContent}>{children}</main>

      {/* Lithuanian Footer */}
      <FooterLT />
    </>
  );
}  