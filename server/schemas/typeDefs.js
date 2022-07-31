const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
    _id: ID!
    authors: [String]
    name: String!
    description: String!
    image: String
    link: String
    title: String!
}

type User {
    _id: ID!
    username: String!
    email: String
    password: String!
    savedBooks: [Book]
}

BookInput {
    _id: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(BookData: BookInput): User
    removeBook(_id: ID!): User
    

}


`

;


module.exports = typeDefs;