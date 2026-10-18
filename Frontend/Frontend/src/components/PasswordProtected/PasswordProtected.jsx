import { useState } from 'react';
import styles from './PasswordProtected.module.scss';
import keyIcon from '../../assets/icons/key-icon.png';

function PasswordProtected() {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.trim() === 'admin' || password.trim() === '1234') {
      alert('Доступ разрешен!');
    } else {
      alert('Неверный пароль. Попробуйте еще раз.');
    }
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.subtitle}>PASSWORD PROTECTED</span>
          <h1 className={styles.title}>Restricted Page</h1>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.card}>
          <span className={styles.cardSubtitle}>ENTER PASSWORD</span>
          <h2 className={styles.cardTitle}>Password Protected</h2>
          <p className={styles.cardDesc}>
            This page is password protected. If you are the website admin, or have
            access to this page, please type your password below.
          </p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputWrapper}>
              <span className={styles.iconBox}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="7.5" cy="15.5" r="4.5" />
                  <path d="M10.5 12.5L20 3" />
                  <path d="M17 6L19 8" />
                  <path d="M14 9L16 11" />
                </svg>
              </span>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              SUBMIT NOW
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default PasswordProtected;