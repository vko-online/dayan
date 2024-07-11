import { PrismaClient } from '@prisma/client'
// import { BLIND_MATCH } from 'src/constants/topics'
// import { sendOrPublish } from './broker'

let _prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  _prisma = new PrismaClient()
} else {
  if ((global as any).prisma == null) {
    (global as any).prisma = new PrismaClient()
  }
  _prisma = (global as any).prisma
}

export const prisma = _prisma

export async function removePushId (pushIds: string[]): Promise<void> {
  for (const pushId of pushIds) {
    const user = await prisma.user.findFirst({
      where: {
        pushId
      }
    })
    if (user != null) {
      await prisma.user.update({
        where: {
          id: user.id
        },
        data: {
          pushId: null
        }
      })
    }
  }
}
