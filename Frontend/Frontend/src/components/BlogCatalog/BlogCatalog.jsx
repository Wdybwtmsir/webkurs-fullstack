import styles from './BlogCatalog.module.scss';
import post1 from '../../assets/icons/blog-post-1.png';
import post2 from '../../assets/icons/blog-post-2.png';
import post3 from '../../assets/icons/blog-post-3.png';
import post4 from '../../assets/icons/blog-post-4.png';
import post5 from '../../assets/icons/blog-post-5.png';
import post6 from '../../assets/icons/blog-post-6.png';

function BlogCatalog() {
  const posts = [
    {
      id: 1,
      date: '11TH AUGUST 2021',
      author: 'PETER BERGSON',
      title: 'The energy efficiency of the hydrotherapy or swim',
      desc: 'The point of using Lorem Ipsum hiter that using making it look like others readable will get end.',
      image: post1
    },
    {
      id: 2,
      date: '11TH AUGUST 2021',
      author: 'PETER BERGSON',
      title: 'Tips to improve your body via cleansing',
      desc: 'The point of using Lorem Ipsum hiter that using making it look like others readable will get end.',
      image: post2
    },
    {
      id: 3,
      date: '11TH AUGUST 2021',
      author: 'PETER BERGSON',
      title: 'Experience the beauty at our beauty spa',
      desc: 'The point of using Lorem Ipsum hiter that using making it look like others readable will get end.',
      image: post3
    },
    {
      id: 4,
      date: '11TH AUGUST 2021',
      author: 'PETER BERGSON',
      title: 'The best and perfect skincare strategy',
      desc: 'The point of using Lorem Ipsum hiter that using making it look like others readable will get end.',
      image: post4
    },
    {
      id: 5,
      date: '11TH AUGUST 2021',
      author: 'PETER BERGSON',
      title: 'Fell the natural reverse aging process',
      desc: 'The point of using Lorem Ipsum hiter that using making it look like others readable will get end.',
      image: post5
    },
    {
      id: 6,
      date: '11TH AUGUST 2021',
      author: 'PETER BERGSON',
      title: 'How to make the make-up stay last',
      desc: 'The point of using Lorem Ipsum hiter that using making it look like others readable will get end.',
      image: post6
    }
  ];

  return (
    <section className={styles.catalogSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {posts.map(post => (
            <div key={post.id} className={styles.card}>
              <div className={styles.imageBox}>
                <img src={post.image} alt={post.title} />
              </div>
              <div className={styles.content}>
                <span className={styles.meta}>
                  {post.date} — BY {post.author}
                </span>
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.buttonWrapper}>
          <button className={styles.moreBtn}>VIEW MORE STORIES</button>
        </div>
      </div>
    </section>
  );
}

export default BlogCatalog;