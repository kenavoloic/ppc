import NextAuth from "next-auth"
import {ZodError} from "zod"
import {signInSchema} from "./lib/zod"
import Credentials from "next-auth/providers/credentials"
import {saltAndHashPassword} from "@/utils/password"
import {getUserFromDb} from "@/utils/db"

// https://authjs.dev/getting-started/authentication/credentials

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
	Credentials({
	    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
	    // e.g. domain, username, password, 2FA token, etc.
	    credentials: {
		nom: {},
		prenom: {},
		motpasse: {},
	    },
	    authorize: async (credentials) => {
		try {
		    let utilisateur = null
		    
		    const { nom, prenom, motpasse } = await signInSchema.parseAsync(credentials)
		    
		    // logic to salt and hash password
		    const pwHash = saltAndHashPassword(motpasse)
		    
		    // logic to verify if user exists
		    utilisateur = await getUserFromDb(nom, prenom, pwHash)
		    
		    if (!utilisateur) {
			throw new Error("Joueur inconnu.")
		    }
		    
		    // return json object with the user data
		    return utilisateur
		} catch (error) {
		    if (error instanceof ZodError) {
			// Return `null` to indicate that the credentials are invalid
			return null
		    }
		}
	    },
	}),
    ],
})

// export const { handlers, signIn, signOut, auth } = NextAuth({
//     providers: [
// 	Credentials({
// 	    credentials: {
// 		nom: {},
// 		prenom: {},
// 		motpasse: {},
// 	    },
// 	    authorize: async(credentials) => {
// 		let utilisateur = null;
// 		const hash_motpasse = saltAndHashPassword(credentials.motpasse);
// 		utilisateur = await getUserFromDb(credentials.nom, credentials.prenom, hash_motpasse);
// 		if (!utilisateur){
// 		    throw new Error("Utilisateur inconnu.");
// 		}
// 		return utilisateur;
// 	    }
// 	    catch(error){
// 		if(error instanceof ZodError){
// 		    return null
// 		}
//             }
// 	},
// 		   }),
// ],
// 							   })
