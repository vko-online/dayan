import {
  type ResolversEnhanceMap,
  applyResolversEnhanceMap
} from 'src/generated/type-graphql'
import { Authorized } from 'type-graphql'

const resolversEnhanceMap: ResolversEnhanceMap = {
  Profile: {
    _all: [Authorized('USER', 'MANAGER', 'ADMIN')]
  },
  User: {
    _all: [Authorized('USER', 'MANAGER', 'ADMIN')]
  },
  Notification: {
    _all: [Authorized('USER', 'MANAGER', 'ADMIN')]
  },
  Conversation: {
    _all: [Authorized('USER')]
  },
  File: {
    _all: [Authorized('USER', 'MANAGER', 'ADMIN')]
  },
  Service: {
    _all: [Authorized('USER', 'MANAGER', 'ADMIN')]
  },
  Message: {
    // _query: [Authorized("USER", "MANAGER", "ADMIN")],
    // _mutation: [Authorized("USER", "MANAGER", "ADMIN")],
    _all: [Authorized('USER')]
  },
  Activity: {
    _all: [Authorized('USER', 'MANAGER', 'ADMIN')]
  },
  Verification: {
    _mutation: [Authorized('MANAGER', 'ADMIN')],
    _query: [Authorized('USER', 'MANAGER', 'ADMIN')]
  }
}

applyResolversEnhanceMap(resolversEnhanceMap)
