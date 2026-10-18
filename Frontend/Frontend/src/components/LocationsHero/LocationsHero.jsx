import styles from './LocationsHero.module.scss';

function LocationsHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <span className={styles.subtitle}>WHERE ARE HERE!</span>
        <h1 className={styles.title}>Our Locations</h1>
      </div>
    </section>
  );
}

export default LocationsHero;