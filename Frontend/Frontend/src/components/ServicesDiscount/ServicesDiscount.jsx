import styles from './ServicesDiscount.module.scss';
import dotsIcon from '../../assets/icons/dots-icon.png';

function ServicesDiscount() {
  return (
    <section className={styles.discountSection}>
      <div className={styles.container}>
        <span className={styles.subtitle}>FLAT DISCOUNT</span>
        <h2 className={styles.title}>
          Claim upto 50% offer<br />on the most popular services...
        </h2>
        <p className={styles.desc}>
          Our Retreat is not meant to be an occasional treat, but rather a part of your<br />routine that restores balance to your daily life.
        </p>

        <div className={styles.cardWrapper}>
          <div className={styles.contactInfo}>
            <div className={styles.infoRow}>
              <img src={dotsIcon} alt="Dots" />
              <div className={styles.infoText}>
                <strong>MAIL US :</strong>
                <span>info@beautyness.com</span>
              </div>
            </div>
            <div className={styles.infoRow}>
              <img src={dotsIcon} alt="Dots" />
              <div className={styles.infoText}>
                <strong>CALL US :</strong>
                <span>(+22) 123 4568 009</span>
              </div>
            </div>
          </div>

          <div className={styles.discountBlock}>
            <span className={styles.getFlat}>- GET FLAT -</span>
            <span className={styles.percent}>50<small>%</small></span>
            <span className={styles.discountText}>Discount</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesDiscount;