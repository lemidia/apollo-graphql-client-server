const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # Entity
  type Person {
    name: String!
    age: Int!
    gender: String!
    job: String!
    country: String!
    likeTV: Boolean!
    exercise: Exercise
  }

  type Exercise {
    name: String!
  }

  # Queries
  type Query {
    listOfPersons: [Person!]!
  }

  # Mutation
  type Mutation {
    addPerson(
      name: String!
      age: Int!
      gender: String!
      job: String!
      country: String!
      likeTV: Boolean!
    ): Person!
  }
`;

module.exports = typeDefs;
