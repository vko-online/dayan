import React, { ReactNode } from 'react'
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native'
import { Text as RNEText, TextProps as RNETextProps } from '@rneui/themed'

interface Props extends ViewStyle {
  style?: StyleProp<ViewStyle>
  children?: ReactNode
}

export default function Box({ style, children, ...other }: Props) {
  return <View style={[other, style]}>{children}</View>
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
