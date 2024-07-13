import { mysqlTable, serial, varchar, int } from 'drizzle-orm/mysql-core';
import { InferModel } from 'drizzle-orm';

// Define the 'joueurs' table
export const joueurs = mysqlTable('joueurs', {
  joueurId: serial('joueurId').primaryKey(),
  nom: varchar('nom', { length: 255 }).notNull(),
  prenom: varchar('prenom', { length: 255 }).notNull(),
  motpasse: varchar('motpasse', { length: 255 }).notNull(),
});

// Define the 'scores' table
export const scores = mysqlTable('scores', {
  id: int('id').notNull(),
  joueur: int('joueur')
    .notNull()
    .references(() => joueurs.joueurId, { onUpdate: 'cascade' }),
  points: int('points').notNull().default(0),
});

// Infer the model types
export type Joueurs = InferModel<typeof joueurs>;
export type Scores = InferModel<typeof scores>;
