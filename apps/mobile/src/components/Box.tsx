import React, { ReactNode } from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { BlurView } from 'expo-blur'

interface Props extends ViewStyle {
  style?: StyleProp<ViewStyle>
  children?: ReactNode
}

export default function Box({ style, children, ...other }: Props) {
  return <View style={[other, style]}>{children}</View>
}

export function BlurBox({ style, children, ...other }: Props) {
  return (
    <View style={[s.blurContainer, other, style]}>
      <BlurView intensity={50} tint='systemThickMaterial' style={[s.blurView]} />
      {children}
    </View>
  )
}

const s = StyleSheet.create({
  blurView: {
    ...StyleSheet.absoluteFillObject
  },
  blurContainer: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden'
  }
})
