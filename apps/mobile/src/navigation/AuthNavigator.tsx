import { Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AuthScreen from 'src/screens/auth'
import OneTimePinScreen from 'src/screens/auth/OneTimePin'

import { AuthStackParamList } from './types'

const Stack = createNativeStackNavigator<AuthStackParamList>()

export default function AuthNavigator(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName='Index'>
      <Stack.Screen
        name='Index'
        component={AuthScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='OneTimePin'
        component={OneTimePinScreen}
        options={({ navigation }) => ({
          presentation: 'modal',
          headerTitle: '',
          headerLeft: () => <Button title='Cancel' onPress={() => navigation.goBack()} />
        })}
      />
    </Stack.Navigator>
  )
}
