const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `

    type Query { musicians: [musician]}
  
    type Mutation {updateMusician(id: ID!, email: String!): musician}
    type musician {firstName: String, lastName: String, instrument: String, email: String }
    type name {name: String}
  `;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
