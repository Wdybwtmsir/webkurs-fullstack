import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../assets/icons/logo.png';
import phoneIcon from '../../assets/icons/phone-icon.png';
import fbIcon from '../../assets/icons/fb-icon.png';
import twIcon from '../../assets/icons/tw-icon.png';
import inIcon from '../../assets/icons/in-icon.png';
import calendarIcon from '../../assets/icons/calendar-icon.png';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <Link to="/" className={styles.logo}>
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
                <Link to="#">Pages <span>▼</span></Link>
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

          <button className={styles.reservationBtn}>
            <img src={calendarIcon} alt="Calendar" />
            RESERVATION
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;