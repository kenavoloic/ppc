//"use client";

import Image from 'next/image'
import Chifoumi from '@components/chifoumi';
// import C02 from '@components/c02';
// import C03 from '@components/c03';
// import C04 from '@components/c04';
// import C05 from '@components/c05';
// import Poussoirs01 from '@components/poussoirs01';
// import Poussoirs02 from '@components/poussoirs02';
// import Poussoirs03 from '@components/poussoirs03';
// import Poussoirs04 from '@components/poussoirs04';
// import Poussoirs05 from '@components/poussoirs05';
// import Poussoirs06 from '@components/poussoirs06';
// import Poussoirs07 from '@components/poussoirs07';
// import {Connexion} from '@components/connexion';
// import {Enregistrement} from '@components/enregistrement';
// import Barre from '@components/barre';
// import {Joueur} from "@types/Joueur";
// import {Etats} from "@types/Etats";
// import {etats_initiaux, victoire1, vierge, defaite2} from "@lib/constantes";
//import Accueil from "@components/accueil";

// export default function Home() {
//   return (
//       <Accueil  />
//   );
// }


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

import {Score} from "@types/Score";
import {getClassement} from "@actions/getClassement";

import {capitale} from "@lib/utils";

export default async function Accueil(){

  const  liste = await getClassement(10);
  
  return (
    <Table className="w-full border p-4 bg-secundary-500">
      <TableHeader className="bg-white text-black">
	<TableRow>
	  <TableHead className="hidden text-left md:table-cell md:text-center">Rang</TableHead>
	  <TableHead className="hidden md:table-cell md:text-left">Nom</TableHead>
	  <TableHead className="text-left md:text-left">Prénom</TableHead>
	  <TableHead className="text-center">Score</TableHead>
	</TableRow>
      </TableHeader>
      <TableBody>
	{liste[0].map((x:Score, index:number) => (
	  <TableRow key={index} className="hover:bg-green-600 hover:text-white">
	    <TableCell className="hidden md:table-cell text-center">{index+1}</TableCell>
	  <TableCell className="hidden md:table-cell text-left">{capitale(x.nom)}</TableCell>
	  <TableCell className="text-left">{capitale(x.prenom)}</TableCell>
	  <TableCell className="text-center">{x.score}</TableCell>
	  </TableRow>
	))}
      </TableBody>
      <TableFooter>
      </TableFooter>
    </Table>
  );
}
