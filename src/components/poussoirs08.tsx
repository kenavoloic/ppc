"use client";
import {useContext, useRef, useState, forwardRef} from "react";
import Image from 'next/image';
import {Input} from '@ui/input';
import {Label} from '@ui/label';
import {Button} from '@ui/button';
import VND from "@components/vnd";
import {Bouton, BoutonDesactive} from "@components/bouton";
import {ThumbsUp, ThumbsDown, CircleHelp} from "lucide-react";
import {Etats} from "@types/Etats";
import {EtatsContextProvider, useEtats} from "@components/etatsProvider";
 
const Poussoirs08 = () => {

  //const {valeurs, setValeurs}  = useEtats();
  const {joueurId, setJoueurId, joueurNom, setJoueurNom, joueurPoints, setJoueurPoints, joueurPierre, setJoueurPierre, joueurPapier, setJoueurPapier, joueurCiseaux, setJoueurCiseaux, ordinateurPierre, setOrdinateurPierre, ordinateurPapier, setOrdinateurPapier, ordinateurCiseaux, setOrdinateurCiseaux, joueurResultat, setJoueurResultat, ordinateurResultat, setOrdinateurResultat, choix} = useEtats();


  
  const decorations = "flex mx-2 px-4 py-4 rounded bd-color-white text-center selected bg-white-500 notSelected bg-red-500 hover:bg-blue-500";
  
  //const [choix, setChoix] = useState<number | null>(null);
  // const changement = (valeur: number) => {
  //   setChoix(valeur);
  // };

  const correspondance = {0: 'papier', 1: 'pierre', 2: 'ciseaux'};
  
  const changement = (e: string) => {
    console.log(e);
  };

  //setChoix(joueurPierre ? 0 : joueurPapier ? 1 : 2);
  
  return (
    <div className="flex flex-col items-center bg-blue-600 p-8 rounded-sm">

            <div className="w-full flex flex-col p-2 border-single border-2  rounded bg-indigo-700 mb-3">
	<section className="flex w-full flex-col  gap-2 md:flex-row mb-2">
	  <Input disabled type="text" id="joueur" className="text-center bg-indigo-500 text-white  text-lg disabled:opacity-100  md:text-sm" value={joueurNom}></Input>
	  <Input disabled type="text" id="points" className="text-center text-lg bg-white text-green disabled:opacity-100" value={joueurPoints} ></Input>
	  </section>
      </div>

      <h2 className="hidden md:block text-lg text-white font-bold mb-1 drop-shadow-lg">{joueurNom}</h2>
    <div className="rounded">
	  <div  id="choixJoueur"   className="grid grid-cols-2 sm:grid-cols-4  gap-2 mb-2 rounded border-2 p-3 bg-indigo-700">
  <Bouton source={"/images/svg/a_pierre.svg"} alt={"Pierre"}   valeur="0" actif_p={joueurPierre && choix == 0}  fonction={setJoueurPierre} etat={joueurPierre}  />
  <Bouton source={"/images/svg/a_papier.svg"} alt={"Papier"}   valeur="1" actif_p={joueurPapier && choix == 1}   fonction={setJoueurPapier} etat={joueurPapier}/>
  <Bouton source={"/images/svg/a_ciseaux.svg"} alt={"Ciseaux"}   valeur="2" actif_p={joueurCiseaux && choix == 2} fonction={setJoueurCiseaux}  etat={joueurCiseaux} />

  <VND resultat={joueurResultat}/>
</div>

      <h2 className="hidden md:block text-lg text-white font-bold mb-1 drop-shadow-lg">Ordinateur</h2>
      	  <div  id="choixOrdinateur"   className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2 rounded border-2 p-3 bg-indigo-700">
	<BoutonDesactive source={"/images/svg/b_pierre.svg"} alt={"Pierre"}   actif_p={ordinateurPierre}  />
	<BoutonDesactive source={"/images/svg/b_papier.svg"} alt={"Papier"}   actif_p={ordinateurPapier}  />
	<BoutonDesactive source={"/images/svg/b_ciseaux.svg"} alt={"Ciseaux"}  actif_p={ordinateurCiseaux}  />

  <VND resultat={ordinateurResultat} />
</div>

            <div className="flex">
	  <Button className="flex flex-grow">Reset</Button>
      </div>

    </div>
  </div>
  );
};

export default Poussoirs08;
