import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout/Layout';
import { useLanguage } from '../../i18n/LanguageContext';
import { cv } from '../../data/content';
import styles from './About.module.css';

export default function About() {
  const { t } = useLanguage();
  const [tab, setTab] = useState('infos'); // 'infos' | 'portfolio' | 'cv'
  const a = t.about;

  return (
    <Layout>
      <div className={styles.page}>
        {/* Sous-navigation, alignée à droite (cf. maquette) */}
        <nav className={styles.tabs}>
          {['infos', 'portfolio', 'cv'].map((key) => (
            <button
              key={key}
              className={tab === key ? styles.tabActive : ''}
              onClick={() => setTab(key)}
            >
              {a.tabs[key]}
            </button>
          ))}
        </nav>

        <motion.div
          key={tab}
          className={styles.content}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          {tab === 'infos' && (
            <div className={styles.infos}>
              <div className={styles.contact}>
                <a href={`mailto:${a.email}`}>{a.email}</a>
                <a href="https://instagram.com/_cyrielle_p" target="_blank" rel="noreferrer">{a.instagram}</a>
                <span>{a.location}</span>
              </div>
              <div className={styles.bio}>
                {a.bio.split('\n').map((line, i) => <p key={i}>{line}</p>)}
              </div>
            </div>
          )}

          {tab === 'portfolio' && (
            <div className={styles.portfolio}>
              {/* TODO : déposer le PDF dans /public et pointer le href dessus */}
              <a className={styles.download} href="/portfolio.pdf" download>
                {a.portfolioCta}
              </a>
            </div>
          )}

          {tab === 'cv' && (
            <div className={styles.cv}>
              <CvBlock title={a.cvSections.bourses} items={cv.bourses} />
              <CvBlock title={a.cvSections.expos} items={cv.expos} />
              <CvBlock title={a.cvSections.freelance} items={cv.freelance} />
              <CvBlock title={a.cvSections.workshop} items={cv.workshop} />
              <CvBlock title={a.cvSections.formations} items={cv.formations} />
              <CvBlock title={a.cvSections.evenements} items={cv.evenements} />
            </div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
}

function CvBlock({ title, items }) {
  return (
    <section className={styles.cvBlock}>
      <h2 className={styles.cvTitle}>{title}</h2>
      <ul>{items.map((it, i) => <li key={i}>{it}</li>)}</ul>
    </section>
  );
}
