import Image from 'next/image';
import {Button} from "@components/ui/button";
//import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger} from "@components/ui/dropdown-menu";
import {NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLabel, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle} from "@components/ui/navigation-menu";

import Link from "next/link";
import {ModeToggle} from "@components/modeToggle";


const  Barre = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 text-white py-2 px-2 flex justify-between rounded-lg">
      <div className="px-1 py-1">

	<NavigationMenu className="flex justify-between">
	  <NavigationMenuList>
	  <NavigationMenuItem>
  <Link href="/" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Accueil</NavigationMenuLink>
  </Link>
</NavigationMenuItem>

	  <NavigationMenuItem>
  <Link href="/">
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Login</NavigationMenuLink>
  </Link>
</NavigationMenuItem>

	  <NavigationMenuItem>
  <Link href="/">
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Register</NavigationMenuLink>
  </Link>
</NavigationMenuItem>

	  <NavigationMenuItem>
  <Link href="/">
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Logout</NavigationMenuLink>
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
