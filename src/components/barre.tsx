import Image from 'next/image';
import {Button} from "@components/ui/button";
import { Dices, House, LogIn, LogOut, ThumbsUp, Trophy } from "lucide-react"
import {NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLabel, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle} from "@components/ui/navigation-menu";

import Link from "next/link";
import {ModeToggle} from "@components/modeToggle";


const  Barre = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 text-white p-2 flex justify-between mb-3">
      <div className="w-full flex justify-between">

	<NavigationMenu className="flex justify-between">
	  <NavigationMenuList>
	  <NavigationMenuItem>
  <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      <Trophy className="flex text-black dark:text-white md:hidden lg:flex lg:mr-2"/>
      <span className="hidden md:flex md:text-black md:dark:text-white">Rankings</span>
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>

  	  <NavigationMenuItem>
    <Link href="/chifoumi" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      <Dices className="flex text-black dark:text-white md:hidden lg:flex lg:mr-2"/>
      <span className="hidden md:flex md:text-black md:dark:text-white">Chifoumi</span>
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>


  
	  <NavigationMenuItem>
  <Link href="/register" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      <ThumbsUp className="flex text-black dark:text-white md:hidden lg:flex lg:mr-2" />
      <span className="hidden md:flex md:text-black md:dark:text-white">Register</span>
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>

  
	  <NavigationMenuItem>
  <Link href="/login" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      <LogIn className="flex text-black dark:text-white md:hidden lg:flex lg:mr-2" />
      <span className="hidden md:flex md:text-black md:dark:text-white">Login</span>
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>


	  <NavigationMenuItem>
  <Link href="/auth/logout" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      <LogOut className="flex text-black dark:text-white md:hidden lg:flex lg:mr-2" />
      <span className="hidden md:flex md:text-black md:dark:text-white">Logout</span>
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>
	  
</NavigationMenuList>
	  
	  </NavigationMenu>
      </div>

          <ModeToggle />	
    </div>
    
  );
};

export default Barre;
