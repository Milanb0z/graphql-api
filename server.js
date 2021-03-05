const { GraphQLServer } = require("graphql-yoga");
const db = require("./src/db");
const resolvers = require("./src/resolvers");

const server = new GraphQLServer({
  resolvers,
  typeDefs: "./src/schema.graphql",
  context: { db },
});

server.start(() => {
  console.log("SEVER_ONLINE_ON_PORT_4000");
});
