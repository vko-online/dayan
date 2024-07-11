import React, { memo } from 'react'
import { Dimensions, Pressable, StyleSheet, View } from 'react-native'
import { BottomSheetHandleProps } from '@gorhom/bottom-sheet'
import { Icon, Text, useTheme } from '@rneui/themed'

import Box from 'src/components/Box'

const { width: SCREEN_WIDTH } = Dimensions.get('screen')
export const GENERIC_HANDLE_HEIGHT = 69

interface CardHandleProps extends BottomSheetHandleProps {
  title?: string
  subtitle?: string
  onClose: () => void
}

const GenericHandleComponent = ({ title, subtitle, onClose }: CardHandleProps) => {
  const { theme } = useTheme()
  return (
    <Box paddingHorizontal={16} paddingTop={5}>
      <View style={[s.indicator, { backgroundColor: theme.colors.divider }]} />
      <Box flexDirection='row' gap={theme.spacing.md} alignItems='flex-start'>
        <Box flex={1}>
          <Text h4>{title}</Text>
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

export const s = StyleSheet.create({
  indicator: {
    marginVertical: 5,
    alignSelf: 'center',
    width: (8 * SCREEN_WIDTH) / 100,
    height: 5,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  chip: {
    alignSelf: 'flex-start',
    marginVertical: 5
  }
})

export const GenericHandle = memo(GenericHandleComponent)
