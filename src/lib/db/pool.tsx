import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_SCHEMA,
  port: process.env.DATABASE_PORT,
  //waitForConnections: true,
});

export default pool;
