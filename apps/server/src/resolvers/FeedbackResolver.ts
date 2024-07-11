import { Context } from 'src/context'
import { Resolver, InputType, Field, Arg, Ctx, Mutation } from 'type-graphql'
import { Feedback, FeedbackType } from 'src/generated/type-graphql'

@InputType()
class FeedbackInput {
  @Field(() => String, { nullable: false })
    text!: string

  @Field(() => String, { nullable: true })
    email?: string

  @Field(() => FeedbackType, { nullable: false })
    type!: FeedbackType
}

@Resolver()
export default class FeedbackResolver {
  @Mutation(() => Feedback, { nullable: true }) // prisma resolver
  async sendFeedback (@Arg('input', type => FeedbackInput) input: FeedbackInput, @Ctx() context: Context): Promise<Feedback> {
    return await context.prisma.feedback.create({
      data: input
    })
  }
}
