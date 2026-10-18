import styles from './TeamHero.module.scss';
import bgImage from '../../assets/icons/about-hero-bg.png';

function TeamHero() {
  return (
    <section 
      className={styles.teamHero}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.container}>
        <span className={styles.subtitle}>THE BEAUTY TEAM</span>
        <h1 className={styles.title}>Beautyness Experts</h1>
      </div>
    </section>
  );
}

export default TeamHero;