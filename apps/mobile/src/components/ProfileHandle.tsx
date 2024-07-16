import React, { memo } from 'react'
import { Dimensions, Pressable, StyleSheet, View } from 'react-native'
import { BottomSheetHandleProps } from '@gorhom/bottom-sheet'
import { Avatar, Icon, Text, useTheme } from '@rneui/themed'

import Box from 'src/components/Box'

const { width: SCREEN_WIDTH } = Dimensions.get('screen')
export const PROFILE_HANDLE_HEIGHT = 69

interface ProfileHandleProps extends BottomSheetHandleProps {
  name: string | null | undefined
  phone: string | null | undefined
  onClose: () => void
}

const ProfileHandleComponent = ({ name, phone, onClose }: ProfileHandleProps) => {
  const { theme } = useTheme()
  return (
    <Box paddingHorizontal={16} paddingVertical={5} marginBottom={8}>
      <View style={[s.indicator, { backgroundColor: theme.colors.divider }]} />
      <Box flexDirection='row' gap={theme.spacing.md} alignItems='flex-start'>
        <Avatar size={48} rounded source={{ uri: 'https://picsum.photos/200' }} title='MT'>
          <Avatar.Accessory backgroundColor={theme.colors.success} name='check' size={16} />
        </Avatar>
        <Box flex={1}>
          <Text h4>{name}</Text>
          <Text>{phone}</Text>
        </Box>
        <Pressable onPress={onClose}>
          <Icon
            color={theme.colors.divider}
            type='material-community'
            name='close-circle'
            size={32}
          />
        </Pressable>
      </Box>
    </Box>
  )
}

const s = StyleSheet.create({
  indicator: {
    marginVertical: 5,
    alignSelf: 'center',
    width: (8 * SCREEN_WIDTH) / 100,
    height: 5,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
})

export const ProfileHandle = memo(ProfileHandleComponent)
