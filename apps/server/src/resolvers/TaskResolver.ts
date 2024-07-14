import { Context } from 'src/context'
import { Task, TaskLocation } from 'src/generated/type-graphql'
import { Ctx, FieldResolver, Resolver, Root } from 'type-graphql'

@Resolver(() => Task)
export default class TaskFieldResolver {
  @FieldResolver()
  async location(@Root() task: Task, @Ctx() context: Context): Promise<TaskLocation | null> {
    return await context.prisma.taskLocation.findFirst({
      where: {
        taskId: task.id
      }
    })
  }
}
