import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Faq.module.scss';

function Faq() {
  const [faqs, setFaqs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/faq')
      .then(response => {
        setFaqs(response.data);
      })
      .catch(err => {
        console.error(err);
        setError('Не удалось загрузить данные');
      });
  }, []);

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h2>FAQ</h2>
        {error && <p className={styles.error}>{error}</p>}
        
        <div className={styles.faqList}>
          {faqs.map(item => (
            <div key={item.id} className={styles.faqItem}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;