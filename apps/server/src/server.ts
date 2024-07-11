import 'reflect-metadata'
import 'dotenv/config'
import { buildSchema } from 'type-graphql'
import { createServer } from 'http'
import { WebSocketServer } from 'ws'
import { useServer } from 'graphql-ws/lib/use/ws'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { graphqlUploadExpress, GraphQLUpload, Upload } from 'graphql-upload'
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginDrainHttpServer
} from 'apollo-server-core'
import * as path from 'path'
import { createContext, createWsContext } from './context'
import { redis } from 'src/services/redis'
import AuthResolver from './resolvers/AuthResolver'
import { DateTimeResolver } from 'graphql-scalars'

import {
  UserCrudResolver,
  UserRelationsResolver,
  FileCrudResolver,
  MessageCrudResolver,
  MessageRelationsResolver,
  ActivityCrudResolver,
  ServiceCrudResolver,
  ConversationCrudResolver,
  ConversationRelationsResolver,
  ProfileCrudResolver,
  ProfileRelationsResolver,
  NotificationCrudResolver,
  NotificationRelationsResolver,
  VerificationCrudResolver,
  VerificationRelationsResolver,
  ReviewCrudResolver,
  CategoryCrudResolver
} from './generated/type-graphql'
import authChecker from './resolvers/authChecker'
import OnboardingResolver from './resolvers/OnboardingResolver'
import StateResolver from './resolvers/StateResolver'
import SubscriptionsResolver from './resolvers/SubscriptionsResolver'
import MatchmakingResolver from './resolvers/MatchmakingResolver'
import ConversationResolver from './resolvers/ConversationResolver'
import MeResolver from './resolvers/MeResolver'
import FeedbackResolver from './resolvers/FeedbackResolver'
import NotificationResolver from './resolvers/NotificationResolver'
import 'src/enhancers/resolverEnhancers'
import { startJobs } from 'src/services/jobs'
import makeDir from 'make-dir'
import { UPLOADS_PATH } from './constants/uploads'
import { getAppUrl, getAppWsUrl } from './constants/env'

async function main (): Promise<void> {
  await makeDir(UPLOADS_PATH)

  const schema = await buildSchema({
    // scalarsMap: [{ type: Scalars.VoidMock, scalar: Scalars.VoidResolver }],
    scalarsMap: [{
      scalar: GraphQLUpload,
      type: Upload
    }, {
      scalar: DateTimeResolver,
      type: Date
    }],
    resolvers: [
      UserCrudResolver,
      UserRelationsResolver,
      FileCrudResolver,
      MessageCrudResolver,
      MessageRelationsResolver,
      ActivityCrudResolver,
      ServiceCrudResolver,
      ConversationCrudResolver,
      ConversationRelationsResolver,
      AuthResolver,
      OnboardingResolver,
      StateResolver,
      SubscriptionsResolver,
      MeResolver,
      MatchmakingResolver,
      ConversationResolver,
      ProfileCrudResolver,
      NotificationCrudResolver,
      NotificationRelationsResolver,
      VerificationCrudResolver,
      VerificationRelationsResolver,
      ProfileRelationsResolver,
      FeedbackResolver,
      NotificationResolver,
      ReviewCrudResolver,
      CategoryCrudResolver
    ],
    emitSchemaFile: path.resolve(__dirname, './generated/schema.graphql'),
    validate: false,
    authMode: 'error',
    authChecker,
    dateScalarMode: 'isoDate',
    pubSub: redis
  })

  const app = express()
  app.use(graphqlUploadExpress())
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
  const serverCleanup = useServer({
    schema,
    context: createWsContext
  }, wsServer)

  const server = new ApolloServer({
    schema,
    context: createContext,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageDisabled()
        : ApolloServerPluginLandingPageGraphQLPlayground({
          subscriptionEndpoint: `ws://${process.env.HOST as string}:${process.env.WS_PORT as string}/graphql`
        }),
      // Proper shutdown for the HTTP server.
      ApolloServerPluginDrainHttpServer({ httpServer }),

      // Proper shutdown for the WebSocket server.
      {
        async serverWillStart () {
          return {
            async drainServer () {
              await serverCleanup.dispose()
            }
          }
        }
      }
    ]
    // mocks: {
    //   Void: Scalars.VoidMock
    // }
  })
  await server.start()
  server.applyMiddleware({ app })
  startJobs()

  await new Promise<void>(resolve => app.listen({ port: 3000 }, resolve))
  console.log(`🚀 Server ready at ${getAppUrl()}${server.graphqlPath}`)
  await new Promise<void>(resolve => httpServer.listen(3001, resolve))
  console.log(`🚀 Subscriptions ready at ${getAppWsUrl()}/graphql`)
}

main().catch(console.error)
