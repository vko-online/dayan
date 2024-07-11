import React from 'react'
import { Button, StyleSheet } from 'react-native'
import { ListItem, Text, useTheme } from '@rneui/themed'
import { BlurView } from 'expo-blur'

import Box from 'src/components/Box'

interface ListItemProps {
  title: string
  subtitle: string
  price: string | number
  bottomDivider?: boolean
  onPress?: () => void
}

export default function ListSegmentItem({
  bottomDivider = true,
  price,
  subtitle,
  title,
  onPress
}: ListItemProps) {
  const { theme } = useTheme()
  return (
    <ListItem
      onPress={onPress}
      bottomDivider={bottomDivider}
      containerStyle={{ backgroundColor: 'transparent' }}>
      <ListItem.Content>
        <ListItem.Title numberOfLines={1}>{title}</ListItem.Title>
        <ListItem.Subtitle style={{ color: theme.colors.grey1 }}>{subtitle}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Content right>
        <ListItem.Title style={{ fontSize: 18, color: theme.colors.warning }}>
          {price}$
        </ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  )
}

interface ListSegmentHeaderProps {
  text: string
  count: number
  onPress?: () => void
}
export function ListSegmentHeader({ text, count, onPress }: ListSegmentHeaderProps) {
  const { theme } = useTheme()
  return (
    <Box
      width='100%'
      overflow='hidden'
      paddingVertical={5}
      paddingHorizontal={13}
      marginBottom={5}
      borderBottomColor={theme.colors.grey3}
      borderBottomWidth={1}>
      <BlurView intensity={10} tint='systemChromeMaterial' style={StyleSheet.absoluteFillObject} />
      <Box flexDirection='row' justifyContent='space-between'>
        <Text h4>{text}</Text>
        {count > 3 && <Button title='View all' />}
      </Box>
    </Box>
  )
}
