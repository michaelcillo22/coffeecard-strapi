// path: ./config/database.js
// Strapi will use this when it is in production mode. 
module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', '127.0.0.1'), // to be overriden by env var
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        schema: env('DATABASE_SCHEMA', 'public'), // Not required
        ssl: {
          ca: env('DATABASE_CA'),
        },
      },
      debug: false,
    },
  });
  