const typeDefs = `

    type Query { musicians: [musician],
                musicianById(id: ID!): musician,
                groups: [group],
                groupById(id: ID!): group,
                me: User}

    type musician {id: ID, firstName: String, lastName: String, instrument: String, email: String } 

    type User {id: ID!, username: String!, password: String!}

    type group {id: ID, groupName: String, contact: String, musicGenre: String, email: String, about: String} 

    type Mutation {updateMusician(id: ID!, email: String!): musician,
                  postMusician(firstName: String!, lastName: String!, instrument: String!, email: String!): musician,
                  postGroup(groupName: String!, contact:String!, musicGenre: String!, email: String!, about: String!): group,
                register(username: String!, password: String!): User!}
`;

module.exports = typeDefs;
