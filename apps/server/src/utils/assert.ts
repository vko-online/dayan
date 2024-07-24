import { GraphQLError } from 'graphql'
import { Context } from 'src/context.ts'

type NonNullContext = Context & {
  currentUserId: string
}

export function assertAuth(context: Context): asserts context is NonNullContext {
  if (typeof context.currentUserId !== 'string') {
    throw new GraphQLError('Unauthorized')
  }
}

export function assertId(id: unknown): asserts id is string {
  if (typeof id !== 'string') {
    throw new GraphQLError('Invalid ID')
  }
}

export function assertObject<T extends unknown>(obj: T): asserts obj is NonNullable<T> {
  if (obj == null) {
    throw new GraphQLError('Object not found')
  }
}
