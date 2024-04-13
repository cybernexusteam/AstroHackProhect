import { type Config } from "drizzle-kit";

import { env } from "astrotalk/env";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  tablesFilter: ["astrotalk_*"],
} satisfies Config;
