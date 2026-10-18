import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';
import bgImage from '../../assets/icons/404-bg.png';

function NotFound() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.subtitle}>PAGE NOT FOUND</span>
          <h1 className={styles.title}>404 Error Page</h1>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.bgWrapper}>
          <img src={bgImage} alt="Spa Flowers and Salts" className={styles.bgImage} />
        </div>

        <div className={styles.content}>
          <span className={styles.errorCode}>404</span>
          <h2 className={styles.errorTitle}>Page not Found!!!</h2>
          <p className={styles.description}>
            The page you are looking for doesn't exist. Please try searching
            for some other page, or return to the website's homepage to find
            what you're looking for.
          </p>
          <Link to="/" className={styles.homeBtn}>
            BACK TO HOME
          </Link>
        </div>
      </section>
    </div>
  );
}

export default NotFound;