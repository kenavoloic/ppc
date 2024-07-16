import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const versMajuscule = (chaine: string): string => chaine.slice(0,1).toUpperCase() + chaine.slice(1);

export const capitale = (chaine: string): string => chaine.split("-").length > 1 ? chaine.split("-").map(versMajuscule).join("-") : versMajuscule(chaine);

export const remplacementEscpace = (chaine: string): string => chaine.replace(/\s/g, "");
