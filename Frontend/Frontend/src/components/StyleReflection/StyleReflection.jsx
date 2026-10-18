import styles from './StyleReflection.module.scss';
import stylePhoto from '../../assets/icons/style-photo.jpg';

function StyleReflection() {
  return (
    <section className={styles.styleSection}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.imageBlock}>
            <img src={stylePhoto} alt="Style Reflection" />
          </div>
          <div className={styles.contentBlock}>
            <span className={styles.subtitle}>ABOUT US</span>
            <h2 className={styles.title}>
              Style is a Reflection of your Attitude &amp; your Personality
            </h2>
            <p className={styles.desc}>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to injected humour, or randomised words which don't look even many desktop publishing packages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StyleReflection;