import styles from './Benefits.module.scss';
import checkIcon from '../../assets/icons/check-icon.png';

function Benefits() {
  const benefitsData = [
    {
      id: 1,
      title: 'Optimised Energy Efficiency',
      desc: 'The point of using Lorem Ipsum is that using making it look like readable.'
    },
    {
      id: 2,
      title: 'Multi-faceted Water Filtration',
      desc: 'The point of using Lorem Ipsum is that using making it look like readable.'
    },
    {
      id: 3,
      title: 'Uncompromising Quality and Durability',
      desc: 'The point of using Lorem Ipsum is that using making it look like readable.'
    },
    {
      id: 4,
      title: 'An Ultra-Pampering Spa Experience',
      desc: 'The point of using Lorem Ipsum is that using making it look like readable.'
    },
    {
      id: 5,
      title: 'Easy Care for Unparalleled Enjoyment',
      desc: 'The point of using Lorem Ipsum is that using making it look like readable.'
    },
    {
      id: 6,
      title: 'Optimised Energy Efficiency',
      desc: 'The point of using Lorem Ipsum is that using making it look like readable.'
    }
  ];

  return (
    <section className={styles.benefitsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>OUR AWESOME BENEFITS</span>
          <h2>Actually what you'll get from</h2>
        </div>

        <div className={styles.grid}>
          {benefitsData.map(item => (
            <div key={item.id} className={styles.card}>
              <img src={checkIcon} alt="Check" className={styles.icon} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;