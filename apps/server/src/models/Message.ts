import { Context } from 'src/context.ts'
import { ObjectType, Field, Ctx, FieldResolver, Resolver, Root } from 'type-graphql'

import { UserPartial } from './User.ts'

@ObjectType()
export class Message {
  @Field()
  id!: string

  @Field(() => Date)
  createdAt!: Date

  @Field()
  content!: string

  @Field()
  authorId!: string

  @Field(type => [String])
  readByIds!: string[]

  @Field(type => [String])
  receivedByIds!: string[]

  @Field(type => [String])
  files!: string[]

  @Field()
  conversationId!: string
}

@Resolver(of => Message)
export class MessageRelationResolver {
  @FieldResolver(() => UserPartial)
  author(@Root() message: Message, @Ctx() context: Context) {
    return context.prisma.user.findFirst({
      where: {
        id: message.authorId
      },
      select: {
        id: true,
        name: true,
        photo: true
      }
    })
  }
}
