const { GraphQLServer, PubSub } = require("graphql-yoga");
const db = require("./src/db");
const resolvers = require("./src/resolvers");

const pubSub = new PubSub();

const server = new GraphQLServer({
  resolvers,
  typeDefs: "./src/schema.graphql",
  context: { db, pubSub },
});

server.start(() => {
  console.log("SEVER_ONLINE_ON_PORT_4000");
});
