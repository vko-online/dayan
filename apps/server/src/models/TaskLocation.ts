import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class GeoLocation {
  @Field()
  latitude!: number

  @Field()
  longitude!: number
}

@ObjectType()
export class TaskLocation {
  @Field()
  id!: string

  @Field()
  task!: string

  @Field()
  altitude!: number

  @Field(type => GeoLocation)
  location!: GeoLocation
}
