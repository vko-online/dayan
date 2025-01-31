import Filter from 'bad-words'
import { NotificationType } from 'src/constants/topics.ts'
import { Context } from 'src/context.ts'
import { Conversation, Message } from 'src/models/index.ts'
import { sendOrPublish } from 'src/services/broker.ts'
import { assertAuth, assertObject } from 'src/utils/assert.ts'
import {
  Arg,
  Authorized,
  Ctx,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver
} from 'type-graphql'

const sensitivityFilter = new Filter()

@InputType()
class ConversationInput {
  @Field()
  conversationId!: string

  @Field()
  content!: string
}

@ObjectType()
export class MessageWithTargetIds {
  @Field()
  targetId!: string

  @Field()
  conversationId!: string

  @Field(type => Message)
  message!: Message
}

@ObjectType()
export class BatchPayload {
  @Field()
  count!: number
}

@Resolver()
export default class ConversationResolver {
  @Authorized()
  @Query(() => [Conversation])
  async conversations(@Ctx() context: Context): Promise<Conversation[]> {
    assertAuth(context)
    return await context.prisma.conversation.findMany({
      where: {
        members: {
          some: {
            id: context.currentUserId
          }
        }
      },
      orderBy: {
        lastMessageDate: 'desc'
      }
    })
  }

  @Authorized()
  @Mutation(() => BatchPayload)
  async markAsRead(
    @Arg('messageIds', () => [String], { nullable: false }) messageIds: string[],
    @Ctx() context: Context
  ): Promise<BatchPayload> {
    assertAuth(context)
    return await context.prisma.message.updateMany({
      where: {
        id: {
          in: messageIds
        },
        NOT: {
          readByIds: {
            hasEvery: [context.currentUserId]
          }
        }
      },
      data: {
        readByIds: {
          push: context.currentUserId
        }
      }
    })
  }

  @Authorized()
  @Mutation(() => BatchPayload)
  async markAsReceived(
    @Arg('messageIds', () => [String], { nullable: false }) messageIds: string[],
    @Ctx() context: Context
  ): Promise<BatchPayload> {
    assertAuth(context)
    return await context.prisma.message.updateMany({
      where: {
        id: {
          in: messageIds
        },
        NOT: {
          receivedByIds: {
            hasEvery: [context.currentUserId]
          }
        }
      },
      data: {
        receivedByIds: {
          push: context.currentUserId
        }
      }
    })
  }

  @Authorized()
  @Mutation(() => Message)
  async sendMessage(
    @Arg('input') input: ConversationInput,
    @Ctx() context: Context
  ): Promise<Message> {
    assertAuth(context)
    const currentUser = await context.prisma.user.findFirst({
      where: {
        id: context.currentUserId
      }
    })
    assertObject(currentUser)

    let content = input.content

    content = sensitivityFilter.clean(input.content)

    const msg = await context.prisma.message.create({
      data: {
        conversation: {
          connect: {
            id: input.conversationId
          }
        },
        content,
        author: {
          connect: {
            id: context.currentUserId
          }
        },
        readByIds: {
          set: [context.currentUserId]
        },
        receivedByIds: {
          set: [context.currentUserId]
        }
      }
    })
    const convo = await context.prisma.conversation.update({
      where: {
        id: input.conversationId
      },
      data: {
        lastMessageAuthor: currentUser?.name,
        lastMessageContent: msg.content,
        lastMessageDate: msg.createdAt
      },
      select: {
        members: {
          select: {
            id: true
          }
        }
      }
    })

    // todo: redundant check here
    if (convo != null) {
      const [targetId] = convo.members
        .map((v: any) => v.id)
        .filter((v: any) => v !== context.currentUserId)

      const messageWithTargetIds: MessageWithTargetIds = {
        targetId,
        conversationId: input.conversationId,
        message: {
          ...msg,
          createdAt: new Date(msg.createdAt) // todo: temp hack for now while scalars not added
        }
      }
      await sendOrPublish({
        topic: NotificationType.NEW_MESSAGE,
        data: messageWithTargetIds,
        to: [targetId],
        message: {
          badge: 1,
          title: 'You have new message',
          subtitle: `New message from ${currentUser.name ?? currentUser.phone}`,
          body: 'New message'
        }
      })
    }
    return msg
  }
}
