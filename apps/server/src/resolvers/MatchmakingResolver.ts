import { TaskLocation } from '@prisma/client'
import Upload, { FileUpload } from 'graphql-upload/Upload.mjs'
import { Context } from 'src/context'
import { type File, Task, TaskPayment, TaskPaymentType } from 'src/generated/type-graphql'
import { saveFile } from 'src/services/fileUpload'
import { Arg, Authorized, Ctx, Field, InputType, Mutation, Query, Resolver, FieldResolver, Root } from 'type-graphql'

class LocationWithAltitudeInput {
  @Field()
  altitude!: number

  @Field()
  latitude!: number

  @Field()
  longitude!: number
}

class LocationInput {
  @Field()
  latitude!: number

  @Field()
  longitude!: number
}

@InputType()
class TaskInput {
  @Field()
  description!: string

  @Field({ nullable: true })
  price?: number

  @Field({ nullable: true })
  paymentType?: TaskPaymentType

  // cash only for now
  // @Field({ nullable: true })
  //   payment?: Payment

  @Field({ nullable: true })
  date?: Date

  @Field({ nullable: true })
  address?: string

  @Field({ nullable: true })
  location?: LocationWithAltitudeInput

  @Field({ nullable: true })
  categoryId?: string

  @Field(() => [Upload], { nullable: true })
  images?: FileUpload[]
}

@Resolver()
export default class MatchmakingResolver {
  @Authorized()
  @Mutation(() => Task)
  async createTask(
    @Arg('data', () => TaskInput, { nullable: false }) data: TaskInput,
    @Ctx() context: Context
  ): Promise<Task> {
    const files: File[] = []
    if (data.images) {
      for (const item of data.images) {
        const file = await saveFile(item)
        files.push(file)
      }
    }

    const task = await context.prisma.task.create({
      data: {
        title: data.categoryId ?? '',
        address: data.address,
        categoryId: data.categoryId,
        date: data.date,
        paymentType: data.paymentType,
        payment: TaskPayment.CASH,
        status: 'CREATED',
        price: data.price,
        description: data.description,
        authorId: context.currentUserId as string,
        images: files.map(v => v.id)
      }
    })

    await context.prisma.taskLocation.create({
      taskId: task.id,
      altitude: data.location?.altitude ?? 0,
      location: {
        latitude: data.location?.latitude ?? 0,
        longitude: data.location?.longitude ?? 0,
      }
    })

    // todo: emit to categoryId followers

    return task
  }

  @Authorized()
  @Query(() => [Task])
  async availableTasks(@Ctx() context: Context): Promise<Task[]> {
    return await context.prisma.task.findMany({
      where: {
        status: 'CREATED'
      }
    })
  }

  @Authorized()
  @Query(() => [Task])
  async findClosestTasks(@Ctx() context: Context, @Arg('location', () => LocationInput) location: LocationInput): Promise<Task[]> {
    const taskLocations = await context.prisma.taskLocation.findClosestPoints(location.latitude, location.longitude)
    return await context.prisma.task.findMany({
      where: {
        id: {
          in: taskLocations.map(v => v.taskId)
        }
      }
    })
  }
}
