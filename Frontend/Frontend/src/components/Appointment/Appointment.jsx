import { useState } from 'react';
import axios from 'axios';
import styles from './Appointment.module.scss';
import inputUser from '../../assets/icons/input-user.png';
import inputMail from '../../assets/icons/input-mail.png';
import inputPhone from '../../assets/icons/input-phone.png';
import inputBook from '../../assets/icons/input-book.png';
import inputEdit from '../../assets/icons/input-edit.png';

function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/messages', {
      name: formData.name,
      email: formData.email,
      subject: `Appointment: ${formData.service || 'General'}`,
      message: `Phone: ${formData.phone}. Note: ${formData.message}`
    })
      .then(() => {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      })
      .catch((err) => {
        console.error(err);
        setStatus('error');
      });
  };

  return (
    <section className={styles.appointmentSection}>
      <div className={styles.container}>
        <span className={styles.subtitle}>SCHEDULE YOUR PRESENCE</span>
        <h2 className={styles.title}>Make an Appointment</h2>
        <p className={styles.desc}>
          There are many variations of passages of Lorem Ipsum available, but the<br />majority have suffered alteration in some form.
        </p>

        <div className={styles.formCard}>
          {status === 'success' && (
            <div className={styles.successMsg}>
              Запись успешно сохранена в базу данных!
            </div>
          )}

          {status === 'error' && (
            <div className={styles.errorMsg}>
              Ошибка при отправке. Проверь запущен ли бэкенд на порту 3000.
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.grid}>
              <div className={styles.inputGroup}>
                <img src={inputUser} alt="User" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <img src={inputMail} alt="Email" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <img src={inputPhone} alt="Phone" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <img src={inputBook} alt="Service" />
                <input
                  type="text"
                  name="service"
                  placeholder="Service You Need"
                  value={formData.service}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <img src={inputEdit} alt="Note" />
                <input
                  type="text"
                  name="message"
                  placeholder="Any Note For Us"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                GET AN APPOINTMENT
              </button>
            </div>
          </form>

          <p className={styles.privacyText}>
            Your personal information will not be passed on to any third parties. please read our <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Appointment;