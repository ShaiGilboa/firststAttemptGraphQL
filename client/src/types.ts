export type Query = {
  info: string
  feed: Feed
  link: Link
  users: User[]
}

export type Mutation = {
  post: Link
  updateLink: Link
  deleteLink: Link
  signup: AuthPayLoad
  login: AuthPayLoad
  vote: Vote
}

export type Subscription = {
  newLink: Link
  newVote: Vote
}


export type Link = {
  id: number | string
  description: string
  url: string
  postedBy?: User
  votes?: Vote[]
}

export type AuthPayLoad = {
  token: string
  user: User
}

export type User = {
  id: number
  name: string
  email: string
  links: Link[]
}

export type Vote = {
  id: number
  link: Link
  user: User
}

export enum Sort {
  asc,
  desc
}

export type Feed = {
  links: Link[],
  count: number,
}