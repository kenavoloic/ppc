//"use client";

import Image from 'next/image'
import Chifoumi from '@components/chifoumi';
import C02 from '@components/c02';
import C03 from '@components/c03';
import C04 from '@components/c04';
import C05 from '@components/c05';
// import Poussoirs01 from '@components/poussoirs01';
// import Poussoirs02 from '@components/poussoirs02';
// import Poussoirs03 from '@components/poussoirs03';
// import Poussoirs04 from '@components/poussoirs04';
import Poussoirs05 from '@components/poussoirs05';
import {Connexion} from '@components/connexion';
import {Enregistrement} from '@components/enregistrement';
import Barre from '@components/barre';
import {Joueur} from "@types/Joueur";
import {Etats} from "@types/Etats";
import {etats_initiaux, victoire1, vierge, defaite2} from "@lib/constantes";

export default function Home() {
  return (
    <main className="flex justify-between flex-col items-center w-full">
      <C05  />
    </main>
  );
}
