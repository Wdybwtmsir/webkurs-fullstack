import styles from './Instagram.module.scss';
import img1 from '../../assets/icons/insta-1.png';
import img2 from '../../assets/icons/insta-2.png';
import img3 from '../../assets/icons/insta-3.png';

function Instagram() {
  return (
    <section className={styles.instagramSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.leftCol}>
            <div className={styles.textContent}>
              <span className={styles.subtitle}>SHARE US</span>
              <h2 className={styles.title}>Follow us on<br />Instagram</h2>
              <p className={styles.desc}>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to injected humour, or randomised words many desktop publishing packages.
              </p>
            </div>
            <div className={styles.photoBox}>
              <img src={img1} alt="Aromatherapy candles" />
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.photoBox}>
              <img src={img2} alt="Spa room" />
            </div>
            <div className={styles.photoBox}>
              <img src={img3} alt="Hot stone massage" />
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.btnWrapper}>
          <button className={styles.contactBtn}>CONTACT US</button>
        </div>
      </div>
    </section>
  );
}

export default Instagram;