import {object, string} from "zod"

export const signInSchema = object({
    nom: string({required_error: "Un nom est nécessaire."}).min(1, "Un nom est nécessaire"),
    prenom: string({required_error: "Un prénom est nécessaire."}).min(1, "Un prénom est nécessaire"),
    motpasse: string({required_error: "Un mot de passe est obligatoire."}).min(1, "Un mot de passe est nécessaire").min(2, "Longueur minimale de 2 lettres.").max(32, "Longueur maximale de 32 lettres."),
});
