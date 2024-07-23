import { TaskPayment, TaskPaymentType, TaskState, TaskStatus } from '@prisma/client/wasm'
import { Context } from 'src/context.ts'
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

  @FieldResolver(type => TaskLocation, { nullable: true })
  async location(@Root() task: Task, @Ctx() context: Context): Promise<TaskLocation | null> {
    return await context.prisma.taskLocation.findTaskLocationByTaskId(task.id)
  }
}
