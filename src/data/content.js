// =============================================================
//  CONTENU "DONNÉES" — dossiers de projets + CV
//  Les images sont chargées automatiquement depuis
//  src/assets/photos/<section>/<dossier>/  via import.meta.glob.
//  → Pour AJOUTER / RETIRER une photo : dépose / supprime le
//    fichier dans le bon dossier, rien d'autre à modifier.
//  → L'ordre suit le nom de fichier (préfixe 01-, 02-, ...).
// =============================================================

// Charge un dossier d'images, trié par nom de fichier
function load(glob) {
  return Object.keys(glob).sort().map((k) => glob[k]);
}
const opt = { eager: true, query: '?url', import: 'default' };

// ---- WORK (6 projets) ----
const wPoseurs   = load(import.meta.glob('../assets/photos/work/1-les-poseurs/*.jpg', opt));
const wInterieur = load(import.meta.glob('../assets/photos/work/2-interieur/*.jpg', opt));
const wTissage   = load(import.meta.glob('../assets/photos/work/3-tissage/*.jpg', opt));
const wWool      = load(import.meta.glob('../assets/photos/work/4-wool-production/*.jpg', opt));
const wFleur     = load(import.meta.glob('../assets/photos/work/5-fleur-en-strass/*.jpg', opt));
const wReflect   = load(import.meta.glob('../assets/photos/work/6-reflect-pattern/*.jpg', opt));

// ---- BOOK (3 dossiers) ----
const bAnnees  = load(import.meta.glob('../assets/photos/book/1-1983-2024/*.jpg', opt));
const b002     = load(import.meta.glob('../assets/photos/book/2-002/*.jpg', opt));
const bArchive = load(import.meta.glob('../assets/photos/book/3-archives/*.jpg', opt));

// ---- PRINT (placeholders issus de "Intérieur" — à confirmer / remplacer) ----
const pDos    = load(import.meta.glob('../assets/photos/print/1-interieur-dos/*.jpg', opt));
const pFace   = load(import.meta.glob('../assets/photos/print/2-interieur-face/*.jpg', opt));
const pTallud = load(import.meta.glob('../assets/photos/print/3-le-tallud/*.jpg', opt));

// ---- ABOUT (portrait) ----
export const aboutPortrait =
  load(import.meta.glob('../assets/photos/about/*.jpg', opt))[0] || null;

// Textes "info" génériques (à personnaliser par projet)
const infoTodo = {
  fr: 'Texte de présentation du projet.\nContexte\u2026',
  en: 'Project description.\nContext\u2026',
};
const infoTirage = {
  fr: 'Tirage unique\nArgentique tiré chez Glory Lab sur papier Fujifilm DPII Glossy',
  en: 'Single print\nFilm print made at Glory Lab on Fujifilm DPII Glossy paper',
};

export const sections = {
  work: [
    { slug: 'les-poseurs',     title: 'Les poseurs', year: '2024', photos: wPoseurs,   cover: wPoseurs[2]   ?? wPoseurs[0],   info: infoTodo },
    { slug: 'interieur',       title: 'Intérieur',                 photos: wInterieur, cover: wInterieur[3] ?? wInterieur[0], info: infoTodo },
    { slug: 'tissage',         title: 'Tissage',                   photos: wTissage,   cover: wTissage[0],                    info: infoTodo },
    { slug: 'wool-production', title: 'Wool production',           photos: wWool,      cover: wWool[0],                       info: infoTodo },
    { slug: 'fleur-en-strass', title: 'Fleur en Strass',           photos: wFleur,     cover: wFleur[3]    ?? wFleur[0],      info: infoTodo },
    { slug: 'reflect-pattern', title: 'Reflect Pattern',           photos: wReflect,   cover: wReflect[0],                    info: infoTodo },
  ],

  print: [
    { slug: 'interieur-dos',  title: 'Intérieur dos',  photos: pDos,    cover: pDos[0],    info: infoTirage, orderable: true },
    { slug: 'interieur-face', title: 'Intérieur face', photos: pFace,   cover: pFace[0],   info: infoTirage, orderable: true },
    { slug: 'le-tallud',      title: 'Le Tallud',      photos: pTallud, cover: pTallud[0], info: infoTirage, orderable: true },
  ],

  book: [
    { slug: '1983-2024', title: '1983-2024', photos: bAnnees,  cover: bAnnees[1] ?? bAnnees[0], info: infoTodo, orderable: true },
    { slug: '002',       title: '002',       photos: b002,     cover: b002[0],                  info: infoTodo, orderable: true },
    { slug: 'archives',  title: 'Archives',  photos: bArchive, cover: bArchive[0],              info: infoTodo, orderable: true },
  ],
};

// --- CV (inchangé) — à VÉRIFIER, transcrit du PDF ---
export const cv = {
  bourses: [
    '2026 — Homo Faber Fellowship, Fondation Michelangelo, avec l\u2019atelier Mérigot Sanzay. Venise – Paris.',
  ],
  expos: [
    '2025 — Eurofabrique, Gaîté Lyrique, Paris.',
    '2025 — Lignes de Vie, cur. Mayfly Gallery, Bastille Design Center, Paris.',
    '2022 — Désert Samples, Galerie Octave Cowbell, Metz.',
  ],
  freelance: [
    '2026 — Tisserande, Diane Collongues, atelier Mérigot Sanzay, Paris.',
    '2026 — Tisserande, Marie Hazard, projet Ad Hoc, Paris.',
    '2024-2025 — Chargée de communication, Carel Paris, Paris.',
    '2025 — Assistante éditoriale, Revue Revive / studio Anémone Image, Paris.',
    '2022 — Tirage argentique, Studio Pauleon, La Rochelle.',
  ],
  workshop: [
    '2025 — Technique modéliste, Patrice Datarius, Paris.',
    '2024-2025 — Eurofabrique, restitutions à Cluj-Napoca et à la Gaîté Lyrique, Paris.',
    '2025 — Vidéo, Lou Fauroux, Mulhouse.',
    '2022 — Désert Samples, Marie Quéau, Mulhouse.',
  ],
  formations: [
    '2026 — Mastère Spécialisé Management de la Mode et du Luxe (avec mention), Institut Français de la Mode, Paris.',
    '2024 — DNSEP option Design Textile (avec mention), Haute École des Arts du Rhin, Mulhouse.',
    '2022 — DNA option Design Textile (félicitations du jury), Haute École des Arts du Rhin, Mulhouse.',
    '2020 — CPGE Arts et Design (avec mention), Toulouse.',
  ],
  evenements: [
    '2025 — Performance Fleur en Strass, vernissage « Mémoire de l\u2019impression », La Filature Scène Nationale, Mulhouse.',
    '2025 — Performance Fleur en Strass, série de 5 soirées au DOC, Paris.',
    '2025 — VJ pour le festival Diététic Park, Chatou.',
  ],
};
