const { knex } = require('./connection')
const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const data = require('./data')

const typeDefs = `#graphql
  type Student {
    id: ID!
    name: String
  }

  type Fruit {
    id: ID!
    firstname: String
    lastname: String
  }

  type Query {
    students: [Student]
    fruits: [Fruit]
  }
`;

const resolvers = {
    Query: {
        students: async () => await getStudents(),
        fruits: async () => await getFruits(),
    },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);


async function getStudents() {
    const result = await knex.select().from('student');
    return result
}

async function getFruits() {
    const result = data;
    return result
}