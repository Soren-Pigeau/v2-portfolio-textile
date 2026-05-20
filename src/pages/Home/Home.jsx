import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { useLanguage } from '../../i18n/LanguageContext';
import styles from './Home.module.css';
import heroImage from '../../assets/images/work3.jpg'; // TODO : image plein écran définitive

export default function Home() {
  const { t } = useLanguage();

  return (
    <Layout variant="overlay">
      {/* 1. Image pleine page (nom + nav s'affichent par-dessus via le Layout) */}
      <section className={styles.hero}>
        <motion.img
          src={heroImage}
          alt=""
          className={styles.heroImg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <span className={styles.scrollHint} aria-hidden="true">↓</span>
      </section>

      {/* 2. La bio apparaît au scroll et renvoie vers About */}
      <section className={styles.bio}>
        <motion.div
          className={styles.bioInner}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className={styles.bioText}>{t.home.bio}</p>
          <Link to="/about" className={styles.toAbout}>{t.home.toAbout}</Link>
        </motion.div>
      </section>
    </Layout>
  );
}
