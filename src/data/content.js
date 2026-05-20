// =============================================================
//  CONTENU "DONNÉES" — dossiers de projets + CV
//  C'est ici que Cyrielle remplace les images et les textes.
//  Les photos work1/2/3.jpg sont des PLACEHOLDERS (le cahier des
//  charges précise que les vraies photos arrivent plus tard).
// =============================================================

import work1 from '../assets/images/work1.jpg';
import work2 from '../assets/images/work2.jpg';
import work3 from '../assets/images/work3.jpg';

// --- Pages WORK / PRINT / BOOK -------------------------------
// Chaque "section" = 3 dossiers. Chaque dossier a :
//   - title : nom affiché sous la vignette
//   - cover : image de couverture (vignette)
//   - photos : les images qui défilent quand on entre dans le dossier
//   - info   : objet { fr, en } affiché quand on clique sur "Infos"
//
// TODO Cyrielle : remplace les images placeholder et complète
// les textes "info" de chaque projet.

export const sections = {
  work: [
    {
      slug: 'les-poseurs',
      title: 'Les poseurs',
      year: '2024',
      cover: work1,
      photos: [work1, work2, work3],
      info: {
        fr: 'Texte de présentation du projet.\nContexte\u2026',
        en: 'Project description.\nContext\u2026',
      },
    },
    {
      slug: 'interieurs-tapissees',
      title: 'Intérieurs tapissées',
      cover: work2,
      photos: [work2, work3, work1],
      info: {
        fr: 'Texte de présentation du projet.\nContexte\u2026',
        en: 'Project description.\nContext\u2026',
      },
    },
    {
      slug: 'tissages',
      title: 'Tissages',
      cover: work3,
      photos: [work3, work1, work2],
      info: {
        fr: 'Texte de présentation du projet.\nContexte\u2026',
        en: 'Project description.\nContext\u2026',
      },
    },
  ],

  print: [
    {
      slug: 'interieur-dos',
      title: 'Intérieur dos',
      cover: work1,
      photos: [work1, work2],
      // Exemple de fiche tirage repris du cahier des charges :
      info: {
        fr: 'Tirage unique\nArgentique tiré chez Glory Lab sur papier Fujifilm DPII Glossy',
        en: 'Single print\nFilm print made at Glory Lab on Fujifilm DPII Glossy paper',
      },
      orderable: true, // affiche "Envoyer un mail pour commander"
    },
    {
      slug: 'interieur-face',
      title: 'Intérieur face',
      cover: work2,
      photos: [work2, work1],
      info: {
        fr: 'Tirage unique\nArgentique tiré chez Glory Lab sur papier Fujifilm DPII Glossy',
        en: 'Single print\nFilm print made at Glory Lab on Fujifilm DPII Glossy paper',
      },
      orderable: true,
    },
    {
      slug: 'le-tallud',
      title: 'Le Tallud',
      cover: work3,
      photos: [work3, work1],
      info: {
        fr: 'Tirage unique\nArgentique tiré chez Glory Lab sur papier Fujifilm DPII Glossy',
        en: 'Single print\nFilm print made at Glory Lab on Fujifilm DPII Glossy paper',
      },
      orderable: true,
    },
  ],

  book: [
    {
      slug: '1983-2024',
      title: '1983-2024',
      cover: work1,
      photos: [work1, work2, work3],
      info: {
        fr: 'Texte de présentation du projet.\nContexte\u2026',
        en: 'Project description.\nContext\u2026',
      },
      orderable: true,
    },
    {
      slug: '002',
      title: '002',
      cover: work2,
      photos: [work2, work3],
      info: {
        fr: 'Texte de présentation du projet.\nContexte\u2026',
        en: 'Project description.\nContext\u2026',
      },
      orderable: true,
    },
    {
      slug: 'archives',
      title: 'Archives',
      cover: work3,
      photos: [work3, work1, work2],
      info: {
        fr: 'Texte de présentation du projet.\nContexte\u2026',
        en: 'Project description.\nContext\u2026',
      },
      orderable: true,
    },
  ],
};

// --- CV ------------------------------------------------------
// ⚠️ À VÉRIFIER : transcrit depuis le PDF, dont le texte est en
// partie illisible. Cyrielle doit recoller son CV exact ici.
// Les noms propres ne se traduisent pas → mêmes entrées FR/EN,
// seuls les titres de rubrique changent (gérés dans translations.js).
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
