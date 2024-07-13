import type {NextApiRequest, NextApiResponse} from "next";
import connecteur from "@lib/db/config";

type Joueur = {
  classement: number;
  score: number;
  nom: string;
  prenom: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method === 'GET'){
    try {
      const [rows] = await connecteur.query<Joueur[]>('call classement(10);');
      res.status(200).json(rows);
    } catch(error: any){
      res.status(500).json({error: error.message});
    }
    
  }
};
