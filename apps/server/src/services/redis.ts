import { RedisPubSub } from 'graphql-redis-subscriptions'
import { createPubSub } from 'graphql-yoga'
import { Redis } from 'ioredis'
import { NotificationType } from 'src/constants/topics.ts'
import { MessageWithTargetIds } from 'src/resolvers/ConversationResolver.ts'

let _redis: RedisPubSub

export const yogaPubSub = createPubSub<{
  [NotificationType.NEW_MESSAGE]: [MessageWithTargetIds]
}>()

const redisOptions = {
  password: process.env.REDIS_PASSWORD,
  host: process.env.REDIS_IP,
  port: Number(process.env.REDIS_PORT),
  retryStrategy: (times: number) => {
    // reconnect after
    return Math.min(times * 50, 2000)
  }
}

if (process.env.NODE_ENV === 'production') {
  _redis = new RedisPubSub({
    publisher: new Redis(redisOptions),
    subscriber: new Redis(redisOptions)
  })
} else {
  if ((global as any).redis == null) {
    ;(global as any).redis = new RedisPubSub({
      publisher: new Redis(redisOptions),
      subscriber: new Redis(redisOptions)
    })
  }
  _redis = (global as any).redis
}

export const redis = _redis
