"use client";

import Image from 'next/image'
import Boutons from '@ui/Boutons';
import {Button} from '@ui/button';
import {Input} from '@ui/input';
import {Label} from '@ui/label';
import {Toggle} from '@ui/toggle';
import {ToggleGroup, ToggleGroupItem} from '@ui/toggle-group';
//import {Button} from "@/components/ui/button"
import {ChevronRight, ThumbsUp, ThumbsDown} from "lucide-react"
import Chifoumi from '@components/chifoumi';


export default function Home() {
  return (
    <main className="flex bg-indigo-500 min-h-screen flex-col items-center justify-between p-24">
      <Chifoumi />

	    </main>
	    
  );
}
