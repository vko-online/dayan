import { type NavigatorScreenParams } from '@react-navigation/native'
import { type NativeStackScreenProps } from '@react-navigation/native-stack'

import { CategoryItem } from 'src/screens/new-task/category-selection'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
export type RootStackParamList = {
  Main: NavigatorScreenParams<MainStackParamList>
  Auth: NavigatorScreenParams<AuthStackParamList>
  GalleryPreview: undefined
  NewTask: undefined
}

export type AuthStackParamList = {
  Index: undefined
  OneTimePin: {
    phone: string
  }
}
export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = NativeStackScreenProps<
  AuthStackParamList,
  Screen
>

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>

export type MainStackParamList = {
  Index: undefined
}

export type MapLocation = {
  altitude: number | undefined
  latitude: number | undefined
  longitude: number | undefined
}

export type NewTaskStackParamList = {
  Index: {
    location?: MapLocation
    category?: CategoryItem
  }
  MapSelection: {
    location: MapLocation | undefined
  }
  CategorySelection: undefined
}
