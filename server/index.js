const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const typeDefs = require("./Schema/TypeDefs");
const resolvers = require("./Schema/Resolvers");

const startApolloServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
};

startApolloServer();
