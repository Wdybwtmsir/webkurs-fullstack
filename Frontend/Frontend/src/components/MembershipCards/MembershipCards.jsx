import styles from './MembershipCards.module.scss';
import checkIcon from '../../assets/icons/method-check.png';

function MembershipCards() {
  const features = [
    'Releases muscle tension',
    'Relieves lower back pain',
    'Heals sports injuries',
    'Increases mobility',
    'Increases muscle strength'
  ];

  return (
    <section className={styles.membershipSection}>
      <div className={styles.container}>
        <span className={styles.subtitle}>EASY &amp; AFFORDABLE BOOKING</span>
        <h2 className={styles.title}>Membership Cards</h2>

        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.planName}>Comfort Relax</h3>
              <div className={styles.priceBox}>
                <span className={styles.price}>$49</span>
                <span className={styles.period}>per month</span>
              </div>
            </div>

            <div className={styles.cardBody}>
              <ul className={styles.featureList}>
                {features.map((item, index) => (
                  <li key={index}>
                    <img src={checkIcon} alt="Check" className={styles.checkIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className={styles.subscribeBtn}>SUBSCRIBE NOW</button>
            </div>

            <div className={styles.cardWatermark}>GOLD CARD</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.planName}>Luxury Retreat</h3>
              <div className={styles.priceBox}>
                <span className={styles.price}>$89</span>
                <span className={styles.period}>per month</span>
              </div>
            </div>

            <div className={styles.cardBody}>
              <ul className={styles.featureList}>
                {features.map((item, index) => (
                  <li key={index}>
                    <img src={checkIcon} alt="Check" className={styles.checkIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className={styles.subscribeBtn}>SUBSCRIBE NOW</button>
            </div>

            <div className={styles.cardWatermark}>PLATINUM</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MembershipCards;