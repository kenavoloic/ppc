export const etats_initiaux: Etats = {
  joueurPierre: false,
  joueurPapier: false,
  joueurCiseaux: false,
  joueurResultat: 'n',
  joueurNom: "Balt",
  joueurId: 43,
  joueurPoints: 0,
  ordinateurPierre: false,
  ordinateurPapier: false,
  ordinateurCiseaux: false,
  ordinateurResultat: 'n',
};

export const vierge: Etats = {
  joueurPierre: false,
  joueurPapier: false,
  joueurCiseaux: false,
  joueurResultat: 'n',
  joueurNom: "Joueur Inconnu",
  joueurId: 0,
  joueurPoints: 0,
  ordinateurPierre: false,
  ordinateurPapier: false,
  ordinateurCiseaux: false,
  ordinateurResultat: 'n',
};

export const victoire1: Etats = {
  joueurPierre: false,
  joueurPapier: true,
  joueurCiseaux: false,
  joueurResultat: 'v',
  joueurNom: "Balt",
  joueurId: 43,
  joueurPoints: 1,
  ordinateurPierre: true,
  ordinateurPapier: false,
  ordinateurCiseaux: false,
  ordinateurResultat: 'd',
};

export const defaite1: Etats = {
  joueurPierre: false,
  joueurPapier: false,
  joueurCiseaux: true,
  joueurResultat: 'd',
  joueurNom: "Balt",
  joueurId: 43,
  joueurPoints: -1,
  ordinateurPierre: true,
  ordinateurPapier: false,
  ordinateurCiseaux: false,
  ordinateurResultat: 'v',
};


export const defaite2: Etats = {
  joueurPierre: false,
  joueurPapier: true,
  joueurCiseaux: false,
  joueurResultat: 'd',
  joueurNom: "Balt",
  joueurId: 43,
  joueurPoints: -1,
  ordinateurPierre: false,
  ordinateurPapier: false,
  ordinateurCiseaux: true,
  ordinateurResultat: 'v',
};
