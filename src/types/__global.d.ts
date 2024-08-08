
declare global {
	// Victoire, nul, défaite
	type Resultat = 'v' | 'n' | 'd';

	interface Etats {
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

	interface Score {
		classement: number;
		score: number;
		nom: string;
		prenom: string;
	};

	interface Joueur {
		joueurId: number;
		nom: string;
		prenom: string;
	};

	interface Trois {
		"0": boolean;
		"1": boolean;
		"2": boolean;
	};

}
