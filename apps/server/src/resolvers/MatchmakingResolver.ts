import { type FileUpload, Upload } from 'graphql-upload'
import { Context } from 'src/context'
import { Payment, type File, PaymentType, Service } from 'src/generated/type-graphql'
import { saveFile } from 'src/services/fileUpload'
import { Arg, Authorized, Ctx, Field, InputType, Mutation, Query, Resolver } from 'type-graphql'

@InputType()
class ServiceInput {
  @Field()
    description!: string

  @Field({ nullable: true })
    price?: number

  @Field({ nullable: true })
    paymentType?: PaymentType

  @Field({ nullable: true })
    payment?: Payment

  @Field({ nullable: true })
    date?: Date

  @Field({ nullable: true })
    address?: string

  @Field({ nullable: true })
    latitude?: number

  @Field({ nullable: true })
    longitude?: number

  @Field({ nullable: true })
    categoryId?: string

  @Field(() => [Upload], { nullable: true })
    images?: FileUpload[]
}

@Resolver()
export default class MatchmakingResolver {
  @Authorized()
  @Mutation(() => Service)
  async createService (@Arg('data', () => ServiceInput, { nullable: false }) data: ServiceInput, @Ctx() context: Context): Promise<Service> {
    const files: File[] = []
    if (data.images) {
      for (const item of data.images) {
        const file = await saveFile(item)
        files.push(file)
      }
    }

    const service = await context.prisma.service.create({
      data: {
        title: data.categoryId ?? 'Service',
        address: data.address,
        categoryId: data.categoryId,
        date: data.date,
        latitude: data.latitude,
        longitude: data.longitude,
        paymentType: data.paymentType,
        payment: data.payment,
        status: 'CREATED',
        price: data.price,
        description: data.description,
        authorId: context.currentUserId as string,
        images: files.map(v => v.id)
      }
    })

    // todo: emit to categoryId followers

    return service
  }

  @Authorized()
  @Query(() => [Service])
  async availableServices (@Ctx() context: Context): Promise<Service[]> {
    return await context.prisma.service.findMany({
      where: {
        status: 'CREATED'
      }
    })
  }
}
