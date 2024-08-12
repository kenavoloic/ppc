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
import {testAction} from "@actions/testAction";

import {capitale} from "@lib/utils";
//import {useContext} from 'react';
import {useEtats} from "@components/etatsProvider";

export default async function Accueil(){

  const  liste = await getClassement(10);
  //const {valeurs} = 
  //testAction(19);
  console.log(useEtats);
  
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
