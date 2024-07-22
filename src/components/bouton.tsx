import {useContext, useRef, useState} from "react";
import Image from 'next/image';
import {ThumbsUp, ThumbsDown, CircleHelp} from "lucide-react";
import {Etats} from "@types/Etats";
import {Button} from "@components/ui/button";

const Bouton = ({source, alternatif, valeur, actif_p, fonction, desactive}) => {
  const changement = () => {
    fonction(number(valeur));
  };

  return (
    <Button
      onClick={() => fonction(parseInt(valeur))}
      variant="outline"
      className = "text-white  border-2 m-4 hover:bg-blue-500 disabled:opacity-100"
      className = {actif_p ? "bg-white" : "bg-red-500"}
      disabled={desactive}
    >
      <Image src={source} alt={alternatif}  width={40} height={40}  />
    </Button>
  );
};

export default Bouton;




