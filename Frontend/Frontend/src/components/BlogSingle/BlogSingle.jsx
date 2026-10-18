import styles from './BlogSingle.module.scss';
import mainPhoto from '../../assets/icons/blog-single-main.png';
import authorPhoto from '../../assets/icons/author-chris.png';
import detailPhoto from '../../assets/icons/blog-single-detail.png';
import fbIcon from '../../assets/icons/fb-icon.png';
import twIcon from '../../assets/icons/tw-icon.png';
import inIcon from '../../assets/icons/in-icon.png';
import igIcon from '../../assets/icons/ig-icon.png';

function BlogSingle() {
  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.subtitle}>
            BY JESSICA SMITH / BEAUTY &amp; WELLNESS
          </span>
          <h1 className={styles.title}>
            Certified Health Professionals &amp;<br />Community Medicine
          </h1>
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.mainImageWrapper}>
          <img src={mainPhoto} alt="Certified Health Professionals" className={styles.mainPhoto} />
        </div>

        <div className={styles.contentLayout}>
          <aside className={styles.sidebar}>
            <div className={styles.authorCard}>
              <div className={styles.authorHeader}>
                <img src={authorPhoto} alt="Chris Jericho" className={styles.authorAvatar} />
                <div className={styles.authorMeta}>
                  <h3>Author - Chris Jericho</h3>
                  <span>Chairman &amp; Director</span>
                  <div className={styles.badge}>BEAUTY HEALTH</div>
                </div>
              </div>
              <p className={styles.authorBio}>
                If you are going to use a passage of Lorem Ipsum, you need to be sure there
                isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
                generators on the Internet tend to repeat.
              </p>
              <div className={styles.authorSocials}>
                <span className={styles.shareText}>Share to me :</span>
                <div className={styles.iconsRow}>
                  <a href="#"><img src={fbIcon} alt="Facebook" /></a>
                  <a href="#"><img src={twIcon} alt="Twitter" /></a>
                  <a href="#"><img src={inIcon} alt="LinkedIn" /></a>
                  <a href="#"><img src={igIcon} alt="Instagram" /></a>
                </div>
              </div>
            </div>
          </aside>

          <main className={styles.articleBody}>
            <p className={styles.leadParagraph}>
              Uniquely matrix economically sound value through cooperative technology. 
              Competently parallel task fully researched data and enterprise process 
              improvements. Collaboratively expedite quality manufactured products via 
              client-focused results quickly communicate enabled technology and turnkey 
              leadership skills. Uniquely enable accurate supply chains rather than friction 
              technology.
            </p>

            <h2>Take a look to our collections</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority 
              have suffered alteration in some form, by injected humour, or randomised words 
              which don't look even slightly believable. If you are going to use a passage of 
              Lorem Ipsum, you need to be sure there isn't anything embarrassing.
            </p>

            <ul className={styles.bulletList}>
              <li>Health Care is committed to the pillars of academic healthcare</li>
              <li>We will strengthen local health care and improve delivery system</li>
              <li>Providing optimal multidisciplinary health care and developing</li>
            </ul>

            <div className={styles.middleImageWrapper}>
              <img src={detailPhoto} alt="Face Massage" />
              <span className={styles.imageCaption}>Face Massage - Skin Care</span>
            </div>

            <h2>Feel Like Home With Best Beauty Tips</h2>
            <p>
              It was popularised in the 1960s with the release of Letraset containing Lorem 
              Ipsum passages, and more recently with desktop publishing software like Aldus 
              PageMaker including versions of Lorem Ipsum.
            </p>

            <blockquote className={styles.quoteBox}>
              <p>
                “Crowdsource term sheet freemium beta stealth responsive web design niche 
                market rock star channels. Supply chain market graphical user interface assets.”
              </p>
            </blockquote>

            <ol className={styles.numberedList}>
              <li>Your wellness goals and the areas of preference, then unwind with a customized.</li>
              <li>Discover better health &amp; wellness by using our beautician ratings &amp; reviews to make your choice.</li>
              <li>Professionals team is trained to provide you with the care and support you need during this difficult time.</li>
              <li>We will fax the requested records directly to the Qualified Beautician.</li>
            </ol>
          </main>
        </div>
      </div>
    </article>
  );
}

export default BlogSingle;