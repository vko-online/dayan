import React from 'react'
import { Button, Pressable } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Icon, useTheme } from '@rneui/themed'

import AuthScreen from 'src/screens/auth'
import GalleryPreviewScreen from 'src/screens/gallery/preview'

import LinkingConfiguration from './LinkingConfiguration'
import MainNavigator from './MainNavigator'
import NavigationRef from './NavigationRef'
import NewTaskNavigator from './NewTaskNavigator'
import { RootStackParamList } from './types'

export default function Navigation(): JSX.Element {
  return (
    <NavigationContainer
      ref={ref => {
        if (ref != null) {
          NavigationRef.setTopLevelNavigator(ref)
        }
      }}
      linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator(): JSX.Element {
  const { theme } = useTheme()
  return (
    <Stack.Navigator initialRouteName='Main'>
      <Stack.Screen name='Main' component={MainNavigator} options={{ headerShown: false }} />
      <Stack.Screen name='Auth' component={AuthScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name='GalleryPreview'
        component={GalleryPreviewScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: 'Images',
          headerTitleStyle: {
            color: '#fff'
          },
          headerStyle: {
            backgroundColor: '#000'
          },
          headerRight: ({ canGoBack }) => (
            <Pressable>
              <Icon name='close' size={32} color='#fff' onPress={navigation.goBack} />
            </Pressable>
          ),
          presentation: 'fullScreenModal'
        })}
      />
      <Stack.Screen
        name='NewTask'
        component={NewTaskNavigator}
        options={{
          presentation: 'formSheet',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}
