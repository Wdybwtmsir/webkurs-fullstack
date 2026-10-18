import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './BlogCatalog.module.scss';

import post1 from '../../assets/icons/blog-post-1.png';
import post2 from '../../assets/icons/blog-post-2.png';
import post3 from '../../assets/icons/blog-post-3.png';
import post4 from '../../assets/icons/blog-post-4.png';
import post5 from '../../assets/icons/blog-post-5.png';
import post6 from '../../assets/icons/blog-post-6.png';

const imagesMap = {
  'blog-post-1.png': post1,
  'blog-post-2.png': post2,
  'blog-post-3.png': post3,
  'blog-post-4.png': post4,
  'blog-post-5.png': post5,
  'blog-post-6.png': post6,
};

function BlogCatalog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/blog')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Ошибка загрузки блога из БД:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section className={styles.catalogSection}>
      <div className={styles.container}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '50px 0', fontSize: '18px', color: '#7A9B9B' }}>
            Загрузка статей из базы данных PostgreSQL...
          </div>
        ) : (
          <div className={styles.grid}>
            {posts.map(post => (
              <div key={post.id} className={styles.card}>
                <div className={styles.imageBox}>
                  <img
                    src={imagesMap[post.image_name] || post1}
                    alt={post.title}
                  />
                </div>
                <div className={styles.content}>
                  <span className={styles.meta}>
                    {post.date} — BY {post.author}
                  </span>
                  <h3>{post.title}</h3>
                  <p>{post.desc_text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={styles.buttonWrapper}>
          <button className={styles.moreBtn}>VIEW MORE STORIES</button>
        </div>
      </div>
    </section>
  );
}

export default BlogCatalog;