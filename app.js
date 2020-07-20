const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./data/resolvers");
const typeDefs = require("./data/typedefs");
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Initialize the app
const app = express();

app.use(cors());

const getUser = async (req) => {
  const token = req.headers.authorization;

  try {
    const { user } = await jwt.verify(token, process.env.SECRET);
    req.user = user;
  } catch (err) {
    console.log(err);
  }
  req.next();
};

app.use(getUser);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// The GraphQL endpoint
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress((req) => ({
    schema,
    context: {
      user: req.user,
    },
  }))
);

// GraphiQL, a visual editor for queries
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// Start the server
app.listen({ port: process.env.PORT || 4000 }, () => {
  console.log(`Go to http://localhost:4000/graphiql to run queries!`);
});
