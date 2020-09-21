const feed = (parent, args, context, info) => {
  return context.prisma.link.findMany()
}

const users = (parent, args, context, info) => {
  const where = args.filter
    ? {
      OR: [
        { description: { contains: args.filter } },
        { url: { contains: args.filter } },
      ],
    }
    : {

    }

  const links = await context.prisma.link.findMany({
    where,
  })
  
  return links;
}

module.exports = {
  feed,
  users,
}