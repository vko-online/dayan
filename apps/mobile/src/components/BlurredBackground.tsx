import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from '@rneui/themed'
import { BlurView } from 'expo-blur'

const BlurredBackground = () => {
  const { theme } = useTheme()
  return (
    <View style={s.container}>
      <BlurView
        intensity={70}
        tint='systemThickMaterial'
        style={[s.blurView, { backgroundColor: theme.colors.background }]}
      />
    </View>
  )
}

const s = StyleSheet.create({
  blurView: {
    ...StyleSheet.absoluteFillObject
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  }
})

export default BlurredBackground
