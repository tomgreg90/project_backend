const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");
const typeDefs = require("./schema")
const cors = require("cors");

// Initialize the app
const app = express();

app.use(cors());

const schema = makeExecutableSchema({ typeDefs, resolvers });

// The GraphQL endpoint
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// Start the server
app.listen({ port: process.env.PORT || 4000 }, () => {
  console.log(`Go to http://localhost:4000/graphiql to run queries!`);
});
