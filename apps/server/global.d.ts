import { type PrismaClient } from '@prisma/client'
import { type RedisPubSub } from 'graphql-redis-subscriptions'

declare global {
  let prisma: PrismaClient
  let redis: RedisPubSub
}
