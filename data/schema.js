const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `

    type Query { musicians: [musician],
     musicianById(id: ID!): musician ,
     groups: [group]}
    type Mutation {updateMusician(id: ID!, email: String!): musician,
    postMusician(firstName: String!, lastName: String!, instrument: String!, email: String!): musician}
    type musician {id: ID, firstName: String, lastName: String, instrument: String, email: String }
      type group {id: ID, groupName: String, contact: String, musicGenre: String, email: String, about: String}
  `;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
