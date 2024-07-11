import { ApolloClient, ApolloLink, InMemoryCache, split } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createUploadLink } from 'apollo-upload-client'
import { createClient } from 'graphql-ws'

import NavigationRef from 'src/navigation/NavigationRef'
import { store } from 'src/store'
import { onLogout } from 'src/store/slices/auth'

const uploadLink = createUploadLink({
  uri: 'http://localhost:3000/graphql',
  headers: {
    'Apollo-Require-Preflight': 'true'
  }
})

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'ws://localhost:3001/graphql',
    lazy: true,
    connectionParams: () => {
      const token = store.getState().auth.token
      return {
        authorization: token != null ? `Bearer ${token}` : null
      }
    }
  })
)

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError, response, operation }) => {
  if (graphQLErrors != null) {
    graphQLErrors.forEach(({ originalError, message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations?.join(', ') ?? ''}, Path: ${path?.join(', ') ?? ''}`
      )
    })
  }
  console.log('networkError?.message', operation)
  if (networkError != null) {
    console.log('[Network error]: ', networkError)
    // todo: currently when we receive 401
    // we get network error, without status code
    // so for now just redirect user to auth page
    store.dispatch(onLogout())
    NavigationRef.navigate('Auth')
  }
})

const authLink = setContext(async (_, { headers }) => {
  const token = store.getState().auth.token
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token != null ? `Bearer ${token}` : null
    }
  }
})

// const httpLink = new HttpLink({
//   uri: 'http://localhost:3000/graphql',
//   headers: {
//     'Apollo-Require-Preflight': true
//   }
// })

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
  },
  wsLink,
  authLink.concat(uploadLink)
)

export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, splitLink]),
  connectToDevTools: true,
  cache: new InMemoryCache()
})
