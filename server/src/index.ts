import { GraphQLServer } from 'graphql-yoga';
import { PrismaClient } from '@prisma/client';

// the actual implementation of the schema - structure is identical to the schema
    // TODO: I dont know how to type this
const resolvers = {
  Query: {
    // info: () => null
    info: () => `This is the API of a Hackernews Clone`, // this is a Scalar type - a leaf in the tree
    feed: async (parent: any, args: any, context: ContextType, info: any) =>{
      return context.prisma.link.findMany()
    },
    // link: (id: number) => links[id]
  },
  Mutation: {
    post: (parent: any, args: LinkType, context: ContextType, info: any) => {
      const newLink : LinkType = context.prisma.link.create({
        data: {
          url: args.url,
          description: args.url
        },
      })
      return newLink
    },
    updateLink: (parent: any, args: LinkType) => {
      // links[args.id] = {
      //   ...args
      // }
      return args
    },
    deleteLink: (parent: any, args: any) => {
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

const server : GraphQLServer = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma,
  }
})
server.start(() => console.log(`Server is running on http://localhost:4000`))