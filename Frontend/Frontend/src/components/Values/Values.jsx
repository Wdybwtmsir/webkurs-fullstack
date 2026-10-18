import styles from './Values.module.scss';
import iconExperts from '../../assets/icons/icon-experts.png';
import iconServices from '../../assets/icons/icon-services.png';
import iconGenuine from '../../assets/icons/icon-genuine.png';

function Values() {
  const valuesData = [
    {
      id: 1,
      title: 'Beauty Experts',
      desc: 'The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.',
      icon: iconExperts
    },
    {
      id: 2,
      title: 'Great Services',
      desc: 'The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.',
      icon: iconServices
    },
    {
      id: 3,
      title: '100% Genuine',
      desc: 'The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.',
      icon: iconGenuine
    }
  ];

  return (
    <section className={styles.valuesSection}>
      <div className={styles.container}>
        <span className={styles.subtitle}>OUR VALUES</span>
        <h2 className={styles.title}>The work values we thrive for</h2>

        <div className={styles.list}>
          {valuesData.map((item) => (
            <div key={item.id} className={styles.item}>
              <div className={styles.iconBox}>
                <img src={item.icon} alt={item.title} />
              </div>
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;