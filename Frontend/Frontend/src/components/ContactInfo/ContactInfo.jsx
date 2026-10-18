import styles from './ContactInfo.module.scss';
import salonPhoto from '../../assets/icons/contact-salon.png';
import homeIcon from '../../assets/icons/contact-home.png';
import mailIcon from '../../assets/icons/contact-mail.png';
import phoneIcon from '../../assets/icons/contact-phone.png';

function ContactInfo() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.imageBlock}>
          <div className={styles.bgBlock}></div>
          <img src={salonPhoto} alt="Our Salon" className={styles.photo} />
        </div>

        <div className={styles.content}>
          <span className={styles.subtitle}>GET IN TOUCH!</span>
          <h2 className={styles.title}>We are here to help<br />you always...</h2>
          <p className={styles.description}>
            There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, buying to 
            many desktop publishing packages.
          </p>

          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <div className={styles.iconBox}>
                <img src={homeIcon} alt="Visit Us" />
              </div>
              <div className={styles.info}>
                <h3>Visit Us :</h3>
                <p>NO.09A, DOWNTOWN, SAN DIEAGO, USA</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconBox}>
                <img src={mailIcon} alt="Drop Us" />
              </div>
              <div className={styles.info}>
                <h3>Drop Us :</h3>
                <p>SUPPORT@BEAUTYNESS.COM</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconBox}>
                <img src={phoneIcon} alt="Call Us" />
              </div>
              <div className={styles.info}>
                <h3>Call Us :</h3>
                <p>CALL: 1-800-123-9999</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;