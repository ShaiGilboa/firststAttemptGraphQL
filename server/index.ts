import { GraphQLServer } from 'graphql-yoga'
import { parseJsonText } from 'typescript'

// defining the Schema
const typeDefs : string  = `
  type Query {
    info: String!
    feed: [Link!]! 
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
// he actual implementation of the schema - structure is identical to the schema
const resolvers : ResolversType = {
  Query: {
    // info: () => null
    info: () => `This is the API of a Hackernews Clone`, // this is a Scalar type - a leaf in the tree
    feed: () => links,
  },

  Link: {
    id: (parent : LinkType ) => parent.id,
    description: (parent : LinkType ) => parent.description,
    url: (parent : LinkType ) => parent.url,
  }
}

// Bundling both to create a server (from grapql-yoga) What API operation, and how to resolve them
const server : GraphQLServer = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))