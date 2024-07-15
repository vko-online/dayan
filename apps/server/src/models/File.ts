import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class File {
  @Field()
  id!: string

  @Field()
  name!: string

  @Field()
  size!: number

  @Field()
  path!: string

  @Field()
  type!: string
}
