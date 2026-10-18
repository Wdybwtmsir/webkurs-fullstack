import styles from './LocationsList.module.scss';
import photoWashington from '../../assets/icons/location-washington.png';
import photoNewYork from '../../assets/icons/location-newyork.png';
import photoParis from '../../assets/icons/location-paris.png';
import homeIcon from '../../assets/icons/contact-home.png';
import mailIcon from '../../assets/icons/contact-mail.png';
import phoneIcon from '../../assets/icons/contact-phone.png';

function LocationsList() {
  const locations = [
    {
      id: 1,
      country: 'COLUMBIA',
      city: 'Washington D.C',
      address: 'NO.09A, DOWNTOWN, SAN DIEAGO, USA',
      email: 'SUPPORT@BEAUTYNESS.COM',
      phone: 'CALL: 1-800-123-9999',
      image: photoWashington,
      reversed: false
    },
    {
      id: 2,
      country: 'SAN FRANCISCO',
      city: 'New York',
      address: 'NO.09A, DOWNTOWN, SAN DIEAGO, USA',
      email: 'SUPPORT@BEAUTYNESS.COM',
      phone: 'CALL: 1-800-123-9999',
      image: photoNewYork,
      reversed: true
    },
    {
      id: 3,
      country: 'FRANCE',
      city: 'Paris',
      address: 'NO.09A, DOWNTOWN, SAN DIEAGO, USA',
      email: 'SUPPORT@BEAUTYNESS.COM',
      phone: 'CALL: 1-800-123-9999',
      image: photoParis,
      reversed: false
    }
  ];

  return (
    <section className={styles.locationsSection}>
      <div className={styles.container}>
        {locations.map(loc => (
          <div
            key={loc.id}
            className={`${styles.locationRow} ${loc.reversed ? styles.reversed : ''}`}
          >
            <div className={styles.imageBlock}>
              <div className={styles.bgBox}></div>
              <img src={loc.image} alt={loc.city} className={styles.photo} />
            </div>

            <div className={styles.content}>
              <span className={styles.country}>{loc.country}</span>
              <h2 className={styles.city}>{loc.city}</h2>

              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <div className={styles.iconBox}>
                    <img src={homeIcon} alt="Visit Us" />
                  </div>
                  <div className={styles.info}>
                    <h3>Visit Us :</h3>
                    <p>{loc.address}</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.iconBox}>
                    <img src={mailIcon} alt="Drop Us" />
                  </div>
                  <div className={styles.info}>
                    <h3>Drop Us :</h3>
                    <p>{loc.email}</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.iconBox}>
                    <img src={phoneIcon} alt="Call Us" />
                  </div>
                  <div className={styles.info}>
                    <h3>Call Us :</h3>
                    <p>{loc.phone}</p>
                  </div>
                </div>
              </div>

              <button className={styles.reservationBtn}>MAKE A RESERVATION</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LocationsList;