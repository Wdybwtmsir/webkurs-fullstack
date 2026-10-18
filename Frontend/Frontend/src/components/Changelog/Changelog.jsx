import styles from './Changelog.module.scss';

function Changelog() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.subtitle}>TEMPLATE CHANGE</span>
          <h1 className={styles.title}>Changelog</h1>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.card}>
          <div className={styles.badge}>V.1</div>
          <span className={styles.text}>Initial Beautyness Webflow Template Release</span>
        </div>
      </section>
    </div>
  );
}

export default Changelog;