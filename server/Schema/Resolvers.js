const persons = require("../personData");
const resolvers = {
  Query: {
    listOfPersons() {
      return persons;
    },
  },

  Mutation: {
    addPerson(parent, args) {
      const person = args;
      persons.push(person);
      return person;
    },
  },
};

module.exports = resolvers;
