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



export default function Home() {
  return (
    <main className="flex bg-indigo-500 min-h-screen flex-col items-center justify-between p-24">

      <div className="flex flex-col gap-3">
      <div className="flex">
	<section className="flex flex-row  gap-2">
	<Input disabled type="text" id="joueur" className="flex-1 max-w-64 bg-indigo-500 text-white"></Input>
	  <Input disabled type="text" id="points" className="flex-1 bg-indigo-500 text-white"></Input>
	  </section>
      </div>
      <div className="flex p-2 border-single border-2 rounded">
	<section className="flex flex-row space-between">
	  <ToggleGroup  variant="outline" type="single">
  <ToggleGroupItem value="0" className="bg-red-500">
    <Image src="/images/svg/a_papier.svg" alt="Papier" className="h-6 w-6" width={40} height={40} />
  </ToggleGroupItem>
  <ToggleGroupItem value="1" className="bg-red-500">
    <Image src="/images/svg/a_pierre.svg" alt="Pierre" className="h-6 w-6" width={40} height={40} />
  </ToggleGroupItem>
  <ToggleGroupItem value="2" className="bg-red-500">
    <Image src="/images/svg/a_ciseaux.svg" alt="Ciseaux" className="h-6 w-6" width={40} height={40} />
  </ToggleGroupItem>

  <ToggleGroupItem disabled value="3" className="bg-white h-10 w-10 bd-white">
    	  <ThumbsUp className="h-4 w-4" />
  </ToggleGroupItem>

</ToggleGroup>
	  </section>
      </div>


      <div className="flex p-2 border-single border-2 rounded">
	<section className="flex flex-row space-between">
	  <ToggleGroup  variant="outline" type="single">
  <ToggleGroupItem value="0" className="bg-red-500">
    <Image src="/images/svg/b_papier.svg" alt="Papier" className="h-6 w-6" width={40} height={40} />
  </ToggleGroupItem>
  <ToggleGroupItem value="1" className="bg-red-500">
    <Image src="/images/svg/b_pierre.svg" alt="Pierre" className="h-6 w-6" width={40} height={40} />
  </ToggleGroupItem>
  <ToggleGroupItem value="2" className="bg-red-500">
    <Image src="/images/svg/b_ciseaux.svg" alt="Ciseaux" className="h-6 w-6" width={40} height={40} />
  </ToggleGroupItem>

  <ToggleGroupItem disabled value="3" className="bg-white h-10 w-10 bd-white">
    	  <ThumbsDown className="h-4 w-4" />
  </ToggleGroupItem>

</ToggleGroup>
	  </section>
      </div>
	<div className="flex">
	  <Button className="flex flex-grow">Reset</Button>
	  </div>
      </div>

	    </main>
	    
  );
}
