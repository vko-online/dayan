import React, { memo } from 'react'
import { Dimensions, Pressable, StyleSheet, View } from 'react-native'
import { BottomSheetHandleProps } from '@gorhom/bottom-sheet'
import { Chip, Icon, Text, useTheme } from '@rneui/themed'

import Box from 'src/components/Box'

const { width: SCREEN_WIDTH } = Dimensions.get('screen')
export const CARD_HANDLE_HEIGHT = 69

interface CardHandleProps extends BottomSheetHandleProps {
  title?: string
  subtitle?: string
  onClose: () => void
  onPress: () => void
}

const CardHandleComponent = ({ title, subtitle, onClose, onPress }: CardHandleProps) => {
  const { theme } = useTheme()
  return (
    <Box paddingHorizontal={16} paddingTop={5}>
      <View style={[s.indicator, { backgroundColor: theme.colors.divider }]} />
      <Box flexDirection='row' gap={theme.spacing.md} alignItems='flex-start'>
        <Box flex={1}>
          <Pressable onPress={onPress}>
            <Text h3>{title}</Text>
          </Pressable>

          <Chip
            buttonStyle={s.chip}
            size='sm'
            radius={4}
            title={subtitle}
            type='solid'
            color='success'
          />
        </Box>
        <Pressable onPress={onClose}>
          <Icon
            color={theme.colors.divider}
            type='material-community'
            name='plus-circle'
            size={32}
          />
        </Pressable>
        <Pressable onPress={onClose}>
          <Icon
            color={theme.colors.divider}
            type='material-community'
            name='share-circle'
            size={32}
          />
        </Pressable>
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
  },
  chip: {
    alignSelf: 'flex-start',
    marginVertical: 5
  }
})

export const CardHandle = memo(CardHandleComponent)
