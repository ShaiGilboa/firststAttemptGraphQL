const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
  const newLink = await prisma.link.create({
    data: {
      description: 'this is a description for link 1',
      url: 'this.is.an.address.com'
    },
  })
  const allLinks = await prisma.link.findMany()
  console.log(allLinks)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })