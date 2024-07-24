import { GraphQLVoid } from 'graphql-scalars'
import Upload, { FileUpload } from 'graphql-upload/Upload.mjs'
import { Context } from 'src/context.ts'
import { User } from 'src/models/index.ts'
import { deleteFileById, saveFile } from 'src/services/fileUpload.ts'
import { assertAuth, assertObject } from 'src/utils/assert.ts'
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql'

@Resolver()
export default class MeResolver {
  // use subscription session
  // to detect user presence (online/offline)

  // @Authorized()
  // @Mutation(() => Boolean)
  // async updatePresence(
  //   @Arg('input', () => PresenceInput) input: PresenceInput,
  //   @Ctx() context: Context
  // ): Promise<boolean> {
  //   // await updateUser({
  //   //   id: context.currentUserId as string,
  //   //   online: input.online ?? false
  //   // })
  //   return true
  // }

  @Authorized()
  @Mutation(() => GraphQLVoid)
  async updateImage(
    @Arg('file', () => Upload) file: FileUpload,
    @Ctx() context: Context
  ): Promise<void> {
    assertAuth(context)
    const profile = await context.prisma.user.findFirst({
      where: {
        id: context.currentUserId
      }
    })
    assertObject(profile, 'Profile not found')
    if (profile.photo != null) {
      await deleteFileById(profile.photo)
    }
    const savedFile = await saveFile(file)
    await context.prisma.user.update({
      where: {
        id: profile.id
      },
      data: {
        photo: savedFile.id
      }
    })
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
