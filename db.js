import dotenv from "dotenv";
import pkg from 'pg';
dotenv.configDotenv()
const {Client} = pkg

const client = new Client({
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
})

export default client
