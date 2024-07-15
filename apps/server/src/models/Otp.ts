import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class Otp {
  @Field()
  id!: string

  @Field()
  phone!: string

  @Field()
  pin!: string

  @Field(() => Date)
  createdAt!: Date

  @Field(() => Date)
  expiredAt!: Date
}
