module.exports = ({ env }) => ({
  connections: {
    default: {
      settings: {
        uri: null,
        srv: false,
        client: "mongo",
        host: env("DATABASE_HOST", "127.0.0.1"),
        database: env("DATABASE_NAME") + (env("Cypress") ? "-test" : ""),
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE"),
        ssl: false,
      },
    },
  },
});
