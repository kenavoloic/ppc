//"use client";

import Image from 'next/image'
import Chifoumi from '@components/chifoumi';

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

//import {Score} from "@types/Score";
import {getClassement} from "@actions/getClassement";
import {getJoueur} from "@actions/getJoueur";

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
