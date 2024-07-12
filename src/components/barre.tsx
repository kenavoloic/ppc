import Image from 'next/image';
import {Button} from "@components/ui/button";
import { House, LogIn, LogOut, ThumbsUp, Trophy } from "lucide-react"
import {NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLabel, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle} from "@components/ui/navigation-menu";

import Link from "next/link";
import {ModeToggle} from "@components/modeToggle";


const  Barre = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 text-white p-2 flex justify-between rounded-lg ">
      <div className="w-full">

	<NavigationMenu className="flex justify-between">
	  <NavigationMenuList>
	  <NavigationMenuItem>
  <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      <House className="flex text-black dark:text-white md:hidden lg:flex lg:mr-2"/>
      <span className="hidden md:flex md:text-black md:dark:text-white">Accueil</span>
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>

	  <NavigationMenuItem>
  <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      <ThumbsUp className="flex text-black dark:text-white md:hidden lg:flex lg:mr-2" />
      <span className="hidden md:flex md:text-black md:dark:text-white">Register</span>
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>

  
	  <NavigationMenuItem>
  <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      <LogIn className="flex text-black dark:text-white md:hidden lg:flex lg:mr-2" />
      <span className="hidden md:flex md:text-black md:dark:text-white">Login</span>
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>


	  <NavigationMenuItem>
  <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      <LogOut className="flex text-black dark:text-white md:hidden lg:flex lg:mr-2" />
      <span className="hidden md:flex md:text-black md:dark:text-white">Logout</span>
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>

  	  <NavigationMenuItem>
    <ModeToggle />	
    	  </NavigationMenuItem>
	  
</NavigationMenuList>
	  
	  </NavigationMenu>
      </div>
    </div>
    
  );
};

export default Barre;
