import styles from './Experts.module.scss';
import expert1 from '../../assets/icons/expert-sherlin.png';
import expert2 from '../../assets/icons/expert-maria.png';
import expert3 from '../../assets/icons/expert-angeline.png';
import fbIcon from '../../assets/icons/fb-icon.png';
import twIcon from '../../assets/icons/tw-icon.png';
import inIcon from '../../assets/icons/in-icon.png';

function Experts() {
  const expertsData = [
    {
      id: 1,
      name: "Sherlin D'Cruz",
      role: 'BEAUTYNESS EXPERT',
      desc: 'I must explain to you how all this mistaken idea of denouncing pleasure that will araise praising pain',
      photo: expert1
    },
    {
      id: 2,
      name: 'Maria Sharapova',
      role: 'BEAUTYNESS EXPERT',
      desc: 'I must explain to you how all this mistaken idea of denouncing pleasure that will araise praising pain',
      photo: expert2
    },
    {
      id: 3,
      name: 'Angeline Jenifer',
      role: 'BEAUTYNESS EXPERT',
      desc: 'I must explain to you how all this mistaken idea of denouncing pleasure that will araise praising pain',
      photo: expert3
    }
  ];

  return (
    <section className={styles.expertsSection}>
      <div className={styles.container}>
        <span className={styles.subtitle}>MEET OUR EXPERTS</span>
        <h2 className={styles.title}>
          The amazing women behind<br />Beautyness
        </h2>

        <div className={styles.cardsWrapper}>
          {expertsData.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.photoWrapper}>
                <img src={item.photo} alt={item.name} />
              </div>
              <h3 className={styles.name}>{item.name}</h3>
              <span className={styles.role}>{item.role}</span>
              <p className={styles.desc}>{item.desc}</p>
              
              <div className={styles.socials}>
                <a href="#"><img src={fbIcon} alt="Facebook" /></a>
                <a href="#"><img src={twIcon} alt="Twitter" /></a>
                <a href="#"><img src={inIcon} alt="LinkedIn" /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experts;