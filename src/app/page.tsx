//"use client";

import Image from 'next/image'
import Chifoumi from '@components/chifoumi';
//import Connexion from '@components/connexion';
//import {FormulaireConnexion, ProfileForm} from '@components/connexion';
import {Connexion} from '@components/connexion';
import {Enregistrement} from '@components/enregistrement';
import Barre from '@components/barre';
import {Joueur} from "@type/Joueur";
//import {getListe, getClassement} from "@actions/getListe";
import {getClassement} from "@actions/getClassement";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table"

async function Blip(){
  let liste = await getClassement(10);

  return (
    <>
      {liste.map((x:Joueur) => (
	<div key={x.joueurId}>{x.nom} {x.prenom} </div>))}
    </>
  );
}

// async function blip(){
//   try {
//     const db = await pool.getConnection();
//     const requete = 'call liste_joueurs();'; 
//     const [rows] = await db.execute(requete);
//     return NextResponse.json(rows);
//   }
//   catch(error){
//     return NextResponse.json({error: error}, {status: 500});
//   }
// }

export default function Home() {

  //const liste = await getListe();
  //const liste = await getClassement(3);
  return (
    <main className="grid grid-cols-2 gap-2 p-4">
      <Blip />
    </main>
  );
}
