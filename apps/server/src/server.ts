import 'reflect-metadata'
import 'dotenv/config'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault
} from '@apollo/server/plugin/landingPage/default'
import cors from 'cors'
import express from 'express'
import { GraphQLScalarType } from 'graphql'
import { DateTimeResolver, GraphQLVoid } from 'graphql-scalars'
import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs'
import Upload from 'graphql-upload/Upload.mjs'
import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.mjs'
import { useServer } from 'graphql-ws/lib/use/ws'
import { createServer } from 'http'
import { makeDirectory } from 'make-dir'
import * as path from 'path'
import { yogaPubSub } from 'src/services/redis.ts'
import { buildSchema } from 'type-graphql'
import { fileURLToPath } from 'url'
import { WebSocketServer } from 'ws'

import { getAppUrl, getAppWsUrl } from './constants/env.ts'
import { UPLOADS_PATH } from './constants/uploads.ts'
import { createContext, createWsContext } from './context.ts'
import {
  Activity,
  Category,
  Conversation,
  ConversationRelationResolver,
  File,
  GeoLocation,
  Message,
  MessageRelationResolver,
  Otp,
  Review,
  ReviewRelationResolver,
  Task,
  TaskLocation,
  TaskRelationResolver,
  User,
  UserCategory,
  UserPartial,
  UserRelationResolver,
  Verification
} from './models/index.ts'
import AuthResolver from './resolvers/AuthResolver.ts'
import CategoryResolver from './resolvers/CategoryResolver.ts'
import ConversationResolver from './resolvers/ConversationResolver.ts'
import MeResolver from './resolvers/MeResolver.ts'
import NotificationResolver from './resolvers/NotificationResolver.ts'
import OnboardingResolver from './resolvers/OnboardingResolver.ts'
import StateResolver from './resolvers/StateResolver.ts'
import SubscriptionsResolver from './resolvers/SubscriptionsResolver.ts'
import TaskResolver from './resolvers/TaskResolver.ts'
import authChecker from './resolvers/authChecker.ts'
import { startJobs } from './services/jobs.ts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
async function main(): Promise<void> {
  await makeDirectory(UPLOADS_PATH)

  const schema = await buildSchema({
    scalarsMap: [
      {
        scalar: GraphQLUpload,
        type: Upload
      },
      {
        scalar: DateTimeResolver,
        type: Date
      },
      {
        scalar: GraphQLVoid,
        type: GraphQLScalarType
      }
    ],
    resolvers: [
      Activity,
      Category,
      Conversation,
      ConversationRelationResolver,
      File,
      GeoLocation,
      Message,
      MessageRelationResolver,
      Otp,
      Review,
      ReviewRelationResolver,
      Task,
      TaskLocation,
      TaskRelationResolver,
      User,
      UserCategory,
      UserPartial,
      UserRelationResolver,
      Verification,
      AuthResolver,
      OnboardingResolver,
      StateResolver,
      SubscriptionsResolver,
      MeResolver,
      TaskResolver,
      ConversationResolver,
      CategoryResolver,
      NotificationResolver
    ],
    emitSchemaFile: path.resolve(__dirname, './generated/schema.graphql'),
    validate: false,
    authMode: 'error',
    authChecker,
    // dateScalarMode: 'isoDate'
    pubSub: yogaPubSub
  })

  const app = express()
  // app.use(processRequest())
  app.get('/ws', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'graphql-over-ws.html'))
  })
  app.get('/uploads/:filename', (req, res) => {
    res.sendFile(path.join(UPLOADS_PATH, req.params.filename))
  })
  const httpServer = createServer(app)
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql'
  })
  const serverCleanup = useServer(
    {
      // conflicting with expo => @expo-cli => graphql@15 dependency
      // but app using graphql@16
      // its just typing issue
      schema: schema as any,
      context: createWsContext
    },
    wsServer
  )

  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageProductionDefault()
        : ApolloServerPluginLandingPageLocalDefault(),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose()
            }
          }
        }
      }
    ]
  })
  await server.start()
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    graphqlUploadExpress(),
    express.json(),
    expressMiddleware(server, {
      context: createContext
    })
  )
  startJobs()

  await new Promise<void>(resolve => app.listen({ port: 3000 }, resolve))
  console.log(`🚀 Server ready at ${getAppUrl()}/graphql`)
  await new Promise<void>(resolve => httpServer.listen(3001, resolve))
  console.log(`🚀 Subscriptions ready at ${getAppWsUrl()}/graphql`)
}

main().catch(console.error)
