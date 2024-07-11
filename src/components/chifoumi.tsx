import Image from 'next/image'
import {Button} from '@ui/button';
import {Input} from '@ui/input';
import {Label} from '@ui/label';
import {Toggle} from '@ui/toggle';
import {ToggleGroup, ToggleGroupItem} from '@ui/toggle-group';
import {ThumbsUp, ThumbsDown} from "lucide-react";

import React from 'react';

const Chifoumi = () => {
  
  return (
    
    <div className="flex flex-col gap-3 max-w-2xl mx-auto border-2 rounded p-2 bg-indigo-600">
      

      <div className="flex">
	<section className="flex flex-col  gap-2 md:flex-row">
	  <Input disabled type="text" id="joueur" className="bg-indigo-500 text-white  text-lg disabled:opacity-100  md:text-sm" value="Balthazar"></Input>
	  <Input disabled type="number" id="points" className="text-center text-lg bg-white text-green disabled:opacity-100" value="-12" ></Input>
	  </section>
      </div>

      <h2 className="hidden md:block text-lg text-white font-semibold mb-1">Balthazar</h2>
      <div className="p-2 border-single border-2 rounded bg-indigo-700">
	<section className="rounded">
	  <ToggleGroup  variant="outline" type="single"  className="grid grid-cols-2 sm:grid-cols-4 gap-2">
           <ToggleGroupItem value="0" className="bg-red-500">
            <Image src="/images/svg/a_papier.svg" alt="Papier"  width={40} height={40} />
           </ToggleGroupItem>
           <ToggleGroupItem value="1" className="bg-red-500">
            <Image src="/images/svg/a_pierre.svg" alt="Pierre"  width={40} height={40} />
           </ToggleGroupItem>
           <ToggleGroupItem value="2" className="bg-red-500">
            <Image src="/images/svg/a_ciseaux.svg" alt="Ciseaux"  width={40} height={40} />
           </ToggleGroupItem>
           <ToggleGroupItem disabled value="3" className="bg-white bd-white">
    	    <ThumbsUp className="h-6 w-6" />
           </ToggleGroupItem>
          </ToggleGroup>
	 </section>
      </div>

      <h2 className="hidden md:block text-white text-lg font-semibold">Ordinateur</h2>

      <div className="p-2 border-single border-2 rounded bg-indigo-700">
	<section className="rounded">
	  <ToggleGroup  variant="outline" type="single" className="grid grid-cols-2 sm:grid-cols-4 gap-2">
           <ToggleGroupItem value="0" className="bg-red-500">
            <Image src="/images/svg/b_papier.svg" alt="Papier"  width={40} height={40} />
           </ToggleGroupItem>
           <ToggleGroupItem value="1" className="bg-red-500">
            <Image src="/images/svg/b_pierre.svg" alt="Pierre"  width={40} height={40} />
           </ToggleGroupItem>
           <ToggleGroupItem value="2" className="bg-red-500">
            <Image src="/images/svg/b_ciseaux.svg" alt="Ciseaux"  width={40} height={40} />
           </ToggleGroupItem>
           <ToggleGroupItem disabled value="3" className="bg-white bd-white">
    	    <ThumbsDown className="h-6 w-6" />
           </ToggleGroupItem>
          </ToggleGroup>
	 </section>
      </div>
	
      <div className="flex">
	  <Button className="flex flex-grow">Reset</Button>
      </div>
    </div>

  );
};


export default Chifoumi;
