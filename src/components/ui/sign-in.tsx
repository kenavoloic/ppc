import {signIn} from "0/auth"

export function SignIn(){
    return (
	<form action={async (formData) => {
	    "use server"
	    await signIn("credentials", formData)
	}}>
	    <label>Nom<input name="nom" type="text" /></label>
	    <label>Prénom<input name="prenom" type="text" /></label>	
	    <label>Mot de passe<input name="motpasse" type="password" /></label>
	    <button>Sign In</button>
	    </form>
    )
};
