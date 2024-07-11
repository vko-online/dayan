import React, { ReactNode } from 'react'
import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { useTheme } from '@rneui/themed'

interface IconButtonProps {
  onPress?: () => void
  children: ReactNode
  style?: StyleProp<ViewStyle>
}
export function IconButton({ style, onPress, children }: IconButtonProps) {
  const { theme } = useTheme()
  return (
    <Pressable
      onPress={onPress}
      style={[s.iconButton, { backgroundColor: theme.colors.background }, style]}>
      {children}
    </Pressable>
  )
}

const s = StyleSheet.create({
  iconButton: {
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8
  }
})
