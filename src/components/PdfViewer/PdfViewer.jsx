import styles from './PdfViewer.module.css';

// file = nom du fichier déposé dans /public (ex: "portfolio.pdf", "cv.pdf")
// import.meta.env.BASE_URL gère automatiquement le préfixe GitHub Pages.
export default function PdfViewer({ file, downloadLabel }) {
  const url = `${import.meta.env.BASE_URL}${file}`;

  return (
    <div className={styles.wrap}>
      {/* Aperçu intégré du PDF (l'iframe sert de repli si <object> échoue) */}
      <object data={url} type="application/pdf" className={styles.frame} aria-label={file}>
        <iframe src={url} className={styles.frame} title={file} />
      </object>

      <a className={styles.download} href={url} download>
        {downloadLabel} ↓
      </a>
    </div>
  );
}
