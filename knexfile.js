// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const connection = {
  development: {
    client: 'pg',
    connection: {
      database: 'Books',
      user:     'postgres',
      password: 'DAka31..'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'pg',
    connection: {
      database: 'play101',
      user:     'postgres',
      password: 'DAka31..'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};
export default connection;
