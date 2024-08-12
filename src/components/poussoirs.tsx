"use client";
import Image from 'next/image';
import clsx from 'clsx';
import { Button } from "@/components/ui/button";
import {Dispatch } from 'react';
import a_pierre from '@/svg/a_pierre.svg';
import a_papier from '@/svg/a_papier.svg';
import a_ciseaux from '@/svg/a_ciseaux.svg';

import b_pierre from '@/svg/b_pierre.svg';
import b_papier from '@/svg/b_papier.svg';
import b_ciseaux from '@/svg/b_ciseaux.svg';

const liste_alt: string[] = ['Pierre', 'Papier', 'Ciseaux'];
const liste_images_a = [a_pierre, a_papier, a_ciseaux];
const liste_images_b = [b_pierre, b_papier, b_ciseaux];

//const liste_actifs_a = [false, false, false];
//const liste_actifs_b = [false, false, false];

const liste_a = ['joueurPierre', 'joueurPapier', 'joueurCiseaux'];
const liste_b = ['ordinateurPierre', 'ordinateurPapier', 'ordinateurCiseaux'];

type Action =
	| { type: 'joueurPierre' }
	| { type: 'joueurPapier' }
	| { type: 'joueurCiseaux' }
	| { type: 'ordinateurPierre' }
	| { type: 'ordinateurPapier' }
	| { type: 'ordinateurCiseaux' };


interface PoussoirProps {
  numero: string;
  actif_p: boolean;
  dispatch: Dispatch<Action>;
};

const Poussoir = ({numero, actif_p, dispatch}:PoussoirProps) => {

  let valeur = parseInt(numero) ? parseInt(numero) : 0;
  valeur = valeur % liste_images_a.length;
  const nom = liste_a[valeur] as unknown as Action;

  //console.log(Action[valeur]);

  return (
    <Button
      onDoubleClick={() => dispatch({type: nom})}
      size="lg"
      variant="outline"
      className = {clsx("text-white border-2 hover:bg-blue-500 h-14",  actif_p ? "bg-white" : "bg-red-500")}
    >
      <Image priority src={liste_images_a[valeur]} alt={liste_alt[valeur]} />
    </Button>
  );
};

const PoussoirDesactive = ({numero,actif_p, dispatch}:PoussoirProps) => {

  let valeur = parseInt(numero) ? parseInt(numero) : 0;
  valeur = valeur % liste_images_b.length;

  return (
    <Button
      size="lg"
      variant="outline"
      className = {clsx("text-white border-2 hover:bg-red-500 h-14",  actif_p ? "bg-white" : "bg-blue-500")}
    >
      <Image priority src={liste_images_b[valeur]} alt={liste_alt[valeur]} />
    </Button>
  );
};

export {Poussoir, PoussoirDesactive};
