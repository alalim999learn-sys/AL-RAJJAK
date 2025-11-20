// component/Layoutlt.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Layoutro.module.css'; // you can keep the same CSS
import FooterLT from './FooterLT';

export default function LayoutLT({ children }) {
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
          aria-label="Atidaryti meniu"
          aria-expanded={sidebarActive}
          aria-controls="sidebar"
        >
          &#9776;
        </button>

        <div className={styles.middle}>lemonskn.com</div>
        <img className={styles.logo} src="/lemonskn.png" alt="Logotipas" />
      </header>

      <nav
        id="sidebar"
        className={`${styles.sidebar} ${sidebarActive ? styles.active : ''}`}
        aria-label="Šoninė navigacija"
      >
        <button
          className={styles.closeButton}
          onClick={closeSidebar}
          aria-label="Uždaryti meniu"
        >
          &times;
        </button>

        <ul>
          <li>
            <Link href="/lt" passHref>
              <span onClick={closeSidebar} className={styles.navLink}>Pagrindinis</span>
            </Link>
          </li>
          <li>
            <Link href="/lt/about" passHref>
              <span onClick={closeSidebar} className={styles.navLink}>Apie mus</span>
            </Link>
          </li>
          <li>
            <Link href="/lt/contact" passHref>
              <span onClick={closeSidebar} className={styles.navLink}>Kontaktai</span>
            </Link>
          </li>
          <li>
            <Link href="/lt/privacy-policy" passHref>
              <span onClick={closeSidebar} className={styles.navLink}>Privatumo politika</span>
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

      {/* Main content */}
      <main className={styles.mainContent}>{children}</main>

      {/* Lithuanian Footer */}
      <FooterLT />
    </>
  );
}
