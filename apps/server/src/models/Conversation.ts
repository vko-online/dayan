import { Context } from 'src/context.ts'
import { NullOrUndefined } from 'src/utils/type.ts'
import { ObjectType, Field, Ctx, FieldResolver, Resolver, Root } from 'type-graphql'

import { Message } from './Message.ts'
import { UserPartial } from './User.ts'

@ObjectType()
export class Conversation {
  @Field()
  id!: string

  @Field(() => Date)
  createdAt!: Date

  @Field(type => String, { nullable: true })
  lastMessageContent?: NullOrUndefined<string>

  @Field(type => Date, { nullable: true })
  lastMessageDate?: NullOrUndefined<Date>

  @Field(type => String, { nullable: true })
  lastMessageAuthor?: NullOrUndefined<string>
}

@Resolver(of => Conversation)
export class ConversationRelationResolver {
  @FieldResolver(() => [Message])
  messages(@Root() conversation: Conversation, @Ctx() context: Context) {
    return context.prisma.message.findMany({
      where: {
        conversationId: conversation.id
      },
      select: {
        authorId: true,
        content: true,
        conversationId: true,
        createdAt: true,
        files: true,
        id: true,
        readByIds: true,
        receivedByIds: true
      }
    })
  }

  @FieldResolver(() => [UserPartial])
  members(@Root() conversation: Conversation, @Ctx() context: Context) {
    return context.prisma.user.findMany({
      where: {
        conversations: {
          some: {
            id: conversation.id
          }
        }
      },
      select: {
        id: true,
        name: true,
        photo: true
      }
    })
  }
}
