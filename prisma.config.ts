import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    // Prisma CLI (db push, migrate) uses the direct connection (no pooler)
    // because transaction poolers don't support advisory locks used during migrations.
    url: process.env['DATABASE_URL_UNPOOLED'],
  },
});
