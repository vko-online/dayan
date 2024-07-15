import { NullOrUndefined } from 'src/utils/type.ts'
import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class UserCategory {
  @Field()
  categoryId!: string

  @Field()
  userId!: string

  @Field(type => Number, { nullable: true })
  price?: NullOrUndefined<number>

  @Field(type => String, { nullable: true })
  description?: string
}
