import styles from './TeamSingleHero.module.scss';

function TeamSingleHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <span className={styles.subtitle}>THE EXPERT</span>
        <h1 className={styles.title}>Creative Beauty Team</h1>
      </div>
    </section>
  );
}

export default TeamSingleHero;