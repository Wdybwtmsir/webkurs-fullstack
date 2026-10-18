import styles from './ServicesCatalog.module.scss';
import photo1 from '../../assets/icons/price-photo-1.png';
import photo2 from '../../assets/icons/price-photo-2.png';
import photo3 from '../../assets/icons/service-price-3.png';
import photo4 from '../../assets/icons/service-price-4.png';
import photo5 from '../../assets/icons/service-price-5.png';

function ServicesCatalog() {
  const priceItems = [
    { id: 1, title: 'Face masks', price: '$48.00', desc: 'The versions have evolved over the sometimes by accident.' },
    { id: 2, title: 'Full body massage', price: '$54.00', desc: 'The versions have evolved over the sometimes by accident.' },
    { id: 3, title: 'Geothermal spa', price: '$54.00', desc: 'The versions have evolved over the sometimes by accident.' },
    { id: 4, title: 'Sauna relax', price: '$73.00', desc: 'The versions have evolved over the sometimes by accident.' }
  ];

  return (
    <section className={styles.servicesCatalogSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>OUR SERVICES</span>
          <h2 className={styles.title}>
            We are Experienced in making<br />you very Beautiful
          </h2>
        </div>

        <div className={styles.catalogGrid}>
          <div className={styles.imageBlock}>
            <img src={photo1} alt="Face masks" />
          </div>
          <div className={styles.textBlock}>
            <div className={styles.priceList}>
              {priceItems.map((item) => (
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
              {priceItems.map((item) => (
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
            <img src={photo2} alt="Facial treatment" />
          </div>

          <div className={styles.imageBlock}>
            <img src={photo3} alt="Hair styling" />
          </div>
          <div className={styles.textBlock}>
            <div className={styles.priceList}>
              {priceItems.map((item) => (
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
              {priceItems.map((item) => (
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
            <img src={photo4} alt="Hot stone therapy" />
          </div>

          <div className={styles.imageBlock}>
            <img src={photo5} alt="Body massage" />
          </div>
          <div className={styles.textBlock}>
            <div className={styles.priceList}>
              {priceItems.map((item) => (
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
        </div>
      </div>
    </section>
  );
}

export default ServicesCatalog;