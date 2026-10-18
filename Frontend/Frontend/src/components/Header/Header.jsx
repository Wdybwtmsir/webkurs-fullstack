import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import AuthModal from '../AuthModal/AuthModal';

import logo from '../../assets/icons/logo.png';
import phoneIcon from '../../assets/icons/phone-icon.png';
import fbIcon from '../../assets/icons/fb-icon.png';
import twIcon from '../../assets/icons/tw-icon.png';
import inIcon from '../../assets/icons/in-icon.png';
import calendarIcon from '../../assets/icons/calendar-icon.png';

function Header() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('webkurs_user');
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleAuthSuccess = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem('webkurs_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('webkurs_user');
    alert('Вы вышли из аккаунта.');
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
              <img src={logo} alt="Beautyness Logo" />
            </Link>
            <div className={styles.phone}>
              <img src={phoneIcon} alt="Phone" />
              <span>Call Us - (+22) 123 456 7890</span>
            </div>
          </div>

          <div className={styles.rightSide}>
            <nav className={styles.nav}>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li className={styles.hasDropdown}>
                  <span className={styles.dropdownTrigger}>Pages <span>▼</span></span>
                  <ul className={styles.dropdownMenu}>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/team-single">Team Single</Link></li>
                    <li><Link to="/services-single">Service Single</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/blog-single">Blog Single</Link></li>
                    <li><Link to="/locations">Locations</Link></li>
                    <li><Link to="/password-protected">Password Protected</Link></li>
                    <li><Link to="/licenses">Licenses</Link></li>
                    <li><Link to="/changelog">Changelog</Link></li>
                  </ul>
                </li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>

            <div className={styles.socials}>
              <a href="#"><img src={fbIcon} alt="Facebook" /></a>
              <a href="#"><img src={twIcon} alt="Twitter" /></a>
              <a href="#"><img src={inIcon} alt="LinkedIn" /></a>
            </div>

            <div className={styles.userSection}>
              {currentUser ? (
                <div className={styles.userBox}>
                  <span className={styles.userName}>👤 {currentUser.username}</span>
                  <button onClick={handleLogout} className={styles.logoutBtn}>
                    Выйти
                  </button>
                </div>
              ) : (
                <button onClick={() => setIsAuthOpen(true)} className={styles.loginBtn}>
                  Войти
                </button>
              )}
            </div>

            <button className={styles.reservationBtn}>
              <img src={calendarIcon} alt="Calendar" />
              RESERVATION
            </button>

            <button
              className={`${styles.burgerBtn} ${isMobileMenuOpen ? styles.burgerActive : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className={styles.mobileDrawer}>
            <nav className={styles.mobileNav}>
              <ul>
                <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
                <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
                <li><Link to="/services" onClick={closeMobileMenu}>Services</Link></li>
                <li><Link to="/services-single" onClick={closeMobileMenu}>Service Single</Link></li>
                <li><Link to="/team" onClick={closeMobileMenu}>Our Team</Link></li>
                <li><Link to="/team-single" onClick={closeMobileMenu}>Team Single</Link></li>
                <li><Link to="/blog" onClick={closeMobileMenu}>Blog &amp; News</Link></li>
                <li><Link to="/blog-single" onClick={closeMobileMenu}>Blog Single</Link></li>
                <li><Link to="/locations" onClick={closeMobileMenu}>Locations</Link></li>
                <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
                <li><Link to="/licenses" onClick={closeMobileMenu}>Licenses</Link></li>
                <li><Link to="/changelog" onClick={closeMobileMenu}>Changelog</Link></li>
              </ul>
            </nav>

            <div className={styles.mobileActions}>
              {currentUser ? (
                <div className={styles.mobileUserBox}>
                  <span>👤 {currentUser.username}</span>
                  <button onClick={() => { handleLogout(); closeMobileMenu(); }}>Выйти</button>
                </div>
              ) : (
                <button
                  className={styles.mobileLoginBtn}
                  onClick={() => { setIsAuthOpen(true); closeMobileMenu(); }}
                >
                  Войти в аккаунт
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />
    </>
  );
}

export default Header;