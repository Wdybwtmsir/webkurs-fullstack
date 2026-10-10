import styles from './Services.module.scss';
import imgMassage from '../../assets/icons/service-massage.png';
import imgHair from '../../assets/icons/service-hair.png';
import imgFeet from '../../assets/icons/service-feet.png';

function Services() {
  const servicesData = [
    {
      id: 1,
      title: 'Spa & Massage',
      desc: 'If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.',
      img: imgMassage
    },
    {
      id: 2,
      title: 'Hair & Beauty',
      desc: 'If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.',
      img: imgHair
    },
    {
      id: 3,
      title: 'Body Treatments',
      desc: 'If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.',
      img: imgFeet
    }
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.cardsWrapper}>
          {servicesData.map(service => (
            <div key={service.id} className={styles.card}>
              <img src={service.img} alt={service.title} className={styles.cardImage} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className={styles.readMoreBtn}>READ MORE</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;