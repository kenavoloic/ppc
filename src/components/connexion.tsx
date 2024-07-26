"use client";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@components/ui/form";
import {Input} from "@components/ui/input";
import {Button} from "@components/ui/button";

const formulaireSchema = z.object({
  nom: z.string().min(1, {message: "Au moins une lettre."}).max(50),
  prenom: z.string().min(2, {message: "Au moins deux lettres."}).max(50),
  motpasse: z.string().min(3, {message: "Au moins trois caractères."}).max(50),
});

function Connexion(){
  const form = useForm<z.infer<typeof formulaireSchema>>({
    resolver: zodResolver(formulaireSchema),
    defaultValues: {nom: "Hazar", prenom:"Balt", motpasse: "blth",}
  });

  function onSubmit(values: z.infer<typeof formulaireSchema>){
    console.log(values);
  }
  
  return (
   
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md w-full flex flex-col gap-4 border-2 rounded px-3 py-5">
	
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

	<Button type="submit">Connexion</Button>

      </form>
    </Form>

  );

}



export default Connexion;
