import styles from './AboutHero.module.scss';
import bgImage from '../../assets/icons/about-hero-bg.png';

function AboutHero() {
  return (
    <section 
      className={styles.aboutHero} 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.container}>
        <span className={styles.subtitle}>SHORT STORY ABOUT US</span>
        <h1 className={styles.title}>
          The big story behind, our<br />beautyness center
        </h1>
        <button className={styles.btn}>MAKE A RESERVATION</button>
      </div>
    </section>
  );
}

export default AboutHero;