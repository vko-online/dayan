import React from 'react'
import { ActivityIndicator, useColorScheme } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'
import { createTheme, ThemeProvider } from '@rneui/themed'
import * as Notifications from 'expo-notifications'
import { StatusBar } from 'expo-status-bar'
import { PersistGate } from 'redux-persist/integration/react'

import Box from 'src/components/Box'
import Navigation from 'src/navigation'
import { client } from 'src/services/client'
import { persistor, store } from 'src/store'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: true
  })
})

export default function App() {
  const colorScheme = useColorScheme()
  const theme = createTheme({
    lightColors: {
      primary: '#0075F2',
      background: '#F5F7F3'
    },
    darkColors: {
      primary: '#0075F2',
      background: '#26292C'
    },
    components: {
      Input: props => ({
        leftIconContainerStyle: {
          marginRight: 10
        },
        errorStyle: {
          fontSize: 16,
          display: props.errorMessage ? 'flex' : 'none'
        },
        inputStyle: {
          fontSize: 18
        },
        inputContainerStyle: {
          borderBottomWidth: 0,
          paddingBottom: 0
        }
      })
    },
    mode: colorScheme ?? 'dark'
  })

  return (
    <GestureHandlerRootView>
      <ThemeProvider theme={theme}>
        <Box flex={1}>
          <ApolloProvider client={client}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
              <Provider store={store}>
                <Navigation />
                <StatusBar style='auto' />
              </Provider>
            </PersistGate>
          </ApolloProvider>
        </Box>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
