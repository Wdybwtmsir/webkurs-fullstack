import styles from './Prices.module.scss';
import imgPrice1 from '../../assets/icons/price-photo-1.png';
import imgPrice2 from '../../assets/icons/price-photo-2.png';

function Prices() {
  const servicesList = [
    { id: 1, title: 'Face masks', price: '$48.00', desc: 'The versions have evolved over the sometimes by accident.' },
    { id: 2, title: 'Full body massage', price: '$54.00', desc: 'The versions have evolved over the sometimes by accident.' },
    { id: 3, title: 'Geothermal spa', price: '$54.00', desc: 'The versions have evolved over the sometimes by accident.' },
    { id: 4, title: 'Sauna relax', price: '$73.00', desc: 'The versions have evolved over the sometimes by accident.' },
  ];

  return (
    <section className={styles.pricesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>OUR SERVICES</span>
          <h2>We are Experienced in making<br/>you very Beautiful</h2>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.imageBlock}>
            <img src={imgPrice1} alt="Relaxing girls" />
          </div>
          
          <div className={styles.textBlock}>
            <div className={styles.priceList}>
              {servicesList.map(item => (
                <div key={item.id} className={styles.priceItem}>
                  <div className={styles.priceRow}>
                    <span className={styles.serviceName}>{item.title}</span>
                    <span className={styles.dots}></span>
                    <span className={styles.priceValue}>from {item.price}</span>
                  </div>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <button className={styles.appointmentBtn}>GET AN APPOINTMENT</button>
          </div>

          <div className={styles.textBlock}>
            <div className={styles.priceList}>
              {servicesList.map(item => (
                <div key={item.id} className={styles.priceItem}>
                  <div className={styles.priceRow}>
                    <span className={styles.serviceName}>{item.title}</span>
                    <span className={styles.dots}></span>
                    <span className={styles.priceValue}>from {item.price}</span>
                  </div>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <button className={styles.appointmentBtn}>GET AN APPOINTMENT</button>
          </div>

          <div className={styles.imageBlock}>
            <img src={imgPrice2} alt="Face mask treatment" />
          </div>
          
          <div className={styles.centerDecoration}></div>
        </div>
      </div>
    </section>
  );
}

export default Prices;