import { type User } from 'src/generated/type-graphql'
import { prisma } from 'src/services/prisma'

import { currentlyOnline } from './push-notifications'

export async function currentlyOnlineRunner(): Promise<void> {
  // const usersIds = await findAllOnline()
  const usersIds: User[] = []
  const users = await prisma.user.findMany({
    where: {
      id: {
        in: usersIds?.map(v => v.id)
      },
      pushId: {
        not: null
      }
    }
  })
  if (users.length > 0) {
    await currentlyOnline(
      users.map(item => ({ count: users.length - 1, pushId: item.pushId as string }))
    )
  }
}
