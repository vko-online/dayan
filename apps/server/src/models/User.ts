import { Context } from 'src/context.ts'
import { NullOrUndefined } from 'src/utils/type.ts'
import { ObjectType, Field, Resolver, FieldResolver, Root, Ctx } from 'type-graphql'

import { Verification } from './Verification.ts'

@ObjectType('User')
export class User {
  @Field()
  id!: string

  @Field()
  phone!: string

  @Field(type => String, { nullable: true })
  pushId?: NullOrUndefined<string>

  @Field(type => [String], { nullable: true })
  categoryIds?: NullOrUndefined<string[]>

  @Field(type => String, { nullable: true })
  verificationId?: NullOrUndefined<string>

  @Field(type => String, { nullable: true })
  name?: NullOrUndefined<string>

  @Field(type => String, { nullable: true })
  photo?: NullOrUndefined<string>
}
// todo: do we need interface for User & UserPartial?
@ObjectType('UserPartial')
export class UserPartial {
  @Field()
  id!: string

  @Field(type => String, { nullable: true })
  name?: NullOrUndefined<string>

  @Field(type => String, { nullable: true })
  photo?: NullOrUndefined<string>
}

@Resolver(of => User)
export class UserRelationResolver {
  @FieldResolver(() => Verification, { nullable: true })
  verification(@Root() user: User, @Ctx() context: Context) {
    if (!user.verificationId) {
      return null
    }
    return context.prisma.verification.findFirst({
      where: {
        id: user.verificationId
      },
      select: {
        id: true,
        status: true
      }
    })
  }
}
