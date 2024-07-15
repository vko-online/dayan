import { VerificationStatus } from '@prisma/client/wasm'
import { ObjectType, Field, registerEnumType } from 'type-graphql'

registerEnumType(VerificationStatus, {
  name: 'VerificationStatus',
  description: 'Auth code verification status'
})

@ObjectType()
export class Verification {
  @Field()
  id!: string

  @Field(type => VerificationStatus)
  status!: VerificationStatus
}
