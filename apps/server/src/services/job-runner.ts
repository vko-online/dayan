import { User } from 'src/models/index.ts'
import { prisma } from 'src/services/prisma.ts'

import { currentlyOnline } from './push-notifications.ts'

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
      users.map((item: User) => ({ count: users.length - 1, pushId: item.pushId as string }))
    )
  }
}
