import styles from './ServiceSingleHero.module.scss';
import bgImage from '../../assets/icons/about-hero-bg.png';

function ServiceSingleHero() {
  return (
    <section 
      className={styles.serviceSingleHero}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.container}>
        <span className={styles.subtitle}>THE PERFECT SERVICE</span>
        <h1 className={styles.title}>
          Service to Elevate the<br />Better lifestyle
        </h1>
        <button className={styles.btn}>MAKE A RESERVATION</button>
      </div>
    </section>
  );
}

export default ServiceSingleHero;