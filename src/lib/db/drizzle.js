import {Drizzle} from 'drizzle-orm';
import mysql from 'mysql2/promise';

const connexion = await mysql.createConnectioin({
    host:"localhost",
    user:"claude",
    database:"ppc",
    password: 'claude'
});

const db = new Drizzle(connexion);
export default db;
