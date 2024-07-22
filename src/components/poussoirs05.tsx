"use client";
import {useContext, useRef, useState, forwardRef} from "react";
import Image from 'next/image';
import VND from "@components/vnd";
import Bouton from "@components/bouton";
import {ThumbsUp, ThumbsDown, CircleHelp} from "lucide-react";
import {Etats} from "@types/Etats";
import {EtatsContextProvider, useEtats} from "@components/etatsProvider";
 
const Poussoirs05 = () => {

  const decorations = "flex mx-2 px-4 py-4 rounded bd-color-white text-center selected bg-white-500 notSelected bg-red-500 hover:bg-blue-500";
  
  const [choix, setChoix] = useState<number | null>(null);
  const changement = (valeur: number) => {
    //console.log(e.target.value);
    //console.log(e.target.value);
    //e.target.backgroundColor="white";
    setChoix(valeur);
  };

  return (
    <div className="flex flex-col p-2 border-single border-2  rounded bg-indigo-700">

      <h2>Joueur</h2>
    <div className="rounded">
	  <div  id="choixJoueur"   className="grid grid-cols-2 sm:grid-cols-4  gap-2 mb-2 rounded">
  <Bouton source={"/images/svg/a_pierre.svg"} alt={"Pierre"}  desactive={false} valeur="0" actif_p={choix === 0}  fonction={changement} />
  <Bouton source={"/images/svg/a_papier.svg"} alt={"Papier"}  desactive={false} valeur="1" actif_p={choix === 1}   fonction={changement} />
  <Bouton source={"/images/svg/a_ciseaux.svg"} alt={"Ciseaux"}  desactive={false} valeur="2" actif_p={choix === 2} fonction={changement}  />

  <VND />
</div>

      <h2>Ordinateur</h2>
      	  <div  id="choixOrdinateur"   className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2 rounded">
	<Bouton source={"/images/svg/b_pierre.svg"} alt={"Pierre"}  desactive={true} valeur="3" actif_p={choix === 3}  fonction={changement} />
	<Bouton source={"/images/svg/b_papier.svg"} alt={"Papier"}  desactive={true} valeur="4" actif_p={choix === 4}   fonction={changement} />
	<Bouton source={"/images/svg/b_ciseaux.svg"} alt={"Ciseaux"}  desactive={true} valeur="5" actif_p={choix === 5} fonction={changement}  />

  <VND />
</div>

    </div>
  </div>
  );
};

export default Poussoirs05;
