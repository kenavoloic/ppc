"use client";
import {useState} from 'react';
import Image from 'next/image'
import {Button} from '@ui/button';
import {Input} from '@ui/input';
import {Label} from '@ui/label';
import {Toggle} from '@ui/toggle';
import {ToggleGroup, ToggleGroupItem} from '@ui/toggle-group';
import {ThumbsUp, ThumbsDown, CircleHelp} from "lucide-react";
import {Etats} from "@types/Etats";

import React from 'react';

const Chifoumi: Etats = ({valeurs}) => {
  
  const [joueur, setJoueurId] = useState(valeurs.joueurId);
  const [nomJoueur, setNomJoueur] = useState(valeurs.joueurNom);
  const [pointsJoueur, setPointsJoueur] = useState(valeurs.joueurPoints);

  const [pierreJoueur, setPierreJoueur] = useState(valeurs.joueurPierre);
  const [papierJoueur, setPapierJoueur] = useState(valeurs.joueurPapier);
  const [ciseauxJoueur, setCiseauxJoueur] = useState(valeurs.joueurCiseaux);
  
  const [pierreOrdinateur, setPierreOrdinateur] = useState(valeurs.ordinateurPierre);
  const [papierOrdinateur, setPapierOrdinateur] = useState(valeurs.ordinateurPapier);
  const [ciseauxOrdinateur, setCiseauxOrdinateur] = useState(valeurs.ordinateurCiseaux);

  const [resultatJoueur, setResultatJoueur] = useState(valeurs.joueurResultat);
  const [resultatOrdinateur, setResultatOrdinateur] = useState(valeurs.ordinateurResultat);

  let actuel: Etats = {
    joueurPierre: pierreJoueur,
    joueurPapier: papierJoueur,
    joueurCiseaux: ciseauxJoueur,
    joueurResultat: 'n',
    joueurNom: "Balt",
    joueurId: 43,
    joueurPoints: 0,
    ordinateurPierre: false,
    ordinateurPapier: false,
    ordinateurCiseaux: false,
    ordinateurResultat: 'n',
  };
  
  const changement = (ancien, fonction) => {
    //fonction(ancien === 'on' ? 'off' : 'on');
    fonction(ancien === true ? false : true);
    //console.log(valeurs);
  };

  const choix = () => {
    console.log('Pierre, papier, ciseaux');
  };
  
  return (
    
    <div className="flex flex-col gap-3 max-w-2xl mx-auto border-2 rounded p-2 bg-indigo-600">
      
      <div className="flex">
	<section className="flex flex-col  gap-2 md:flex-row">
	  <Input disabled type="text" id="joueur" className="bg-indigo-500 text-white  text-lg disabled:opacity-100  md:text-sm" value={nomJoueur}></Input>
	  <Input disabled type="number" id="points" className="text-center text-lg bg-white text-green disabled:opacity-100" value={pointsJoueur} ></Input>
	  </section>
      </div>

      <h2 className="hidden md:block text-lg text-white font-semibold mb-1">{nomJoueur}</h2>

      <div className="p-2 border-single border-2 rounded bg-indigo-700">
	<section className="rounded">
	  <ToggleGroup  id="choixJoueur" onChange={() => choix()} variant="outline" type="single"  className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <ToggleGroupItem value="0" onClick={() => changement(ciseauxJoueur, setCiseauxJoueur)} aria-checked={papierJoueur ? "on" : "off"} className="bg-red-500">
            <Image src="/images/svg/a_papier.svg" alt="Papier"  width={40} height={40} />
           </ToggleGroupItem>
           <ToggleGroupItem value="1" onClick={() => changement(papierJoueur, setPapierJoueur)}  aria-checked={pierreJoueur ? "on" : "off"} className="bg-red-500">
            <Image src="/images/svg/a_pierre.svg" alt="Pierre"  width={40} height={40} />
           </ToggleGroupItem>
  <ToggleGroupItem value="2" onClick={() => changement(ciseauxJoueur, setCiseauxJoueur)} aria-checked={ciseauxJoueur ? "on" : "off"} className="bg-red-500">
            <Image src="/images/svg/a_ciseaux.svg" alt="Ciseaux"  width={40} height={40} />
           </ToggleGroupItem>
           <ToggleGroupItem disabled value="3" className="bg-white bd-white">
    	    {resultatJoueur == 'v' ? <ThumbsUp className="h-6 w-6" /> : resultatJoueur == 'n' ? <CircleHelp className="h-6 w-6" /> : <ThumbsDown className="h-6 w-6" />}
           </ToggleGroupItem>
          </ToggleGroup>
	 </section>
      </div>

      <h2 className="hidden md:block text-white text-lg font-semibold">Ordinateur</h2>

      <div className="p-2 border-single border-2 rounded bg-indigo-700">
	<section className="rounded">
	  <ToggleGroup  variant="outline" type="single" className="grid grid-cols-2 sm:grid-cols-4 gap-2">
           <ToggleGroupItem disabled value="0" data-state={papierOrdinateur ? "on" : "off"} aria-checked={papierOrdinateur ? "on" : "off"} className="bg-green-500 disabled:opacity-100">
            <Image src="/images/svg/b_papier.svg" alt="Papier"  width={40} height={40} />
           </ToggleGroupItem>
           <ToggleGroupItem disabled value="1" data-state={pierreOrdinateur ? "on" : "off"} aria-checked={pierreOrdinateur ? "on" : "off"} className="bg-green-500 disabled:opacity-100">
            <Image src="/images/svg/b_pierre.svg" alt="Pierre"  width={40} height={40} />
           </ToggleGroupItem>
           <ToggleGroupItem disabled value="2" data-state={ciseauxOrdinateur ? "on" : "off"} aria-checked={ciseauxOrdinateur ? "on" : "off"} className="bg-green-500 disabled:opacity-100">
            <Image src="/images/svg/b_ciseaux.svg" alt="Ciseaux"  width={40} height={40} />
           </ToggleGroupItem>
           <ToggleGroupItem disabled value="3" className="bg-white bd-white">
        	    {resultatOrdinateur === 'v' ? <ThumbsUp className="h-6 w-6 disabled:opacity-100" /> : resultatOrdinateur === 'n' ? <CircleHelp className="h-6 w-6 disabled:opacity-100" /> : <ThumbsDown className="h-6 w-6 disabled:opacity-100" />}

           </ToggleGroupItem>
          </ToggleGroup>
	 </section>
      </div>
	
      <div className="flex">
	  <Button className="flex flex-grow">Reset</Button>
      </div>
    </div>

  );
};


export default Chifoumi;
