import { useState } from 'react';
import styles from './Discount.module.scss';
import dotsIcon from '../../assets/icons/dots-icon.png';
import inputUser from '../../assets/icons/input-user.png';
import inputMail from '../../assets/icons/input-mail.png';
import inputPhone from '../../assets/icons/input-phone.png';
import inputBook from '../../assets/icons/input-book.png';
import inputEdit from '../../assets/icons/input-edit.png';

function Discount() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    note: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Пока просто выводим в консоль, позже привяжем к бэкенду
    console.log('Отправка формы:', formData);
    alert('Форма отправлена (тест)');
  };

  return (
    <section className={styles.discountSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <span className={styles.subtitle}>FLAT DISCOUNT</span>
          <h2>Claim upto 50% offer<br/>on the most popular<br/>services...</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, buying to 
            injected humour, or randomised words.
          </p>

          <div className={styles.contactCard}>
            <div className={styles.contactInfo}>
              <div className={styles.infoRow}>
                <img src={dotsIcon} alt="dots" />
                <div className={styles.infoText}>
                  <strong>MAIL US :</strong>
                  <span>info@beautyness.com</span>
                </div>
              </div>
              <div className={styles.infoRow}>
                <img src={dotsIcon} alt="dots" />
                <div className={styles.infoText}>
                  <strong>CALL US :</strong>
                  <span>(+22) 123 4568 009</span>
                </div>
              </div>
            </div>
            <div className={styles.discountBlock}>
              <span className={styles.getFlat}>- GET FLAT -</span>
              <span className={styles.percent}>50<small>%</small></span>
              <span className={styles.discountText}>Discount</span>
            </div>
          </div>
        </div>

        <div className={styles.rightContent}>
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <img src={inputUser} alt="User" />
              <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            </div>
            
            <div className={styles.inputGroup}>
              <img src={inputMail} alt="Email" />
              <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            </div>

            <div className={styles.inputGroup}>
              <img src={inputPhone} alt="Phone" />
              <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
            </div>

            <div className={styles.inputGroup}>
              <img src={inputBook} alt="Service" />
              <input type="text" name="service" placeholder="Service You Need" onChange={handleChange} required />
            </div>

            <div className={`${styles.inputGroup} ${styles.textareaGroup}`}>
              <img src={inputEdit} alt="Note" />
              <textarea name="note" placeholder="Any Note For Us" onChange={handleChange}></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>GET AN APPOINTMENT</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Discount;