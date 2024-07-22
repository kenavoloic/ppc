import {useContext, useRef, useState} from "react";
import Image from 'next/image';
import {ThumbsUp, ThumbsDown, CircleHelp} from "lucide-react";
import {Etats} from "@types/Etats";
import {Resultat} from "@types/Resultat";
import {Button} from "@components/ui/button";
import {EtatsContextProvider, useEtats} from "@components/etatsProvider";

const VND = () => {

  //const esthetique = "flex items-center justify-center w-13 h-10 p-2 bg-green-600";
  const esthetique = "flex items-center justify-center bg-green-600  border-2 hover:bg-pink-400 hover:text-yellow-500 hover:border-2";
  const taille : number = 28;
  const [actif, setActif] = useState(false);
  const [joueurResultat , setJoueurResultat] = useState<Resultat>('v');
  
  const changement = (valeur: Resultat) => {
    //setActif(valeur);
  };
  
  
  return (
    <Button className={esthetique}>
    	    {
	      joueurResultat == 'v' ? 
		<ThumbsUp size={taille}  strokeWidth={1} /> :
		joueurResultat == 'n' ?
		  <CircleHelp size={taille} strokeWidth={1} /> :
		  <ThumbsDown size={taille} strokeWidth={1} />
	    }
    </Button>
    
  );
};

export default VND;
