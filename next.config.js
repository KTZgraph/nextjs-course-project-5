const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    //gdy jesteśmy w developerskim serwerze
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "myuser",
        mongodb_password: "myuserpasssowrd",
        mongodb_clustername: "culstermonodb",
        mongodb_database: "db-dev",
      },
    };
  }

  // gdy jestesmy w produckji
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "myuserproduction",
      mongodb_password: "myuserproductionpasssowrd",
      mongodb_clustername: "culstermonodb",
      mongodb_database: "db",
    },
  };
};
