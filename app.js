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

// const getUser = (req, res) => {
//   const token = req.headers.authentication;
//   console.log(token);
//   try {
//     if (token) {
//       return jwt.verify(token, process.env.SECRET);
//     }
//     return null;
//   } catch (err) {
//     return null;
//   }
// };

// app.use(getUser);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// The GraphQL endpoint
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({
    schema,
  })
);

// GraphiQL, a visual editor for queries
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// Start the server
app.listen({ port: process.env.PORT || 4000 }, () => {
  console.log(`Go to http://localhost:4000/graphiql to run queries!`);
});
