import React, { ReactNode } from 'react'
import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import { Text as RNEText, TextProps as RNETextProps } from '@rneui/themed'
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

interface TextProps extends RNETextProps {
  size?: TextStyle['fontSize']
  color?: TextStyle['color']
  fontWeight?: TextStyle['fontWeight']
}
export function Text({ size, color, children, fontWeight, ...other }: TextProps) {
  return (
    <RNEText {...other} style={{ fontSize: size, color, fontWeight }}>
      {children}
    </RNEText>
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
