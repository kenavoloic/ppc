"use client";
import { useReducer } from "react";
import { Poussoir, PoussoirDesactive } from "@components/poussoirs";
import { vierge } from "@lib/constantes";

export default function Test() {


 
  function reducteur(valeurs:Etats, action:Action){
    switch(action.type){
    		case 'joueurPierre':
			return { ...valeurs, joueurPierre: !valeurs.joueurPierre, joueurPapier: valeurs.joueurPierre ? valeurs.joueurPapier : false, joueurCiseaux: valeurs.joueurPierre ? valeurs.joueurCiseaux : false };
		case 'joueurPapier':
			return { ...valeurs, joueurPapier: !valeurs.joueurPapier, joueurPierre: valeurs.joueurPapier ? valeurs.joueurPierre : false, joueurCiseaux: valeurs.joueurPapier ? valeurs.joueurCiseaux : false };
		case 'joueurCiseaux':
			return { ...valeurs, joueurCiseaux: !valeurs.joueurCiseaux, joueurPierre: valeurs.joueurCiseaux ? valeurs.joueurPierre : false, joueurPapier: valeurs.joueurCiseaux ? valeurs.joueurPapier : false };

		case 'ordinateurPierre':
			return { ...valeurs, ordinateurPierre: !valeurs.ordinateurPierre, ordinateurPapier: valeurs.ordinateurPierre ? valeurs.ordinateurPapier : false, ordinateurCiseaux: valeurs.ordinateurPierre ? valeurs.ordinateurCiseaux : false };
		case 'ordinateurPapier':
			return { ...valeurs, ordinateurPierre: !valeurs.ordinateurPierre, ordinateurPapier: valeurs.ordinateurPierre ? valeurs.ordinateurPapier : false, ordinateurCiseaux: valeurs.ordinateurPierre ? valeurs.ordinateurCiseaux : false };
		case 'ordinateurCiseaux':
		  return { ...valeurs, ordinateurCiseaux: !valeurs.ordinateurCiseaux, ordinateurPierre: valeurs.ordinateurCiseaux ? valeurs.ordinateurPierre : false, ordinateurPapier: valeurs.ordinateurCiseaux ? valeurs.ordinateurPapier : false };
      default:
	return valeurs;

    }
  };

  const [valeurs, dispatch] = useReducer(reducteur, vierge);
  
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="flex">
			  <Poussoir numero="0" actif_p={valeurs.joueurPierre} dispatch={dispatch} />
			  <Poussoir numero="1" actif_p={valeurs.joueurPapier} dispatch={dispatch} />
			  <Poussoir numero="2" actif_p={valeurs.joueurCiseaux} dispatch={dispatch} />
			</div>

			<div className="flex">
			  <PoussoirDesactive numero="0" actif_p={valeurs.ordinateurPierre} dispatch={dispatch} />
			  <PoussoirDesactive numero="1" actif_p={valeurs.ordinateurPapier} dispatch={dispatch} />
			  <PoussoirDesactive numero="2" actif_p={valeurs.ordinateurCiseaux} dispatch={dispatch} />
			</div>

		</main>
	);
}
