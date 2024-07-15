import * as PrismaNamespace from '@prisma/client'

export {}

declare global {
  namespace globalThis {
    export import Prisma = PrismaNamespace
  }
}
