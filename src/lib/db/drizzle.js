import {Drizzle} from 'drizzle-orm';
import mysql from 'mysql2/promise';

const connexion = await mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_SCHEMA,
    password: process.env.DATABASE_PASS,
});

const db = new Drizzle(connexion);
export default db;
