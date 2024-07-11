import React from 'react'
import { StyleSheet } from 'react-native'
import { Text as RNEText, TextProps, useTheme } from '@rneui/themed'

interface Props extends TextProps {
  body?: boolean
  caption?: boolean
  label?: boolean
}
export function Text({ body = false, caption = false, label = false, ...props }: Props) {
  const { theme } = useTheme()
  // not ideal, but it works for now
  const color = label ? theme.colors.grey2 : caption ? theme.colors.grey2 : theme.colors.black
  return (
    <RNEText
      {...props}
      style={[
        body && s.body,
        caption && s.caption,
        label && s.label,
        {
          color
        }
      ]}
    />
  )
}

const s = StyleSheet.create({
  body: {
    fontSize: 16
  },
  caption: {
    fontSize: 14
  },
  label: {
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
})
