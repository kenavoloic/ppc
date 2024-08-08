"use server";
import pool from "@lib/db/pool";
//import {Score} from "@types/Score";

export const getJoueur = async (_joueurId: number): Promise<Joueur[]> => {
  try {
    const db = await pool.getConnection();
    const requete = 'call get_joueur(?);';
    const [rows] = await db.execute(requete,[_joueurId]);
    const data = rows as Joueur[];
    //console.log("getJoueur", _joueurId, data);
    return data;
  }
  catch(error: unknown){
    throw new Error(`Erreur fetch getJoueur() ${error}`);
  }
}
