import {NextResponse} from "next/server";
import pool from "@lib/db/pool";

type Joueur = {
  classement: number;
  score: number;
  nom: string;
  prenom: string;
};

export async function GET(){
  let nombre:number  = 8; 
  //let nombre:string = '8'; // fonctionne également
  //let nombre:string = 'huit'; // ne fonctionne pas, 'huit' n'est pas un entier.
  try {
    const db = await pool.getConnection();
    const requete = 'call classement(?);';
    const [rows] = await db.execute(requete,[nombre]);
    db.release();
    return NextResponse.json(rows);
  }
catch(error){
  return NextResponse.json({error: error}, {status: 500});
}
}
