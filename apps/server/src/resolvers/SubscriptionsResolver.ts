import { Args, Field, ArgsType, Resolver, Root, Subscription, Authorized } from 'type-graphql'
import { redis } from 'src/services/redis'
import { NEW_MESSAGE } from 'src/constants/topics'
import { withFilter } from 'graphql-subscriptions'
import { MessageWithTargetIds } from './ConversationResolver'

@ArgsType()
class GenericListenerArgs {
  @Field()
    currentUserId!: string
}

@Resolver()
export default class SubscriptionsResolver {
  @Authorized()
  @Subscription(() => MessageWithTargetIds, {
    subscribe: withFilter(() => redis.asyncIterator(NEW_MESSAGE), (payload: MessageWithTargetIds, variables: GenericListenerArgs) => {
      return payload.targetId === variables.currentUserId
    })
  })
  async newMessage (
    @Root() payload: MessageWithTargetIds,
      @Args() args: GenericListenerArgs
  ): Promise<MessageWithTargetIds> {
    return payload
  }
}
