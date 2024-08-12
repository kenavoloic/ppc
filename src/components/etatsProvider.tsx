"use client";

import {createContext, useContext, useState, Dispatch, SetStateAction} from "react";
//import {Etats} from "@types/Etats";
//import {Trois} from "@types/Trois";
import {etats_initiaux, victoire1, vierge, defaite1, defaite2} from "@lib/constantes";

//const EtatsContext = createContext<Etats | undefined>(undefined);

const EtatsContext = createContext({});

export const EtatsContextProvider = ({children} : {children: React.ReactNode}) => {
  //const [valeurs, setValeurs] = useState(etats_initiaux);
  //const [valeurs] = useState(etats_initiaux);
  //const [valeurs, setValeurs] = useState(vierge);
  //const [valeurs] = useState(defaite1);

  //const valeurs = etats_initiaux;
  //const valeurs = defaite1;
  // const [enCours, setEncours] = useState(false);
  
  const [valeurs, setValeurs] = useState<Etats>(etats_initiaux);

  const [joueurId, setJoueurId] = useState(valeurs.joueurId);
  const [joueurNom, setJoueurNom] = useState(valeurs.joueurNom);
  const [joueurPoints, setJoueurPoints] = useState(valeurs.joueurPoints);

  const [joueurPierre, setJoueurPierre] = useState(valeurs.joueurPierre);
  const [joueurPapier, setJoueurPapier] = useState(valeurs.joueurPapier);
  const [joueurCiseaux, setJoueurCiseaux] = useState(valeurs.joueurCiseaux);
  
  const [ordinateurPierre, setOrdinateurPierre] = useState(valeurs.ordinateurPierre);
  const [ordinateurPapier, setOrdinateurPapier] = useState(valeurs.ordinateurPapier);
  const [ordinateurCiseaux, setOrdinateurCiseaux] = useState(valeurs.ordinateurCiseaux);

  const [joueurResultat, setJoueurResultat] = useState(valeurs.joueurResultat);
  const [ordinateurResultat, setOrdinateurResultat] = useState(valeurs.ordinateurResultat);

  const [choix, setChoix] = useState<number | null>(-1);
  
  const [trois, setTrois] = useState<Trois>({"0": joueurPierre, "1": joueurPapier, "2": joueurCiseaux});
  
  return (
    <EtatsContext.Provider value={{valeurs, setValeurs, joueurId, setJoueurId, joueurNom, setJoueurNom, joueurPoints, setJoueurPoints, joueurPierre, setJoueurPierre, joueurPapier, setJoueurPapier, joueurCiseaux, setJoueurCiseaux, ordinateurPierre, setOrdinateurPierre, ordinateurPapier, setOrdinateurPapier, ordinateurCiseaux, setOrdinateurCiseaux, joueurResultat, setJoueurResultat, ordinateurResultat, setOrdinateurResultat, choix, setChoix, trois, setTrois}}>
      {children}
    </EtatsContext.Provider>
  );
};

export const useEtats = () => useContext(EtatsContext);
