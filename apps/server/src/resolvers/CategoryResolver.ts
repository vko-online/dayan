import { Context } from 'src/context'
import { Category } from 'src/generated/type-graphql'
import { Resolver, InputType, Field, Arg, Ctx, Query } from 'type-graphql'

@InputType()
class CategoryQueryInput {
  @Field(() => String, { nullable: false })
  text!: string
}

@Resolver()
export default class CategoryResolver {
  @Query(() => [Category], { nullable: false }) // prisma resolver
  async searchCategory(
    @Arg('input', type => CategoryQueryInput, { nullable: false }) input: CategoryQueryInput,
    @Ctx() context: Context
  ): Promise<Category[]> {
    return await context.prisma.category.findMany({
      where: {
        name: {
          contains: input.text
        }
      }
    })
  }
}
