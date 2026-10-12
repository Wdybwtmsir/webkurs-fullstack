import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import logo from '../../assets/icons/logo.png';
import fbIcon from '../../assets/icons/fb-icon.png';
import twIcon from '../../assets/icons/tw-icon.png';
import inIcon from '../../assets/icons/in-icon.png';
import igIcon from '../../assets/icons/ig-icon.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.topSection}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="Beautyness Logo" />
          </Link>
          
          <div className={styles.socials}>
            <a href="#"><img src={fbIcon} alt="Facebook" /></a>
            <a href="#"><img src={twIcon} alt="Twitter" /></a>
            <a href="#"><img src={inIcon} alt="LinkedIn" /></a>
            <a href="#"><img src={igIcon} alt="Instagram" /></a>
          </div>
        </div>

        <div className={styles.linksSection}>
          <div className={styles.column}>
            <h3>Explore</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/appointments">Appointments</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h3>Utility Pages</h3>
            <ul>
              <li><Link to="/start">Start here</Link></li>
              <li><Link to="/styleguide">Style guide</Link></li>
              <li><Link to="/404">404 not found</Link></li>
              <li><Link to="/password">Password protected</Link></li>
              <li><Link to="/licenses">Licenses</Link></li>
              <li><Link to="/changelog">Changelog</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Keep in Touch</h3>
            <div className={styles.contactItem}>
              <strong>Address :</strong>
              <span>24A Kingston St, Los Vegas<br/>NC 28202, USA.</span>
            </div>
            <div className={styles.contactItem}>
              <strong>Mail :</strong>
              <span>support@doctors.com</span>
            </div>
            <div className={styles.contactItem}>
              <strong>Phone :</strong>
              <span>(+22) 123 - 4567 - 900</span>
            </div>
          </div>

          <div className={styles.column}>
            <h3>Working Hours</h3>
            <ul className={styles.workingHours}>
              <li>Mon to Fri: 7am - 6pm</li>
              <li>Sat: 9am - 7pm</li>
              <li>Sun: 9am - 6pm</li>
            </ul>
          </div>
        </div>

      </div>
      
      <div className={styles.bottomSection}>
        <p>© Copyright 2021. Drafted by Victor Themes.</p>
      </div>
    </footer>
  );
}

export default Footer;