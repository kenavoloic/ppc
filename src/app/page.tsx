//"use client";

import Image from 'next/image'
import Chifoumi from '@components/chifoumi';

import {Connexion} from '@components/connexion';
import {Enregistrement} from '@components/enregistrement';
import Barre from '@components/barre';
import {Joueur} from "@types/Joueur";
import {Etats} from "@types/Etats";
import {etats_initiaux} from "@lib/constantes";

export default function Home() {
  return (
    <main className="flex justify-between flex-col items-center w-full">
      <Chifoumi valeurs={etats_initiaux} />
    </main>
  );
}
