"use client";
import React from 'react';
import {useContext, useRef, useState} from 'react';
import Image from 'next/image'
import {Etats} from "@types/Etats";
import {EtatsContextProvider, useEtats} from "@components/etatsProvider";
import VND from "@components/vnd";
import {Input} from '@ui/input';
import {Button} from '@ui/button';
import {Label} from '@ui/label';

import {Bouton, BoutonDesactive} from "@components/bouton";


const Chifoumi = () => {

  const {valeurs, setValeurs, joueurNom, joueurPoints, setJoueurPoints, joueurPierre, setJoueurPierre, joueurPapier, setJoueurPapier, joueurCiseaux, setJoueurCiseaux, ordinateurPierre, setOrdinateurPierre, ordinateurPapier, setOrdinateurPapier, ordinateurCiseaux, setOrdinateurCiseaux, joueurResultat, setJoueurResultat, ordinateurResultat, setOrdinateurResultat, choix} = useEtats();

  const pointeur = useRef<Etats>(valeurs);
  
    const decorations = "flex mx-2 px-4 py-4 rounded bd-color-white text-center selected bg-white-500 notSelected bg-red-500 hover:bg-blue-500";

  const _h2 = "hidden md:block text-lg text-white font-bold mb-1 drop-shadow-lg";
  const _article = "grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3 rounded border-2 p-3 bg-indigo-700";

  
  const changement = (ancien, fonction) => {
    //fonction(ancien === 'on' ? 'off' : 'on');
    fonction(ancien === true ? false : true);
    //console.log(valeurs);
  };

  const nouveauChoix = () => {
    console.log('Pierre, papier, ciseaux');
    console.log(pointeur.current);
    console.log(valeurs);
  };


  
  return (
  
    <div className="flex flex-col items-center bg-blue-600 p-8 rounded-sm md:p-4 lg:p-2">
      <article className="w-full flex flex-col p-2 border-single border-2  rounded bg-indigo-700 mb-3">
	<div className="flex w-full flex-col  gap-2 md:flex-row mb-2">
	  <Input disabled={true} type="text" id="joueur" className="text-center bg-indigo-500 text-white  text-lg disabled:opacity-100  md:text-sm" value={joueurNom}></Input>
          <Input disabled={true} type="text" id="points" className="text-center text-lg bg-white text-green disabled:opacity-100" value={joueurPoints}></Input>
	  
	  </div>
      </article>

      <h2 className={_h2}>{joueurNom}</h2>

      <article className={_article} onChange={() => nouveauChoix()}>

        <Bouton source={"/images/svg/a_pierre.svg"} alt={"Pierre"}   valeur="0" actif_p={joueurPierre && (choix === 0)}  fonction={setJoueurPierre} etat={joueurPierre}  ppc={nouveauChoix} />
          <Bouton source={"/images/svg/a_papier.svg"} alt={"Papier"}   valeur="1" actif_p={joueurPapier && (choix === 1)}   fonction={setJoueurPapier} etat={joueurPapier} ppc={nouveauChoix} />
          <Bouton source={"/images/svg/a_ciseaux.svg"} alt={"Ciseaux"}   valeur="2" actif_p={joueurCiseaux && (choix === 2)} fonction={setJoueurCiseaux}  etat={joueurCiseaux} ppc={nouveauChoix} />

  <VND resultat={joueurResultat}/>


      </article>

      <h2 className={_h2}>Ordinateur</h2>
      <article className={_article}>
	  <BoutonDesactive source={"/images/svg/b_pierre.svg"} alt={"Pierre"}   actif_p={ordinateurPierre}  />
          <BoutonDesactive source={"/images/svg/b_papier.svg"} alt={"Papier"}   actif_p={ordinateurPapier}  />
          <BoutonDesactive source={"/images/svg/b_ciseaux.svg"} alt={"Ciseaux"}  actif_p={ordinateurCiseaux}  />

          <VND resultat={ordinateurResultat} />

      </article>

    </div>
  );
};


export default Chifoumi;
