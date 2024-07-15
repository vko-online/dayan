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
  taskId!: string

  @Field()
  altitude!: number

  @Field(type => GeoLocation)
  location!: GeoLocation
}
