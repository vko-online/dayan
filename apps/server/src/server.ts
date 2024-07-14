import 'reflect-metadata'
import 'dotenv/config'
import 'src/enhancers/resolverEnhancers'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault
} from '@apollo/server/plugin/landingPage/default'
import cors from 'cors'
import express from 'express'
import { DateTimeResolver } from 'graphql-scalars'
import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.mjs'
import { useServer } from 'graphql-ws/lib/use/ws'
import { createServer } from 'http'
import { makeDirectory } from 'make-dir'
import * as path from 'path'
import { startJobs } from 'src/services/jobs'
import { buildSchema } from 'type-graphql'
import { WebSocketServer } from 'ws'

import { getAppUrl, getAppWsUrl } from './constants/env'
import { UPLOADS_PATH } from './constants/uploads'
import { createContext, createWsContext } from './context'
import {
  UserCrudResolver,
  UserRelationsResolver,
  FileCrudResolver,
  MessageCrudResolver,
  MessageRelationsResolver,
  ActivityCrudResolver,
  TaskCrudResolver,
  ConversationCrudResolver,
  ConversationRelationsResolver,
  NotificationCrudResolver,
  NotificationRelationsResolver,
  VerificationCrudResolver,
  VerificationRelationsResolver,
  ReviewCrudResolver,
  CategoryCrudResolver
} from './generated/type-graphql'
import AuthResolver from './resolvers/AuthResolver'
import CategoryResolver from './resolvers/CategoryResolver'
import ConversationResolver from './resolvers/ConversationResolver'
import MatchmakingResolver from './resolvers/MatchmakingResolver'
import MeResolver from './resolvers/MeResolver'
import NotificationResolver from './resolvers/NotificationResolver'
import OnboardingResolver from './resolvers/OnboardingResolver'
import StateResolver from './resolvers/StateResolver'
import SubscriptionsResolver from './resolvers/SubscriptionsResolver'
import TaskResolver from './resolvers/TaskResolver'
import authChecker from './resolvers/authChecker'
import Upload from 'graphql-upload/Upload.mjs'
import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs'

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
      }
    ],
    resolvers: [
      UserCrudResolver,
      UserRelationsResolver,
      FileCrudResolver,
      MessageCrudResolver,
      MessageRelationsResolver,
      ActivityCrudResolver,
      TaskCrudResolver,
      ConversationCrudResolver,
      ConversationRelationsResolver,
      AuthResolver,
      OnboardingResolver,
      StateResolver,
      SubscriptionsResolver,
      MeResolver,
      MatchmakingResolver,
      ConversationResolver,
      NotificationCrudResolver,
      NotificationRelationsResolver,
      VerificationCrudResolver,
      VerificationRelationsResolver,
      CategoryResolver,
      NotificationResolver,
      ReviewCrudResolver,
      CategoryCrudResolver,
      TaskResolver
    ],
    emitSchemaFile: path.resolve(__dirname, './generated/schema.graphql'),
    validate: false,
    authMode: 'error',
    authChecker
    // dateScalarMode: 'isoDate'
    // pubSub: redis
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
