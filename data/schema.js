const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `

    type Query { musicians: [musician],
     musicianById(id: ID!): musician }
    type Mutation {updateMusician(id: ID!, email: String!): musician}
    type musician {id: ID, firstName: String, lastName: String, instrument: String, email: String }

  `;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
