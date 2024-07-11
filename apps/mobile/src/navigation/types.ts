import { type NavigatorScreenParams } from '@react-navigation/native'
import { type NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
export type RootStackParamList = {
  Main: NavigatorScreenParams<MainStackParamList>
  Auth: undefined
  GalleryPreview: undefined
  NewTask: undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>

export type MainStackParamList = {
  Index: undefined
}
