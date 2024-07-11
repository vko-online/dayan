import React, { PropsWithChildren } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import { useTheme } from '@rneui/themed'

const Surface: React.FC<PropsWithChildren<ViewStyle>> = ({ children, ...other }) => {
  const { theme } = useTheme()
  return <View style={[s.block, { backgroundColor: theme.colors.grey5 }, other]}>{children}</View>
}

const s = StyleSheet.create({
  block: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 5
  }
})

export default Surface
