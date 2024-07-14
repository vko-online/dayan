import { type RedisPubSub } from 'graphql-redis-subscriptions'
import { type Context as WsContext } from 'graphql-ws'
import jwt from 'jsonwebtoken'
import { ExtendedPrismaClient, prisma } from 'src/services/prisma'
import { redis } from 'src/services/redis'
import { AuthorizationError } from 'type-graphql'

export interface Context {
  prisma: ExtendedPrismaClient
  currentUserId: string | null
  pubsub: RedisPubSub
}

async function buildContext(bearerToken: string | undefined | null): Promise<Context> {
  let currentUserId = null
  if (bearerToken?.includes('Bearer') === true) {
    const token = bearerToken.replace('Bearer ', '')
    const verified = jwt.verify(token, process.env.JWT_SECRET as string)
    const usr = await prisma.user.findFirst({
      where: {
        id: verified as string
      }
    })
    if (usr != null) {
      currentUserId = verified as string
    } else {
      throw new AuthorizationError()
    }
  }
  return {
    prisma,
    pubsub: redis,
    currentUserId
  }
}

export async function createContext({ req }: { req: any }): Promise<Context> {
  return await buildContext(req.headers.authorization)
}

export async function createWsContext(ctx: WsContext): Promise<Context> {
  return await buildContext(ctx?.connectionParams?.authorization as string)
}
