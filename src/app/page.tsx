//"use client";

import Image from 'next/image'
import Chifoumi from '@components/chifoumi';
//import Connexion from '@components/connexion';
//import {FormulaireConnexion, ProfileForm} from '@components/connexion';
import {Connexion} from '@components/connexion';
import {Enregistrement} from '@components/enregistrement';
import Barre from '@components/barre';

import pool from "@lib/db/config";

    // <header className="fixed top-0 w-full z-50">
    //   <Barre />
    // </header>


async function Liste(){
  let res = await fetch('https://localhost:3000/api/');
  let joueurs = await res.json();
  return (
<ul>
  {joueurs.map((x) => (
<li key={x.joueurId}>{x.nom}</li>
  ))}
</ul>
  );
};

export default function Home() {

  

  return (
    <>
    <Liste />
    </>
  );
}
