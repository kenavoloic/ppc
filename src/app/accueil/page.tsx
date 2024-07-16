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
    <Table>
      <TableHeader>
	<TableRow>
	  <TableHead className="hidden">Rang</TableHead>
	  <TableHead className="hidden">Nom</TableHead>
	  <TableHead>Prénom</TableHead>
	  <TableHead>Score</TableHead>
	</TableRow>
      </TableHeader>
      <TableBody>
	{liste[0].map((x:Score, index:number) => (
	  <TableRow key={x.joueurId}>
	    <TableCell className="hidden">{index+1}</TableCell>
	  <TableCell className="hidden">{capitale(x.nom)}</TableCell>
	  <TableCell>{capitale(x.prenom)}</TableCell>
	  <TableCell>{x.score}</TableCell>
	  </TableRow>
	))}
      </TableBody>
      <TableFooter>
      </TableFooter>
    </Table>
  );
}
