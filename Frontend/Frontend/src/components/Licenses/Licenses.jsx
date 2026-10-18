import styles from './Licenses.module.scss';

function Licenses() {
  const unsplashImages = [
    'Image 1', 'Image 2', 'Image 3', 'Image 4', 'Image 5',
    'Image 6', 'Image 7', 'Image 8', 'Image 9', 'Image 10'
  ];

  const pexelsImages = [
    'Image 1', 'Image 2', 'Image 3', 'Image 4', 'Image 5',
    'Image 6', 'Image 7', 'Image 8', 'Image 9', 'Image 10',
    'Image 11', 'Image 12', 'Image 13', 'Image 14'
  ];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.subtitle}>BEAUTYNESS LICENSES</span>
          <h1 className={styles.title}>Licenses</h1>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.textContainer}>
          <div className={styles.block}>
            <h2>Photography</h2>
            <p className={styles.desc}>
              All images used in the Doctorate Webflow Template are licensed for free personal
              and commercial use. If you'd like to use any specific image, you can check the
              licenses and download the images for free on <strong>Unsplash</strong>, <strong>Pexels</strong>.
            </p>

            <div className={styles.subBlock}>
              <h3>
                Unsplash : <a href="https://unsplash.com/license" target="_blank" rel="noreferrer">Licenses</a>
              </h3>
              <div className={styles.linksRow}>
                {unsplashImages.map((name, index) => (
                  <span key={index}>
                    <a href="https://unsplash.com" target="_blank" rel="noreferrer">{name}</a>
                    {index < unsplashImages.length - 1 && ', '}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.subBlock}>
              <h3>
                Pexels : <a href="https://www.pexels.com/license/" target="_blank" rel="noreferrer">Licenses</a>
              </h3>
              <div className={styles.linksRow}>
                {pexelsImages.map((name, index) => (
                  <span key={index}>
                    <a href="https://pexels.com" target="_blank" rel="noreferrer">{name}</a>
                    {index < pexelsImages.length - 1 && ', '}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <h2>Font</h2>
            <p className={styles.desc}>
              Doctorate template uses free licensed <strong>Google Fonts</strong>. Please
              check <strong>Playfair Display</strong> and <strong>Manrope</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Licenses;