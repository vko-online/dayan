// import { Prisma } from '@prisma/client'
import { ActivityType } from '@prisma/client/wasm'
import { NullOrUndefined } from 'src/utils/type.ts'
import { ObjectType, Field, registerEnumType } from 'type-graphql'

registerEnumType(ActivityType, {
  name: 'ActivityType'
})

@ObjectType()
export class Activity {
  @Field()
  id!: string

  @Field(() => Date)
  createdAt!: Date

  @Field()
  text!: string

  @Field(() => ActivityType)
  type!: ActivityType

  @Field()
  authorId!: string

  @Field(type => String, { nullable: true })
  modelType?: NullOrUndefined<string>

  @Field(type => String, { nullable: true })
  modelId?: NullOrUndefined<string>
}
