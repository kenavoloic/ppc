import {z} from "zod";
//import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@ui/form";
import {Input} from "@ui/input";
import {Button} from "@ui/button";


const formSchema = z.object({
username: z.string().min(2).max(50),
});

const formulaireSchema = z.object({
  nom: z.string().min(1, {message: "Au moins une lettre."}).max(50),
  prenom: z.string().min(2, {message: "Au moins deux lettres."}).max(50),
  motpasse: z.string().min(3, {message: "Au moins trois caractères."}).max(50),
});

export function ProfileForm(){
const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {username: "Alabama",},
})

function onSubmit(values: z.infer<typeof formSchema>){
  console.log(values);
}

    return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )

};

export function FormulaireConnexion(){
  const form = useForm<z.infer<typeof formulaireSchema>>({
    resolver: zodResolver(formulaireSchema),
    defaultValues: {nom: "Hazar", prenom:"Balt", motpasse: "blth",}
  });

  function onSubmit(values: z.infer<typeof formulaireSchema>){
    console.log(values);
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
	<FormField
	  control={form.control}
          name="nom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
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
                <Input placeholder="shadcn" {...field} />
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
                <Input placeholder="shadcn" {...field} />
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



