
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
		points: number;
	};

	interface Trois {
		"0": boolean;
		"1": boolean;
		"2": boolean;
	};

	interface PoussoirProps {
		source: string;
		alternatif: string;
		actif_p: boolean;
		fonction: () => void;
	};

	interface PoussoirDesactiveProps {
		source: string;
		alternatif: string;
		actif_p: boolean;
	};

	type Action = { type: 'joueurId'; payload: number; } |
	{ type: 'joueurNom'; payload: string; } |
	{ type: 'joueurPoints'; payload: number; } |
	{ type: 'joueurPierre'; } |
	{ type: 'joueurPapier'; } |
	{ type: 'joueurCiseaux'; } |
	{ type: 'joueurResultat'; payload: Resultat; } |
	{ type: 'ordinateurPierre'; } |
	{ type: 'ordinateurPapier'; } |
	{ type: 'ordinateurCiseaux'; } |
	{ type: 'ordinateurResultat'; payload: Resultat; } |
	{ type: 'RAZ'; } |
	{ type: 'MAJ'; payload: Partial<Etats>; };


}
