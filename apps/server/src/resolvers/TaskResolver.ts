import { TaskPayment, TaskPaymentType } from '@prisma/client/wasm'
import { GraphQLVoid } from 'graphql-scalars'
import Upload, { FileUpload } from 'graphql-upload/Upload.mjs'
import { Context } from 'src/context.ts'
import { File, Task, TaskLocation } from 'src/models/index.ts'
import { saveFile } from 'src/services/fileUpload.ts'
import { assertAuth, assertObject } from 'src/utils/assert.ts'
import { NullOrUndefined } from 'src/utils/type.ts'
import { Arg, Authorized, Ctx, Field, ID, InputType, Mutation, Query, Resolver } from 'type-graphql'

@InputType()
class LocationWithAltitudeInput {
  @Field()
  altitude!: number

  @Field()
  latitude!: number

  @Field()
  longitude!: number
}

@InputType()
class TaskInput {
  @Field()
  description!: string

  @Field(type => Number, { nullable: true })
  price?: NullOrUndefined<number>

  @Field(type => TaskPaymentType, { nullable: true })
  paymentType?: NullOrUndefined<TaskPaymentType>

  // cash only for now
  // @Field(type => String, { nullable: true })
  //   payment?: Payment

  @Field(type => Date, { nullable: true })
  date?: NullOrUndefined<Date>

  @Field(type => String, { nullable: true })
  address?: NullOrUndefined<string>

  @Field(type => LocationWithAltitudeInput, { nullable: true })
  location?: NullOrUndefined<LocationWithAltitudeInput>

  @Field(type => String, { nullable: true })
  categoryId?: NullOrUndefined<string>

  @Field(() => [Upload], { nullable: true })
  images?: NullOrUndefined<FileUpload[]>
}

@InputType()
class LocationInput {
  @Field()
  latitude!: number

  @Field()
  longitude!: number
}

@Resolver()
export default class TaskResolver {
  @Authorized()
  @Mutation(() => Task)
  async createTask(
    @Arg('data', () => TaskInput) data: TaskInput,
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
      task: task.id,
      altitude: data.location?.altitude ?? 0,
      location: {
        latitude: data.location?.latitude ?? 0,
        longitude: data.location?.longitude ?? 0
      }
    })

    // todo: emit to categoryId followers

    return task
  }

  @Authorized()
  @Query(() => [Task])
  async tasks(@Ctx() context: Context): Promise<Task[]> {
    return await context.prisma.task.findMany({
      where: {
        status: 'CREATED'
      }
    })
  }

  @Authorized()
  @Query(() => [Task])
  async myTasks(@Ctx() context: Context): Promise<Task[]> {
    const currentUserId = context.currentUserId as string
    return await context.prisma.task.findMany({
      where: {
        authorId: currentUserId
      }
    })
  }

  @Authorized()
  @Mutation(() => GraphQLVoid, { nullable: true })
  async toggleFavorite(
    @Ctx() context: Context,
    @Arg('taskId', () => ID) taskId: string
  ): Promise<void> {
    assertAuth(context)
    const task = await context.prisma.task.findFirst({
      where: {
        id: taskId
      }
    })
    assertObject(task)
    const currentUserId = context.currentUserId as string
    const exists = await context.prisma.userFavorites.findFirst({
      where: {
        userId: currentUserId,
        taskId
      }
    })
    if (exists) {
      await context.prisma.userFavorites.delete({
        where: {
          userId: exists.userId
        }
      })
    } else {
      await context.prisma.userFavorites.create({
        data: {
          userId: currentUserId,
          taskId
        }
      })
    }
  }

  @Authorized()
  @Mutation(() => GraphQLVoid, { nullable: true })
  async trackView(@Ctx() context: Context, @Arg('taskId', () => ID) taskId: string): Promise<void> {
    assertAuth(context)
    const exists = await context.prisma.taskView.findFirst({
      where: {
        userId: context.currentUserId,
        taskId
      }
    })
    if (!exists) {
      await context.prisma.taskView.create({
        data: {
          taskId,
          userId: context.currentUserId
        }
      })
    }
  }

  @Authorized()
  @Query(() => [Task])
  async findClosestTasks(
    @Ctx() context: Context,
    @Arg('location', () => LocationInput) location: LocationInput
  ): Promise<Task[]> {
    const taskLocations = await context.prisma.taskLocation.findClosestPoints(
      location.latitude,
      location.longitude
    )
    return await context.prisma.task.findMany({
      where: {
        id: {
          in: taskLocations.map((v: TaskLocation) => v.task)
        }
      }
    })
  }
}
