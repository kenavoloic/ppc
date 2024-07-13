import {NextResponse} from "next/server";
import pool from "@lib/db/pool";


type Joueur = {
  joueurId: number;
  nom: string;
  prenom: string;
};

export async function GET(){
  try {
    const db = await pool.getConnection();
    const requete = 'call liste_joueurs();'; 
    const [rows] = await db.execute(requete);
    return NextResponse.json(rows);
  }
  catch(error){
    return NextResponse.json({error: error}, {status: 500});
  }
}

