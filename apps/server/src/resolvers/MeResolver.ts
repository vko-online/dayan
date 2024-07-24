import Upload, { FileUpload } from 'graphql-upload/Upload.mjs'
import { Context } from 'src/context.ts'
import { File, User } from 'src/models/index.ts'
import { deleteFileById, saveFile } from 'src/services/fileUpload.ts'
import { assertAuth } from 'src/utils/assert.ts'
import { Arg, Authorized, Ctx, Field, InputType, Mutation, Query, Resolver } from 'type-graphql'

@InputType()
class UpdateImageInput {
  @Field(() => Upload, { nullable: false })
  file!: FileUpload

  @Field(() => String, { nullable: false })
  id!: string
}

@InputType()
class PresenceInput {
  @Field(() => Boolean, { nullable: true })
  online?: boolean
}

@Resolver()
export default class MeResolver {
  @Authorized()
  @Mutation(() => Boolean)
  async updatePresence(
    @Arg('input', () => PresenceInput) input: PresenceInput,
    @Ctx() context: Context
  ): Promise<boolean> {
    // await updateUser({
    //   id: context.currentUserId as string,
    //   online: input.online ?? false
    // })
    return true
  }

  @Authorized()
  @Mutation(() => [File])
  async uploadImage(
    @Arg('input', () => [Upload]) input: FileUpload[],
    @Ctx() context: Context
  ): Promise<File[]> {
    assertAuth(context)
    const files: File[] = []
    for (const item of input) {
      const file = await saveFile(item)
      const profile = await context.prisma.user.findFirst({
        where: {
          id: context.currentUserId
        }
      })

      if (profile) {
        await context.prisma.user.update({
          where: {
            id: profile.id
          },
          data: {
            photo: file.id
          }
        })
      }
      files.push(file)
    }
    return files
  }

  @Authorized()
  @Mutation(() => [File])
  async updateImage(
    @Arg('input', () => UpdateImageInput) input: UpdateImageInput,
    @Ctx() context: Context
  ): Promise<File> {
    assertAuth(context)
    const profile = await context.prisma.user.findFirst({
      where: {
        id: context.currentUserId
      }
    })
    if (profile) {
      if (profile.photo != null) {
        await deleteFileById(profile.photo)
      }
      const file = await saveFile(input.file)
      await context.prisma.user.update({
        where: {
          id: profile.id
        },
        data: {
          photo: file.id
        }
      })
      return file
    }
    throw new Error('Profile not found')
  }

  @Authorized()
  @Query(() => User, { nullable: true })
  async me(@Ctx() context: Context): Promise<User | null> {
    assertAuth(context)
    return await context.prisma.user.findFirst({
      where: {
        id: context.currentUserId
      }
    })
  }
}
