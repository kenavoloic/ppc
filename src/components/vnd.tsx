import {useContext, useRef, useState} from "react";
import Image from 'next/image';
import {ThumbsUp, ThumbsDown, CircleHelp} from "lucide-react";
import {Etats} from "@types/Etats";
import {Resultat} from "@types/Resultat";
import {Button} from "@components/ui/button";
import {EtatsContextProvider, useEtats} from "@components/etatsProvider";
import clsx from "clsx";

const VND = ({resultat}) => {

  const esthetique = "container flex items-center justify-center bg-green-600  border-4 border hover:bg-green-500 h-14 text-white hover:text-white";

  const taille : number = 28;

  const [joueurResultat, setJoueurResultat] = useState(resultat);
  
  return (
    <Button variant="outline" className={clsx(esthetique, {"bg-green-500": joueurResultat === 'v', "bg-green-400": joueurResultat === 'n', "bg-red-500": joueurResultat === 'd'})}>
    	    {
	      joueurResultat == 'v' ? 
		<ThumbsUp size={taille}  strokeWidth={1} className="bg-transparent animate-bounce"/> :
		joueurResultat == 'n' ?
		  <CircleHelp size={taille} strokeWidth={1} className="animate-spin" /> :
		  <ThumbsDown size={taille} strokeWidth={1} className="bg-transparent animate-bounce"/>
	    }
    </Button>
    
  );
};

export default VND;
