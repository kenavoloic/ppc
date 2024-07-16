// Victoire, nul, défaite
type Resultat = 'v' | 'n' | 'd';

export interface Etats {
  joueurPierre: boolean;
  joueurPapier: boolean;
  joueurCiseaux: boolean;
  joueurResultat: Resultat;
  joueurNom: string;
  joueurId: number;
  joueurPoints: number;
  ordinateurPierre: boolean;
  ordinateurPapier: boolean;
  ordinateurCiseaux: boolean;
  ordinateurResultat: Resultat;
};
