import styles from './Experts2.module.scss';
import expertSherlin from '../../assets/icons/expert-sherlin.png';
import expertMaria from '../../assets/icons/expert-maria.png';
import expertAngeline from '../../assets/icons/expert-angeline.png';
import expertBonham from '../../assets/icons/expert-bonham.png';
import expertEvanna from '../../assets/icons/expert-evanna.png';
import expertNatalia from '../../assets/icons/expert-natalia.png';
import fbIcon from '../../assets/icons/fb-icon.png';
import twIcon from '../../assets/icons/tw-icon.png';
import inIcon from '../../assets/icons/in-icon.png';

function Experts2() {
  const expertsList = [
    {
      id: 1,
      name: "Sherlin D'Cruz",
      role: 'BEAUTYNESS EXPERT',
      desc: 'I must explain to you how all this mistaken idea of denouncing pleasure that will praise praising pain',
      image: expertSherlin
    },
    {
      id: 2,
      name: 'Maria Sharapova',
      role: 'BEAUTYNESS EXPERT',
      desc: 'I must explain to you how all this mistaken idea of denouncing pleasure that will praise praising pain',
      image: expertMaria
    },
    {
      id: 3,
      name: 'Angeline Jenifer',
      role: 'BEAUTYNESS EXPERT',
      desc: 'I must explain to you how all this mistaken idea of denouncing pleasure that will praise praising pain',
      image: expertAngeline
    },
    {
      id: 4,
      name: 'Bonham Carter',
      role: 'BEAUTYNESS EXPERT',
      desc: 'I must explain to you how all this mistaken idea of denouncing pleasure that will praise praising pain',
      image: expertBonham
    },
    {
      id: 5,
      name: 'Evanna Lynch',
      role: 'BEAUTYNESS EXPERT',
      desc: 'I must explain to you how all this mistaken idea of denouncing pleasure that will praise praising pain',
      image: expertEvanna
    },
    {
      id: 6,
      name: 'Natalia Tena',
      role: 'BEAUTYNESS EXPERT',
      desc: 'I must explain to you how all this mistaken idea of denouncing pleasure that will praise praising pain',
      image: expertNatalia
    }
  ];

  return (
    <section className={styles.expertsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>MEET OUR EXPERTS</span>
          <h2>The amazing women behind<br />Beautyness</h2>
        </div>

        <div className={styles.grid}>
          {expertsList.map(expert => (
            <div key={expert.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={expert.image} alt={expert.name} className={styles.photo} />
              </div>
              <h3>{expert.name}</h3>
              <span className={styles.role}>{expert.role}</span>
              <p>{expert.desc}</p>
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

export default Experts2;