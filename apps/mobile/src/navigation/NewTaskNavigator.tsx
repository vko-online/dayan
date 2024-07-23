import { Button } from 'react-native'
import { useTheme } from 'react-native-paper'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import NewTaskScreen from 'src/screens/new-task'
import CategorySelectionScreen from 'src/screens/new-task/category-selection'
import MapSelectionScreen from 'src/screens/new-task/map-selection'

import { NewTaskStackParamList } from './types'

const Stack = createNativeStackNavigator<NewTaskStackParamList>()

export default function NewTaskNavigator(): JSX.Element {
  const { colors } = useTheme()
  return (
    <Stack.Navigator initialRouteName='Index'>
      <Stack.Screen
        name='Index'
        component={NewTaskScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.background
          },
          headerTintColor: colors.onBackground,
          headerLeft: () => <Button title='Cancel' onPress={navigation.goBack} />,
          headerTitle: 'New Task',
          headerLargeTitle: true
        })}
      />
      <Stack.Screen
        name='CategorySelection'
        component={CategorySelectionScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.background
          },
          headerTintColor: colors.onSurface,
          headerLeft: () => <Button title='Back' onPress={navigation.goBack} />,
          headerTitle: 'Category'
        })}
      />
      <Stack.Screen
        name='MapSelection'
        component={MapSelectionScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.background
          },
          headerTintColor: colors.onSurface,
          headerLeft: () => <Button title='Back' onPress={navigation.goBack} />,
          headerTitle: 'Location'
        })}
      />
    </Stack.Navigator>
  )
}
