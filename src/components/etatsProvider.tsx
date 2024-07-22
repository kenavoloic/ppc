"use client";

import {createContext, useContext, useState, Dispatch, SetStateAction} from "react";
import {Etats} from "@types/Etats";
import {etats_initiaux, victoire1, vierge, defaite1, defaite2} from "@lib/constantes";

const EtatsContext = createContext<Etats | undefined>(undefined);

export const EtatsContextProvider = ({children} : {children: React.ReactNode}) => {
  //const [valeurs, setValeurs] = useState(etats_initiaux);
  //const [valeurs] = useState(etats_initiaux);
  const [valeurs] = useState(vierge);
  //const [valeurs] = useState(defaite1);
  return (
    <EtatsContext.Provider value={valeurs}>
      {children}
    </EtatsContext.Provider>
  );
};

export const useEtats = () => useContext(EtatsContext);
