import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainScreen from 'src/screens/main'

import { MainStackParamList } from './types'

const Stack = createNativeStackNavigator<MainStackParamList>()

export default function MainNavigator(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName='Index'>
      <Stack.Screen name='Index' component={MainScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
