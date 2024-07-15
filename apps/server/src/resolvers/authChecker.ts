import { type Context } from 'src/context.ts'
import { type AuthChecker } from 'type-graphql'

const authChecker: AuthChecker<Context> = async ({ context: { currentUserId, prisma } }, roles) => {
  if (roles.length === 0) {
    // if `@Authorized()`, check only if user exists
    return currentUserId != null
  }
  // there are some roles defined now

  if (currentUserId == null) {
    // and if no user, restrict access
    return false
  }

  const user = await prisma.user.findFirstOrThrow({
    where: {
      id: currentUserId
    }
  })

  if (roles.includes(String(user.role))) {
    // grant access if the roles overlap
    return true
  }

  // no roles matched, restrict access
  return false
}

export default authChecker
