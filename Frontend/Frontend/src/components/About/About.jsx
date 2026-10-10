import styles from './About.module.scss';
import iconExperts from '../../assets/icons/icon-experts.png';
import iconServices from '../../assets/icons/icon-services.png';
import iconGenuine from '../../assets/icons/icon-genuine.png';
import aboutPhoto from '../../assets/icons/about-photo.png';

function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <span className={styles.subtitle}>ABOUT US</span>
          <h2>The Beauty is about being Comfortable in your own skin!</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, buying to 
            injected humour, or randomised words which don't look even 
            many desktop publishing packages.
          </p>
          
          <div className={styles.features}>
            <div className={styles.featureBox}>
              <div className={styles.iconWrapper}>
                <img src={iconExperts} alt="Beauty Experts" />
              </div>
              <span>Beauty Experts</span>
            </div>
            <div className={styles.featureBox}>
              <div className={styles.iconWrapper}>
                <img src={iconServices} alt="Great Services" />
              </div>
              <span>Great Services</span>
            </div>
            <div className={styles.featureBox}>
              <div className={styles.iconWrapper}>
                <img src={iconGenuine} alt="100% Genuine" />
              </div>
              <span>100% Genuine</span>
            </div>
          </div>
        </div>
        
        <div className={styles.rightContent}>
          <div className={styles.imageContainer}>
             <div className={styles.bgBlock}></div>
             <img src={aboutPhoto} alt="About Beautyness" className={styles.photo} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;