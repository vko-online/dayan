import { NotificationType } from 'src/constants/topics.ts'
import { Context } from 'src/context.ts'
import { sendOrPublish } from 'src/services/broker.ts'
import { Resolver, InputType, Field, Arg, Ctx, Mutation, Authorized } from 'type-graphql'

@InputType()
class PushCampaignInput {
  @Field(() => String, { nullable: false })
  content!: string

  @Field(() => String, { nullable: false })
  title!: string

  @Field(() => [String], { nullable: false })
  userIds!: string[]
}

@Resolver()
export default class NotificationResolver {
  // todo: allow only for admins
  @Authorized('ADMIN')
  @Mutation(() => Number, { nullable: false })
  async sendNotification(
    @Arg('input', type => PushCampaignInput) input: PushCampaignInput,
    @Ctx() context: Context
  ): Promise<number> {
    await sendOrPublish({
      data: {
        content: input.content,
        title: input.title,
        type: NotificationType.PROMO
        // url: 'notifications/'
      },
      message: {
        body: input.content,
        title: input.title,
        subtitle: input.title
      },
      to: input.userIds,
      topic: NotificationType.PROMO
    })
    // const result = await context.prisma.notification.createMany({
    //   data: input.userIds?.map(userId => ({
    //     title: input.title,
    //     content: input.content,
    //     type: PROMO,
    //     userId
    //   })),
    //   skipDuplicates: true
    // })

    return input.userIds.length
  }
}
