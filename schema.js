const typeDefs =

`type Query {
  getUsers: [user]
  musiciansByInstrument(instrument: String!): [musician]
  musicianById(id: ID!): musician
  groups: [group]
  groupById(id: ID!): group
}

type user {
  id: ID
  username: String
  password: String
}

type musician {
  id: ID
  firstName: String
  lastName: String
  instrument: [String!]
  Instruments: [Instrument]
  email: String
  about: String
  user_Id: Int
}

type Instrument {
  id: ID
  instrument: String
  
}

type group {
  id: ID
  groupName: String
  contact: String
  musicGenre: String
  email: String
  about: String
}

type Mutation {
  updateMusician(id: ID!, email: String!): musician
  postMusician(
    firstName: String!
    lastName: String!
    instrument: String!
    email: String!
  ): musician
  postGroup(
    groupName: String!
    contact: String!
    musicGenre: String!
    email: String!
    about: String!
  ): group
}`

module.exports = typeDefs