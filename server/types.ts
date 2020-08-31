interface LinkType {
  id: number,
  description: string,
  url: string,
}

interface ResolversType {
  Query : any,
  Link: any,
}
interface ContextType {
  prisma: any,
}