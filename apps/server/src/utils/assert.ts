import { GraphQLError } from 'graphql'
import { Context } from 'src/context.ts'

type NonNullContext = Context & {
  currentUserId: string
}

export function assertAuth(
  context: Context,
  message = 'Unauthorized'
): asserts context is NonNullContext {
  if (typeof context.currentUserId !== 'string') {
    throw new GraphQLError(message)
  }
}

export function assertId(id: unknown, message = 'Invalid ID'): asserts id is string {
  if (typeof id !== 'string') {
    throw new GraphQLError(message)
  }
}

export function assertObject<T extends unknown>(
  obj: T,
  message = 'Object not found'
): asserts obj is NonNullable<T> {
  if (obj == null) {
    throw new GraphQLError(message)
  }
}
