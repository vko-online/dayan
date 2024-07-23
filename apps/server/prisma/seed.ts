import { faker } from '@faker-js/faker'
import { type Prisma } from '@prisma/client'

import categoriesJson from './categories.json' assert { type: 'json' }
import { prisma } from '../src/services/prisma.ts'

// const prisma = new PrismaClient()

function createRandomUser(): Prisma.UserCreateInput {
  return {
    phone: faker.phone.number('027#######'),
    role: 'USER'
  }
}

function createRandomTask(authorId: string, categoryId: string): Prisma.TaskCreateInput {
  return {
    authorId,
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    price: Number(faker.random.numeric(3)),
    categoryId,
    address: faker.address.streetAddress(),
    date: faker.date.recent(7),
    paymentType: 'FIXED',
    payment: 'CASH',
    state: 'PUBLISHED',
    status: 'CREATED',
    createdAt: new Date()
  }
}

function createRandomLocation() {
  return {
    latitude: Number(faker.address.latitude(-35.848461, -37.848461, 10)),
    longitude: Number(faker.address.longitude(175.763336, 173.763336, 10)),
    altitude: 300
  }
}

interface CategoryJson {
  name: string
  description?: string
  children?: CategoryJson[]
}

const categoryIds: string[] = []
async function createNestedCategories(arr: CategoryJson[], parent?: string): Promise<void> {
  for (const item of arr) {
    const dbItem = await prisma.category.create({
      data: {
        name: item.name,
        description: item.description,
        parentId: parent
      }
    })
    categoryIds.push(dbItem.id)
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
      const usr = await prisma.user.create({
        data: seedUser
      })
      const taskInput = createRandomTask(usr.id, faker.helpers.arrayElement(categoryIds))
      const task = await prisma.task.create({
        data: taskInput
      })
      const locationInput = createRandomLocation()
      console.log('locatino', {
        task: task.id,
        altitude: locationInput.altitude,
        location: {
          latitude: locationInput.latitude,
          longitude: locationInput.longitude
        }
      })
      await prisma.taskLocation.create({
        task: task.id,
        altitude: locationInput.altitude,
        location: {
          latitude: locationInput.latitude,
          longitude: locationInput.longitude
        }
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
