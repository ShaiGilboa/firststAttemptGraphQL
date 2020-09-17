const { GraphQLServer } = require('graphql-yoga');

// Prisma Client exposes a CRUD API for the models in your datamodel for you to read and write in your database.
// These methods are auto-generated based on your model definitions in schema.prisma
// to see the Prisma studio, run in terminal:
  //  npx prisma studio --experimental
const { PrismaClient } = require('@prisma/client')


const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')

const resolvers = {
  Query,
  Mutation,
  User,
  Link
}

// Bundling both to create a server (from grapql-yoga) What API operation, and how to resolve them
const prisma = new PrismaClient();

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
        prisma,
    }
  }
})
server.start(() => console.log(`Server is running on http://localhost:4000`))