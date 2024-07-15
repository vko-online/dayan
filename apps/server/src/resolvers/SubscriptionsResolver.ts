import { NotificationType } from 'src/constants/topics.ts'
import { Args, Field, ArgsType, Resolver, Root, Subscription, Authorized } from 'type-graphql'

import { MessageWithTargetIds } from './ConversationResolver.ts'

@ArgsType()
class GenericListenerArgs {
  @Field()
  currentUserId!: string
}

@Resolver()
export default class SubscriptionsResolver {
  @Authorized()
  @Subscription(() => MessageWithTargetIds, {
    topics: NotificationType.NEW_MESSAGE,
    filter: ({ payload, args }) => {
      return payload.targetId === args.currentUserId
    }
  })
  async newMessage(
    @Root() payload: MessageWithTargetIds,
    @Args() args: GenericListenerArgs
  ): Promise<MessageWithTargetIds> {
    return payload
  }
}
