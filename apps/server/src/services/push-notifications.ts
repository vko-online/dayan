// import { prisma } from 'src/context'

import { User } from 'src/models/index.ts'

import { sendPushNotification } from './expo-push.ts'

export async function newBunRegisteredNearYou(pushId: string, usr: User): Promise<void> {
  throw new Error('not implemented')
}

export async function peopleViewedYourProfile(pushId: string, usrs: User[]): Promise<void> {
  throw new Error('not implemented')
}

export async function weeklyDigestNearYou(pushId: string, len: number): Promise<void> {
  throw new Error('not implemented')
}

export async function currentlyOnline(items: { pushId: string; count: number }[]): Promise<void> {
  await sendPushNotification(
    items.map(item => ({
      to: item.pushId,
      title: `Currently there is ${item.count} newlanders online!`
    }))
  )
}
