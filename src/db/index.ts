import "dotenv/config";

import { drizzle } from "drizzle-orm/neon-http";

const db = drizzle(process.env.DATABASE_URL!, {
  schema,
});

import * as schema from "./schema"
export default db;
