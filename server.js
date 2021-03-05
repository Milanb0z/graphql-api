const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `
    type Query{
        test: String!
    }

`;

const resolvers = {
  Query: {
    test() {
      return "Ello";
    },
  },
};

const server = new GraphQLServer({
  resolvers,
  typeDefs,
});

server.start(() => {
  console.log("SEVER_ONLINE_ON_PORT_4000");
});
