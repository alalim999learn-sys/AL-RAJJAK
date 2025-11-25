// component/Layoutro.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Layoutro.module.css';
import FooterRO from './footerro';

export default function LayoutRO({ children }) {
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
          aria-label="Deschide meniul"
          aria-expanded={sidebarActive}
          aria-controls="sidebar"
        >
          &#9776;
        </button>

        <div className={styles.middle}>lemonskn.com</div>
        <img className={styles.logo} src="/lemonskn.png" />
      </header>

      <nav
        id="sidebar"
        className={`${styles.sidebar} ${sidebarActive ? styles.active : ''}`}
        aria-label="Navigare laterală"
      >
        <button
          className={styles.closeButton}
          onClick={closeSidebar}
          aria-label="Închide meniul"
        >
          &times;
        </button>

        <ul>
          <li>
            <Link href="/ro" passHref>
              <span onClick={closeSidebar} className={styles.navLink}>Acasă</span>
            </Link>
          </li>
          <li>
            <Link href="/ro/about" passHref>
              <span onClick={closeSidebar} className={styles.navLink}>Despre noi</span>
            </Link>
          </li>
          <li>
            <Link href="/ro/contact" passHref>
              <span onClick={closeSidebar} className={styles.navLink}>Contact</span>
            </Link>
          </li>
          <li>
            <Link href="/ro/privacy-policy" passHref>
              <span onClick={closeSidebar} className={styles.navLink}>Politica de confidențialitate</span>
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

      {/* Romanian Footer */}
      <FooterRO />
    </>
  );
}
