import styles from './ContactHero.module.scss';

function ContactHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <span className={styles.subtitle}>GET IN TOUCH WITH US</span>
        <h1 className={styles.title}>We Are Ready To Assist<br />You In 24X7</h1>
      </div>
    </section>
  );
}

export default ContactHero;