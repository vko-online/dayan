// send push or pubsub

import { type ExpoPushMessage } from 'expo-server-sdk'
import { NotificationType } from 'src/constants/topics.ts'

import { sendPushNotification } from './expo-push.ts'
import { prisma } from './prisma.ts'
import { redis } from './redis.ts'

interface Input<T> {
  to: string | string[]
  topic: NotificationType
  data: T
  message: Pick<ExpoPushMessage, 'badge' | 'body' | 'title' | 'subtitle'>
}

// todo: incorrect implementation
// we should send push anyway
// then in the app, device to show local notification or in-app
export async function sendOrPublish<T>(input: Input<T>): Promise<void> {
  const users = await prisma.user.findMany({
    where: {
      id: {
        in: [input.to as string]
      },
      pushId: {
        not: null
      }
    }
  })
  const msgs = users.map((user: any) => ({
    to: user.pushId as string,
    badge: input.message.badge,
    body: input.message.body,
    data: input.data as object,
    title: input.message.title,
    subtitle: input.message.subtitle
  }))
  await sendPushNotification(msgs)
  await redis.publish(input.topic, input.data)
}
