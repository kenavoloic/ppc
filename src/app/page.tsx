"use client";

import Image from 'next/image'
import {Button} from '@ui/button';
import {Input} from '@ui/input';
import {Label} from '@ui/label';
import {Toggle} from '@ui/toggle';
import {ToggleGroup, ToggleGroupItem} from '@ui/toggle-group';
import {ThumbsUp, ThumbsDown} from "lucide-react"
import Chifoumi from '@components/chifoumi';
//import Connexion from '@components/connexion';
//import {FormulaireConnexion, ProfileForm} from '@components/connexion';
import {Connexion} from '@components/connexion';
import {Enregistrement} from '@components/enregistrement';

export default function Home() {
  return (
    <main className="flex bg-indigo-500 min-h-screen flex-col items-center justify-between p-24">
      <Connexion />
      <Enregistrement />
    </main>
	    
  );
}
