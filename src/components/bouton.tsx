import {useContext} from "react";
import Image from 'next/image';
import {ThumbsUp, ThumbsDown, CircleHelp} from "lucide-react";
import {Button} from "@components/ui/button";
import {useEtats} from "@components/etatsProvider";

const Bouton = ({source, alternatif, valeur, actif_p, fonction, etat}) => {
  const {choix, setChoix} = useEtats();

  //setChoix(parseInt(valeur));
  
  const changement = () => {
    //console.log('bouton',  choix);
    console.log(etat, !etat, actif_p);
    setChoix(valeur);    
    fonction(!etat);
    //console.log(valeur, actif_p);
  };
  
  return (
    <Button
      onClick={() => changement()}
      variant="outline"
      className = "text-white  border-2 m-4 hover:bg-blue-500 "
      className = {actif_p ? "bg-white" : "bg-red-500"}
    >
      <Image src={source} alt={alternatif}  width={40} height={40}  />
    </Button>
  );
};

const BoutonDesactive = ({source, alternatif, actif_p}) => {
  return (
    <Button
      disabled={true}
      variant="outline"
      className = "text-white  border-2 m-4 hover:bg-blue-500 disabled:opacity-100"
      className = {actif_p ? "bg-white" : "bg-red-500"}
    >
      <Image src={source} alt={alternatif}  width={40} height={40}  />
    </Button>
  );
};

export {Bouton, BoutonDesactive};




