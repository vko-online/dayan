import { TaskPayment, TaskPaymentType, TaskState, TaskStatus } from '@prisma/client/wasm'
import { Context } from 'src/context.ts'
import { assertAuth } from 'src/utils/assert.ts'
import { NullOrUndefined } from 'src/utils/type.ts'
import {
  ObjectType,
  Field,
  registerEnumType,
  FieldResolver,
  Ctx,
  Resolver,
  Root
} from 'type-graphql'

import { Category } from './Category.ts'
import { TaskLocation } from './TaskLocation.ts'
import { UserPartial } from './User.ts'

registerEnumType(TaskState, {
  name: 'TaskState'
})
registerEnumType(TaskStatus, {
  name: 'TaskStatus'
})
registerEnumType(TaskPayment, {
  name: 'TaskPayment'
})
registerEnumType(TaskPaymentType, {
  name: 'TaskPaymentType'
})

@ObjectType()
export class Task {
  @Field()
  id!: string

  @Field()
  title!: string

  @Field()
  description!: string

  @Field(type => Date)
  createdAt!: Date

  @Field(type => Date, { nullable: true })
  date!: NullOrUndefined<Date>

  @Field(type => Number, { nullable: true })
  price?: NullOrUndefined<number>

  @Field(type => TaskPaymentType, { nullable: true })
  paymentType?: NullOrUndefined<TaskPaymentType>

  @Field(type => TaskPayment, { nullable: true })
  payment?: NullOrUndefined<TaskPayment>

  @Field(type => TaskStatus, { nullable: true })
  status?: NullOrUndefined<TaskStatus>

  @Field(type => TaskState, { nullable: true })
  state?: NullOrUndefined<TaskState>

  @Field(type => String, { nullable: true })
  address?: NullOrUndefined<string>

  @Field(type => [String])
  images!: string[]

  @Field()
  authorId!: string

  @Field(type => String, { nullable: true })
  executorId?: NullOrUndefined<string>

  @Field(type => String, { nullable: true })
  categoryId?: NullOrUndefined<string>
}

@Resolver(of => Task)
export class TaskRelationResolver {
  @FieldResolver(() => UserPartial)
  author(@Root() task: Task, @Ctx() context: Context) {
    return context.prisma.user.findFirst({
      where: {
        id: task.authorId
      },
      select: {
        id: true,
        name: true,
        photo: true
      }
    })
  }

  @FieldResolver(() => Boolean)
  async favorited(@Root() task: Task, @Ctx() context: Context) {
    assertAuth(context)
    const currentUserId = context.currentUserId
    const exists = await context.prisma.userFavories.findFirst({
      where: {
        userId: currentUserId,
        taskId: task.id
      }
    })
    return exists != null
  }

  @FieldResolver(type => Category, { nullable: true })
  category(@Root() task: Task, @Ctx() context: Context) {
    if (task.categoryId) {
      return context.prisma.category.findFirst({
        where: {
          id: task.categoryId
        }
      })
    }
    return null
  }

  @FieldResolver(type => TaskLocation, { nullable: true })
  async location(@Root() task: Task, @Ctx() context: Context): Promise<TaskLocation | null> {
    return await context.prisma.taskLocation.findTaskLocationByTaskId(task.id)
  }
}
