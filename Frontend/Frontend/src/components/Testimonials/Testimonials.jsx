import styles from './Testimonials.module.scss';
import imgJames from '../../assets/icons/avatar-james.png';
import imgJessica from '../../assets/icons/avatar-jessica.png';
import quoteIcon from '../../assets/icons/quote-icon.png';

function Testimonials() {
  const testimonialsData = [
    {
      id: 1,
      text: "It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English",
      authorName: 'James Williams',
      authorCountry: 'United States',
      avatar: imgJames,
      rating: '★★★★★'
    },
    {
      id: 2,
      text: "It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English",
      authorName: 'Lieo Jessica',
      authorCountry: 'United Kingdom',
      avatar: imgJessica,
      rating: '★★★★★'
    }
  ];

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>TESTIMONIALS</span>
          <h2>What our Customers says...</h2>
        </div>

        <div className={styles.cardsWrapper}>
          {testimonialsData.map(item => (
            <div key={item.id} className={styles.card}>
              <div className={styles.textBlock}>
                <p>"{item.text}"</p>
              </div>
              
              <div className={styles.authorBlock}>
                <div className={styles.authorInfo}>
                  <img src={item.avatar} alt={item.authorName} className={styles.avatar} />
                  <div className={styles.details}>
                    <span className={styles.stars}>{item.rating}</span>
                    <span className={styles.name}>{item.authorName}</span>
                    <span className={styles.country}>{item.authorCountry}</span>
                  </div>
                </div>
                <img src={quoteIcon} alt="Quote" className={styles.quoteIcon} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;