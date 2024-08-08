"use server";
import pool from "@lib/db/pool";
//import {Score} from "@types/Score";

export const getClassement = async (nombre: number): Promise<Score[]> => {
  try {
    const db = await pool.getConnection();
    const requete = 'call classement(?);';
    const [rows] = await db.execute(requete,[nombre]);
    //const  [rows] = await db.execute(requete);
    const data = rows as Score[];
    return data;
  }
  catch(error: unknown){
    throw new Error(`Erreur fetch getClassement() ${error}`);
  }
}
