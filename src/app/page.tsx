"use client";

import Image from 'next/image'
//import Boutons from '@ui/Boutons';
import {Button} from "@/components/ui/button"
import {ChevronRight, ThumbsUp, ThumbsDown} from "lucide-react"


export default function Home() {
    return (
	<main className="flex bg-indigo-500 min-h-screen flex-col items-center justify-between p-24">
	    <Button variant="outline">Blip</Button>
	    <Button variant="secondary">Blip</Button>
	    <Button variant="destructive">Blip</Button>
	    
	    <Button variant="outline" size="icon">
	    <ChevronRight className="h-4 w-4" />
	    </Button>

	    <Button variant="outline" size="icon">
	    <ThumbsUp className="h-4 w-4" />
	    </Button>

	    <Button variant="destructive" size="icon">
	    <ThumbsDown className="h-4 w-4"  />
	    </Button>

	    </main>
	    
    );
}
