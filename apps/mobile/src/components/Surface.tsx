import React, { PropsWithChildren } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import { useTheme } from 'react-native-paper'

const Surface: React.FC<PropsWithChildren<ViewStyle>> = ({ children, ...other }) => {
  const { colors } = useTheme()
  return <View style={[s.block, { backgroundColor: colors.onBackground }, other]}>{children}</View>
}

const s = StyleSheet.create({
  block: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 5
  }
})

export default Surface
