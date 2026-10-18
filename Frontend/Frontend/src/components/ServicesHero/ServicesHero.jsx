import styles from './ServicesHero.module.scss';
import bgImage from '../../assets/icons/about-hero-bg.png';

function ServicesHero() {
  return (
    <section 
      className={styles.servicesHero}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.container}>
        <span className={styles.subtitle}>OUR SERVICES</span>
        <h1 className={styles.title}>
          Well Experience Beauty at<br />your Service
        </h1>
        <button className={styles.btn}>MAKE A RESERVATION</button>
      </div>
    </section>
  );
}

export default ServicesHero;