import { Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from '@rneui/themed'

import NewTaskScreen from 'src/screens/new-task'
import CategorySelectionScreen from 'src/screens/new-task/category-selection'
import MapSelectionScreen from 'src/screens/new-task/map-selection'

import { NewTaskStackParamList } from './types'

const Stack = createNativeStackNavigator<NewTaskStackParamList>()

export default function NewTaskNavigator(): JSX.Element {
  const { theme } = useTheme()
  return (
    <Stack.Navigator initialRouteName='Index'>
      <Stack.Screen
        name='Index'
        component={NewTaskScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.colors.background
          },
          headerTintColor: theme.colors.black,
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
            backgroundColor: theme.colors.background
          },
          headerTintColor: theme.colors.black,
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
            backgroundColor: theme.colors.background
          },
          headerTintColor: theme.colors.black,
          headerLeft: () => <Button title='Back' onPress={navigation.goBack} />,
          headerTitle: 'Location'
        })}
      />
    </Stack.Navigator>
  )
}
