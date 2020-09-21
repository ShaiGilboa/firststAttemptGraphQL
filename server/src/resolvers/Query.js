const users = (parent, args, context, info) => {
  return context.prisma.user.findMany()
}

const  feed = async (parent, args, context, info) => {
  console.log('test')
  const where = args.filter
    ? {
      OR: [
        { description: { contains: args.filter } },
        { url: { contains: args.filter } },
      ],
    }
    : {

    }

    console.log('where',where)

  const links = await context.prisma.link.findMany({
    where,
    skip: args.skip,
    take: args.take,
    orderBy: args.orderBy,
  })
  
  const count = await context.prisma.link.count({ where })

  return {
    links,
    count,
  }

}

console.log('gggg')

module.exports = {
  feed,
  users,
}