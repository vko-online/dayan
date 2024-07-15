import { NullOrUndefined } from 'src/utils/type.ts'
import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class Category {
  @Field()
  id!: string

  @Field()
  name!: string

  @Field(type => String, { nullable: true })
  description?: NullOrUndefined<string>

  @Field(type => String, { nullable: true })
  image?: NullOrUndefined<string>

  @Field(type => String, { nullable: true })
  parentId?: NullOrUndefined<string>
}
