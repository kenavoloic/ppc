import {useContext, useRef} from "react";
import Image from 'next/image';
import {ThumbsUp, ThumbsDown, CircleHelp} from "lucide-react";
import {Button} from "@components/ui/button";
import {useEtats} from "@components/etatsProvider";
import {correspondances} from "@lib/constantes";

import clsx from "clsx";

const Bouton = ({source, alternatif, valeur, actif_p, fonction, etat, ppc}) => {
  //const {valeurs, choix, setChoix, joueurPierre, joueurPapier, joueurCiseaux, trois} = useEtats();
  const {setChoix, valeurs, setValeurs} = useEtats();

  //const data = useRef(valeurs);
  const _valeur: number = parseInt(valeur);
  //console.log("ce bouton", ceBouton, correspondances[ceBouton]);

  //  const {valeurs} = useContext(EtatsProvider);
  //setChoix(parseInt(valeur));
  
  const changement = () => {
    //console.log('bouton',  choix);
    //console.log(etat, !etat, actif_p);
    //console.log("changement bouton", choix, etat, !etat, valeur, actif_p);
    //console.log
    //console.log(choix, _valeur, trois, trois[valeur]);
    setChoix(_valeur);    
    fonction(true);
    //console.log(data);
    //const {valeurs} = useEtats();
    //ppc();
    //console.log(valeurs);
    //console.log(valeur, actif_p);
  };
  
  return (
    <Button
      onDoubleClick={() => changement()}
      size="lg"
      variant="outline"
      className = {clsx("text-white  border-2 hover:bg-blue-500 h-14", {"bg_white": actif_p, "bg-red-500": !actif_p})}
    >
      <Image src={source} alt={alternatif}  width={40} height={40}  className="m-4" />
    </Button>
  );
};

const BoutonDesactive = ({source, alternatif, actif_p}) => {
  return (
    <Button
      disabled={true}
      size="lg"
      variant="outline"
      className = {clsx("text-white  border-2  hover:bg-blue-500 hover:animate-[spin_1s] disabled:opacity-100 h-14", {"bg_white": actif_p, "bg-blue-500": !actif_p})}
    >
      <Image src={source} alt={alternatif}  width={40} height={40}  className="m-4" />
    </Button>
  );
};

export {Bouton, BoutonDesactive};




