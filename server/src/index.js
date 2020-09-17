const { GraphQLServer } = require('graphql-yoga');

// Prisma Client exposes a CRUD API for the models in your datamodel for you to read and write in your database.
// These methods are auto-generated based on your model definitions in schema.prisma
// to see the Prisma studio, run in terminal:
  //  npx prisma studio --experimental
const { PrismaClient } = require('@prisma/client')

// the actual implementation of the schema - structure is identical to the schema
    // TODO: I dont know how to type this
const resolvers = {
  Query: {
    // info: () => null
    info: () => `This is the API of a Hackernews Clone`, // this is a Scalar type - a leaf in the tree
    feed: async (parent, args, context, info) =>{
      // accessing the DB through the Prisma client
      return context.prisma.link.findMany()
    },
    // link: (id: number) => links[id]
  },
  Mutation: {
    post: (parent, args, context, info) => {
      const newLink  = context.prisma.link.create({
        data: {
          url: args.url,
          description: args.description
        },
      })
      return newLink
    },
    updateLink: (parent, args) => {
      // links[args.id] = {
      //   ...args
      // }
      return args
    },
    deleteLink: (parent, args) => {
      // const outedLink : LinkType | undefined = links.find((link : LinkType) => link.id===args.id)
      // links = links.filter((link: LinkType) => link.id!==args.id)
      // return outedLink
    }
  },

  /*
    -----no need because it is straight forward 
  */
  // Link: {
  //   /* as this is a resolver IN a resolver, it is passed 4 arguments:
  //       root|parent - the result of the previous resolver,
  //   */
  //   id: (parent : LinkType ) => parent.id,
  //   description: (root : LinkType ) => root.description,
  //   url: (parentORroot : LinkType ) => parentORroot.url,
  // }
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