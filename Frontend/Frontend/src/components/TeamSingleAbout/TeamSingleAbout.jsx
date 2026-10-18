import styles from './TeamSingleAbout.module.scss';
import photo from '../../assets/icons/expert-sherlin.png';
import phoneIcon from '../../assets/icons/phone-icon.png';
import mailIcon from '../../assets/icons/input-mail.png';
import fbIcon from '../../assets/icons/fb-icon.png';
import twIcon from '../../assets/icons/tw-icon.png';
import inIcon from '../../assets/icons/in-icon.png';

function TeamSingleAbout() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.photoWrapper}>
          <img src={photo} alt="Sherlin D'Cruz" className={styles.photo} />
        </div>

        <div className={styles.content}>
          <span className={styles.role}>BEAUTYNESS EXPERT MANAGER</span>
          <h2 className={styles.name}>Sherlin D’Cruz</h2>
          <p className={styles.description}>
            There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injecte 
            humour, or randomised words which don't look even slightly 
            believable. If you are going to use a passage of Lorem Ipsum, you 
            need to be sure there isn't anything embarrassing hidden in the 
            middle of text. All the Lorem Ipsum generators on the Internet 
            tend to repeat.
          </p>

          <div className={styles.contacts}>
            <div className={styles.contactItem}>
              <div className={styles.iconBox}>
                <img src={phoneIcon} alt="Phone" />
              </div>
              <span className={styles.contactText}>(+22) 1423 585 980</span>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconBox}>
                <img src={mailIcon} alt="Mail" />
              </div>
              <span className={styles.contactText}>sherlincruz@gmail.com</span>
            </div>
          </div>

          <button className={styles.reservationBtn}>MAKE A RESERVATION</button>

          <div className={styles.socials}>
            <a href="#"><img src={fbIcon} alt="Facebook" /></a>
            <a href="#"><img src={twIcon} alt="Twitter" /></a>
            <a href="#"><img src={inIcon} alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSingleAbout;