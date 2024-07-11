import { type LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import { type RootStackParamList } from 'src/navigation/types'

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Main: {
        screens: {
          Index: 'main'
        }
      }
    }
  }
}

export default linking
