import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const versMajuscule = (chaine: string): string => chaine.slice(0,1).toUpperCase() + chaine.slice(1);

export const capitale = (chaine: string): string => chaine.split("-").length > 1 ? chaine.split("-").map(versMajuscule).join("-") : versMajuscule(chaine);

export const remplacementEscpace = (chaine: string): string => chaine.replace(/\s/g, "");

//export const alea012 = () :number => Math.floor(Math.random() * (2 + 1));

// Valeurs de 0 à 2, soit pierre, papier ou ciseaux
const liste_valeurs: number[] = [0,1,2];
export const alea = (): number => Math.floor(Math.random() * liste_valeurs.length);


export const ppc = (x: number, y:number): [boolean, boolean] => {
  // pierre : 0
  // papier : 1
  // ciseaux : 2

    let retour: [boolean, boolean];

    switch(true){
	case x === y:
	    //Égalité
	    //Aucun perdant, pierre vs pierre ou papier vs papier ou ciseaux vs ciseaux
	    retour = [true, true] ; 
	    break;

	case x == 0 && y == 1:
	    //pierre vs papier => papier gagne
	    retour = [false, true];
	    break;

	case x == 1 && y == 0:
	    //papier vs pierre => papier gagne
	    retour = [true, false];
	    break;

	case x == 0 && y == 2:
	    //pierre vs ciseaux => pierre gagne
	    retour = [true, false];
	    break;
	    
	case x == 2 && y == 0:
	    //ciseaux vs pierre => ciseaux gagnent
	    retour = [false, true];
	    break;

	case x == 1 && y == 2:
	    //papier vs ciseaux => ciseaux gagnent
	    retour = [false, true];
	    break;
	    
	case x == 2 && y == 1:
	    //ciseaux vs papier => ciseaux gagnent
	    retour = [true, false];
	    break;

	default:
	    //Aucun perdant, égalité
	    retour = [true, true];
    };
    
    return retour;
}


