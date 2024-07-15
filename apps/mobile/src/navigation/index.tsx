import React from 'react'
import { Pressable } from 'react-native'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Icon } from '@rneui/themed'

import GalleryPreviewScreen from 'src/screens/gallery/preview'
import { RootState } from 'src/store'

import AuthNavigator from './AuthNavigator'
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
  const auth = useSelector((state: RootState) => state.auth)
  let initialRoute: keyof RootStackParamList = 'Main'

  if (auth.token == null) {
    initialRoute = 'Auth'
  }
  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen name='Main' component={MainNavigator} options={{ headerShown: false }} />
      <Stack.Screen name='Auth' component={AuthNavigator} options={{ headerShown: false }} />
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
