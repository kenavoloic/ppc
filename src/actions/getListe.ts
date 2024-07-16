"use server";
//import {NextResponse} from "next/server";
import pool from "@lib/db/pool";
import {Joueur} from "@types/Joueur";
import {Score} from "@types/Score";

export const getClassement = async (): Promise<Score[]> => {
  try {
    const db = await pool.getConnection();
    const requete = 'call classement(10);';
    const  [rows] = await db.execute(requete);
    const data = rows as Score[];
    return data;
  }
  catch(error: unknown){
    throw new Error(`Erreur fetch getClassement() ${error}`);
  }
}

export const getListe = async (): Promise<Joueur[]> => {
  try {
    const response = await fetch('http://localhost:3000/api');
    const data = (await response.json()) as Joueur[];
    if (!response.ok){
      throw new Error('Erreur fetch getData()');
    }
    return data;
  }
catch(error: unknown){
  console.error(error);
  throw new Error(`Erreur fetch getData() ${error}`);
}
};

// async function getData(){
//   const res = await fetch('localhost:3000/api');
//   if (!res.ok){
//     throw new Error('Erreur fetch getData()');
//   }
//   return res.json();
// }
