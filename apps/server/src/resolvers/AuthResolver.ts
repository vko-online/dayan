import { addDays } from 'date-fns'
import { GraphQLError } from 'graphql'
import jwt from 'jsonwebtoken'
import { Context } from 'src/context.ts'
import { User } from 'src/models/User.ts'
import { Resolver, Mutation, InputType, ObjectType, Field, Arg, Ctx } from 'type-graphql'
// import { VoidMock } from 'graphql-scalars'

@ObjectType()
class SendCodePayload {
  @Field()
  success!: boolean
}

@ObjectType()
class CheckCodePayload {
  @Field()
  token!: string

  @Field(() => User)
  user!: User
}

@InputType()
class SendCodeInput {
  @Field({ nullable: false })
  phone!: string
}

@InputType()
class CheckCodeInput {
  @Field({ nullable: false })
  phone!: string

  @Field(() => String, { nullable: true })
  deviceOS?: string

  @Field({ nullable: false })
  code!: string
}

@Resolver()
export default class AuthResolver {
  @Mutation(() => SendCodePayload)
  async sendOTP(
    @Arg('input', { nullable: false }) { phone }: SendCodeInput,
    @Ctx() context: Context
  ): Promise<SendCodePayload> {
    const user = await context.prisma.user.findFirst({ where: { phone } })
    if (user == null) {
      await context.prisma.user.create({
        data: {
          phone
        }
      })
    }
    const existingOtp = await context.prisma.otp.findFirst({
      where: {
        phone
      }
    })

    if (existingOtp != null) {
      return {
        success: true
      }
    }
    const otp = await context.prisma.otp.create({
      data: {
        phone,
        expiredAt: addDays(new Date(), 1),
        pin: '1111' // random pin, for now 1111,
      }
    })

    if (otp != null) {
      return {
        success: true
      }
    }
    return {
      success: false
    }
  }

  @Mutation(() => CheckCodePayload)
  async checkOTP(
    @Arg('input', { nullable: false }) { code, phone, deviceOS }: CheckCodeInput,
    @Ctx() context: Context
  ): Promise<CheckCodePayload | GraphQLError> {
    const user = await context.prisma.user.findFirst({ where: { phone } })
    const existingCode = await context.prisma.otp.findFirst({
      where: {
        phone,
        pin: code
      }
    })

    if (user == null) {
      return new GraphQLError("User doesn't exist")
    }

    if (existingCode != null) {
      await context.prisma.activity.create({
        data: {
          text: `Authenticated${deviceOS != null ? ` using ${deviceOS} device` : ''}`,
          type: 'AUTHENTICATED',
          authorId: user.id
        }
      })
      return {
        token: jwt.sign(user.id, process.env.JWT_SECRET as string),
        user
      }
    }
    return new GraphQLError('Invalid OTP code')
  }

  @Mutation(() => Boolean, { nullable: true })
  async signOut(@Ctx() context: Context): Promise<boolean> {
    await context.prisma.user.update({
      where: {
        id: context.currentUserId as string
      },
      data: {
        pushId: null
      }
    })
    return true
  }
}
