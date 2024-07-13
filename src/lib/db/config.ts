//import mysql,{ConnectionOptions} from 'mysql2';
//import mysql from 'mysql2/promise';
import {createPool} from 'mysql2/promise';

export async function connect() {
  const connecteur =  await createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_SCHEMA,
    connectionLimit: 10
  });
  return connecteur;
}

export default connect;
//export default connecteur;

// const config = {
//   host: process.env.DATABASE_HOST,
//   port: Number(process.env.DATABASE_PORT),
//   user: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASS,
//   database: process.env.DATABASE_SCHEMA,
//   url: process.env.DATABASE_URL,
// };

// try {
//   const connecteur  =  await mysql.createConnection(process.env.DATABASE_URL);
// }
// catch(err){
//   console.log(err);
// };

//export default config;
