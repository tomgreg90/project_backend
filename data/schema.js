const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `

    type Query { getUsers: [user],
        musicians(instrument: String!): [musician],
                musicianById(id: ID!): musician,
                groups: [group],
                groupById(id: ID!): group}

    type user {id: ID, username: String, password: String}

    type musician {id: ID, firstName: String, lastName: String, instrument: [String!], email: String, about: String, user_Id: Int } 

    type group {id: ID, groupName: String, contact: String, musicGenre: String, email: String, about: String} 

    type Mutation {updateMusician(id: ID!, email: String!): musician,
                  postMusician(firstName: String!, lastName: String!, instrument: String!, email: String!): musician,
                  postGroup(groupName: String!, contact:String!, musicGenre: String!, email: String!, about: String!): group}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
