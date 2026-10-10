import styles from './Hero.module.scss';
import welcomeIcon from '../../assets/icons/welcome-icon.png';
import heroImage from '../../assets/icons/hero-image.jpg';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.leftBlock}>
        <div className={styles.textContent}>
          <div className={styles.subtitle}>
            <img src={welcomeIcon} alt="Icon" />
            <span>WELCOME TO BEAUTYNESS!!!</span>
          </div>
          <h1>Beauty is power a smile is its sword.</h1>
          <p>
            There are many variation of passages are Ipsum available, majority have suffered alteration in some form.
          </p>
          <button className={styles.mainBtn}>MAKE A RESERVATION</button>
        </div>
      </div>

      <div className={styles.rightBlock}>
         <div className={styles.imageWrapper}>
            <div className={styles.frame}></div>
            <img src={heroImage} alt="Beauty care" className={styles.photo} />
         </div>
      </div>
    </section>
  );
}

export default Hero;