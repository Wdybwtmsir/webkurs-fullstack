import styles from './Blog.module.scss';
import imgPost1 from '../../assets/icons/blog-post-1.png';
import imgPost2 from '../../assets/icons/blog-post-2.png';
import imgPost3 from '../../assets/icons/blog-post-3.png';

function Blog() {
  const postsData = [
    {
      id: 1,
      date: '11TH AUGUST 2021',
      author: 'PETER BERGSON',
      title: 'The energy efficiency of the hydrotherapy or swim',
      desc: 'The point of using Lorem Ipsum hiter that using making it look like others readable will get end.',
      img: imgPost1
    },
    {
      id: 2,
      date: '11TH AUGUST 2021',
      author: 'PETER BERGSON',
      title: 'Tips to improve your body via cleansing',
      desc: 'The point of using Lorem Ipsum hiter that using making it look like others readable will get end.',
      img: imgPost2
    },
    {
      id: 3,
      date: '11TH AUGUST 2021',
      author: 'PETER BERGSON',
      title: 'Experience the beauty at our beauty spa',
      desc: 'The point of using Lorem Ipsum hiter that using making it look like others readable will get end.',
      img: imgPost3
    }
  ];

  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>OUR BLOG</span>
          <h2>Latest Updates</h2>
        </div>

        <div className={styles.cardsWrapper}>
          {postsData.map(post => (
            <div key={post.id} className={styles.card}>
              <img src={post.img} alt={post.title} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <div className={styles.meta}>
                  <span className={styles.date}>{post.date}</span>
                  <span className={styles.divider}>—</span>
                  <span className={styles.author}>BY {post.author}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.btnWrapper}>
          <button className={styles.viewMoreBtn}>VIEW MORE STORIES</button>
        </div>
      </div>
    </section>
  );
}

export default Blog;