import styles from './BlogHero.module.scss';

function BlogHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <span className={styles.subtitle}>GET IN TOUCH WITH US</span>
        <h1 className={styles.title}>Articles &amp; News</h1>
      </div>
    </section>
  );
}

export default BlogHero;