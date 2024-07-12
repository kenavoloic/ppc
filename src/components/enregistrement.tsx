import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@ui/form";
import {Input} from "@ui/input";
import {Button} from "@ui/button";

const formulaireSchema = z.object({
  nom: z.string().min(1, {message: "Au moins une lettre."}).max(50),
  prenom: z.string().min(2, {message: "Au moins deux lettres."}).max(50),
  motpasse: z.string().min(3, {message: "Au moins trois caractères."}).max(50),
  motpasse2: z.string(),
}).refine((x) => x.motpasse === x.motpasse2, {message: "Les mots de passe ne sont pas identiques.", path: ["motpasse2"]});


export function Enregistrement(){
  const form = useForm<z.infer<typeof formulaireSchema>>({
    resolver: zodResolver(formulaireSchema),
    defaultValues: {nom: "", prenom:"", motpasse: "", motpasse2: "",},
    //defaultValues: {nom: "hazar", prenom:"balt", motpasse: "blth", motpasse2: "blth",}
  });

  function onSubmit(values: z.infer<typeof formulaireSchema>){
    console.log(values);
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
	<FormField
	  control={form.control}
          name="nom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="Nom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}

	/>
	
	<FormField
	  control={form.control}
          name="prenom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom</FormLabel>
              <FormControl>
                <Input placeholder="Prénom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}

	/>

	<FormField
	  control={form.control}
          name="motpasse"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mot de passe</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Mot de passe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}

	/>

	<FormField
	  control={form.control}
          name="motpasse2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mot de passe</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Mot de passe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}

	/>

	<Button type="submit">Enregistrement</Button>

      </form>
    </Form>
  );

}



