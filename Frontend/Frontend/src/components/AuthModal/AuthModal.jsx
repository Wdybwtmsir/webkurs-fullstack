import { useState } from 'react';
import axios from 'axios';
import styles from './AuthModal.module.scss';

function AuthModal({ isOpen, onClose, onAuthSuccess }) {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    const endpoint = isLoginMode
      ? 'http://localhost:3000/api/login'
      : 'http://localhost:3000/api/register';

    axios.post(endpoint, { username, password })
      .then(response => {
        const userData = response.data;
        onAuthSuccess(userData);
        onClose();
        setUsername('');
        setPassword('');
        alert(isLoginMode ? 'Вы успешно вошли в аккаунт!' : 'Регистрация прошла успешно! Вы авторизованы.');
      })
      .catch(error => {
        if (error.response && error.response.data && error.response.data.error) {
          setErrorMsg(error.response.data.error);
        } else {
          setErrorMsg('Ошибка подключения к серверу. Убедись, что бэкенд запущен!');
        }
      });
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>

        <div className={styles.tabs}>
          <button
            type="button"
            className={`${styles.tab} ${isLoginMode ? styles.activeTab : ''}`}
            onClick={() => { setIsLoginMode(true); setErrorMsg(''); }}
          >
            Вход
          </button>
          <button
            type="button"
            className={`${styles.tab} ${!isLoginMode ? styles.activeTab : ''}`}
            onClick={() => { setIsLoginMode(false); setErrorMsg(''); }}
          >
            Регистрация
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.title}>
            {isLoginMode ? 'Вход в аккаунт' : 'Создать аккаунт'}
          </h2>

          {errorMsg && <div className={styles.error}>{errorMsg}</div>}

          <div className={styles.inputGroup}>
            <label>Имя пользователя (Логин)</label>
            <input
              type="text"
              placeholder="Введите логин"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Пароль</label>
            <input
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            {isLoginMode ? 'ВОЙТИ' : 'ЗАРЕГИСТРИРОВАТЬСЯ'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthModal;