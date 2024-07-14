import { faker } from '@faker-js/faker'
import { PrismaClient, type Prisma } from '@prisma/client'

import categoriesJson from './categories.json'

const prisma = new PrismaClient()

function createRandomUser(): Prisma.UserCreateInput {
  return {
    phone: faker.phone.number('027#######'),
    role: 'USER'
  }
}

interface CategoryJson {
  name: string
  description?: string
  children?: CategoryJson[]
}

async function createNestedCategories(arr: CategoryJson[], parent?: string): Promise<void> {
  for (const item of arr) {
    const dbItem = await prisma.category.create({
      data: {
        name: item.name,
        description: item.description,
        parentId: parent
      }
    })
    if (item.children != null) {
      await createNestedCategories(item.children, dbItem.id)
    }
  }
}

async function main(): Promise<void> {
  // const existingUsersCount = await prisma.user.count()
  // if (existingUsersCount !== 0) {
  //   throw new Error('Your database is not empty, run "npm run reset" first')
  // }
  console.log('Start seeding ...')
  const USERS: Prisma.UserCreateInput[] = []
  Array.from({ length: 20 }).forEach(() => {
    USERS.push(createRandomUser())
  })

  await createNestedCategories(categoriesJson)

  for (const seedUser of USERS) {
    try {
      await prisma.user.create({
        data: seedUser
      })
    } catch (e) {
      console.log(`Failed to create ${seedUser.phone}`, e)
    }
  }
  console.log('Seeding finished.')
  process.exit(0)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
