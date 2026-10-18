import { useState } from 'react';
import axios from 'axios';
import styles from './ContactAppointment.module.scss';
import userIcon from '../../assets/icons/input-user.png';
import mailIcon from '../../assets/icons/input-mail.png';
import phoneIcon from '../../assets/icons/input-phone.png';
import bookIcon from '../../assets/icons/input-book.png';
import editIcon from '../../assets/icons/input-edit.png';

function ContactAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/messages', formData)
      .then(response => {
        alert('Заявка успешно отправлена!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      })
      .catch(error => {
        console.error(error);
        alert('Ошибка при отправке. Проверь сервер!');
      });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>SCHEDULE YOUR PRESENCE</span>
          <h2>Make an Appointment</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form.
          </p>
        </div>

        <div className={styles.card}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputRow}>
              <img src={userIcon} alt="Name" />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputRow}>
              <img src={mailIcon} alt="Email" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputRow}>
              <img src={phoneIcon} alt="Phone" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputRow}>
              <img src={bookIcon} alt="Service" />
              <input
                type="text"
                name="subject"
                placeholder="Service You Need"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className={`${styles.inputRow} ${styles.textareaRow}`}>
              <img src={editIcon} alt="Note" />
              <textarea
                name="message"
                placeholder="Any Note For Us"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              MAKE AN APPOINTMENT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactAppointment;