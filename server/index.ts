import { GraphQLServer } from 'graphql-yoga'

// defining the Schema
const typeDefs : string  = `
  type Query {
    info: String!
    feed: [Link!]! 
  }

  type Mutation {
    post(url: String!, description: String!): Link!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`
let links : LinkType[] = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL',
}]
// the actual implementation of the schema - structure is identical to the schema
    // TODO: I dont know how to type this
const resolvers = {
  Query: {
    // info: () => null
    info: () => `This is the API of a Hackernews Clone`, // this is a Scalar type - a leaf in the tree
    feed: () => links,
  },

  Link: {
    /* as this is a resolver IN a resolver, it is passed 4 arguments:
        root|parent - the result of the previous resolver,
    */
    id: (parent : LinkType ) => parent.id,
    description: (root : LinkType ) => root.description,
    url: (parentORroot : LinkType ) => parentORroot.url,
  }
}

// Bundling both to create a server (from grapql-yoga) What API operation, and how to resolve them
const server : GraphQLServer = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))