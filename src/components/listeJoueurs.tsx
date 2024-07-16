"use server"

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

import pool from "@lib/db/pool";

async function getListe(){
  let res = await fetch("http://localhost:3000/api");
  let liste = await res.json();
  return liste;
};

export default async function ListeJoueurs() {
  let liste = await getListe();
  console.log(liste.length);
  
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden md:block">Rang</TableHead>
          <TableHead className="hidden md:block">Nom</TableHead>
          <TableHead>Prénom</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {liste.map((x, nombre) => (
          <TableRow key={x.joueurId}>
            <TableCell>{nombre + 1}</TableCell>
            <TableCell>{x.nom}</TableCell>
            <TableCell>{x.prenom}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
