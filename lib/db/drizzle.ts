import dotenv from "dotenv";

dotenv.config();

if (!process.env.POSTGRES_URL) {
  //throw new Error('POSTGRES_URL environment variable is not set');
  console.log("lol");
}

export const client = null; //postgres(process.env.POSTGRES_URL);
export const db = null; //drizzle(client, { schema });
