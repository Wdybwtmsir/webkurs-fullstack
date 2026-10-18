import styles from './ServiceAbout.module.scss';
import servicePhoto from '../../assets/icons/service-detail-photo.png';
import checkIcon from '../../assets/icons/method-check.png';

function ServiceAbout() {
  const methodology = [
    {
      id: 1,
      title: 'The Assessment Stage',
      desc: 'The point of using Lorem Ipsum is that it has a more-or-less normal letters.'
    },
    {
      id: 2,
      title: 'The Initialisation Stage',
      desc: 'The point of using Lorem Ipsum is that it has a more-or-less normal letters.'
    },
    {
      id: 3,
      title: 'The Treatment Stage',
      desc: 'The point of using Lorem Ipsum is that it has a more-or-less normal letters.'
    }
  ];

  return (
    <section className={styles.serviceAboutSection}>
      <div className={styles.leftContent}>
        <div className={styles.textWrapper}>
          <span className={styles.subtitle}>WHAT INCLUDES?</span>
          <h2 className={styles.title}>About the service</h2>
          <p className={styles.mainDesc}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal these content here', making it look like readable English.
          </p>

          <h3 className={styles.methodologyTitle}>Our Methodology :</h3>

          <div className={styles.stagesList}>
            {methodology.map((stage) => (
              <div key={stage.id} className={styles.stageItem}>
                <div className={styles.iconBox}>
                  <img src={checkIcon} alt="Check" />
                </div>
                <div className={styles.stageText}>
                  <h4>{stage.title}</h4>
                  <p>{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.rightContent}>
        <div className={styles.imageWrapper}>
          <img src={servicePhoto} alt="About the service" />
          <button className={styles.playBtn} aria-label="Play video">
            <span className={styles.playTriangle}></span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServiceAbout;