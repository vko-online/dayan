import { Context } from 'src/context.ts'
import { ObjectType, Field, Ctx, FieldResolver, Resolver, Root } from 'type-graphql'

import { UserPartial } from './User.ts'

@ObjectType()
export class Review {
  @Field()
  id!: string

  @Field(type => Date)
  createdAt!: Date

  @Field()
  text!: string

  @Field()
  taskId!: string

  @Field()
  targetUserId!: string

  @Field()
  stars!: number

  @Field()
  authorId!: string

  @Field(type => [String])
  images!: string[]
}

@Resolver(of => Review)
export class ReviewRelationResolver {
  @FieldResolver(() => UserPartial)
  author(@Root() review: Review, @Ctx() context: Context) {
    return context.prisma.user.findFirst({
      where: {
        id: review.authorId
      },
      select: {
        id: true,
        name: true,
        photo: true
      }
    })
  }

  @FieldResolver(() => UserPartial)
  targetUser(@Root() review: Review, @Ctx() context: Context) {
    return context.prisma.user.findFirst({
      where: {
        id: review.targetUserId
      },
      select: {
        id: true,
        name: true,
        photo: true
      }
    })
  }
}
