import React from 'react'
import { ActivityIndicator, useColorScheme } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'
import * as Notifications from 'expo-notifications'
import { StatusBar } from 'expo-status-bar'
import { PersistGate } from 'redux-persist/integration/react'

import Box from 'src/components/Box'
import { DarkTheme, LightTheme } from 'src/components/themes'
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

  const theme = colorScheme === 'dark' ? DarkTheme : LightTheme
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
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
        </PaperProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}
