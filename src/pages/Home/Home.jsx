import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { useLanguage } from '../../i18n/LanguageContext';
import styles from './Home.module.css';
import heroImage from '../../assets/photos/work/2-interieur/04-000082260036.jpg';
// 👆 Pour changer l'image d'accueil, remplace ce chemin par une autre photo
//    de src/assets/photos/ (ex: .../5-fleur-en-strass/04-dtgarnier04.jpg)

export default function Home() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();

  // Pendant le 1er écran de scroll, l'image recule : léger zoom + fondu + parallaxe.
  // La section bio (opaque, au-dessus) remonte et la recouvre → "passe derrière".
  const scale = useTransform(scrollY, [0, 700], [1, 1.12]);
  const y = useTransform(scrollY, [0, 700], [0, 90]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.35]);
  const hintOpacity = useTransform(scrollY, [0, 150], [1, 0]);

  return (
    <Layout variant="overlay">
      {/* 1. Image pleine page, collée en haut : elle reste pendant qu'on scrolle */}
      <section className={styles.hero}>
        <motion.img
          src={heroImage}
          alt=""
          className={styles.heroImg}
          style={{ scale, y, opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <motion.span className={styles.scrollHint} style={{ opacity: hintOpacity }} aria-hidden="true">↓</motion.span>
      </section>

      {/* 2. La bio remonte PAR-DESSUS l'image puis la recouvre, et renvoie vers About */}
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
