import React, { memo } from 'react'
import { Dimensions, Pressable, StyleSheet, View } from 'react-native'
import { Chip, IconButton, Text } from 'react-native-paper'
import { BottomSheetHandleProps } from '@gorhom/bottom-sheet'

import Box from 'src/components/Box'

import { HANDLE_WIDTH } from './GenericHandle'
import { useAppTheme } from './themes'

const { width: SCREEN_WIDTH } = Dimensions.get('screen')

interface CardHandleProps extends BottomSheetHandleProps {
  title?: string
  subtitle?: string
  onClose: () => void
  onShare?: () => void
  onFavorite?: () => void
  onPress?: () => void
}

const CardHandleComponent = ({
  title,
  subtitle,
  onShare,
  onFavorite,
  onPress,
  onClose,
  ...other
}: CardHandleProps) => {
  const { colors } = useAppTheme()
  return (
    <>
      <Box flexDirection='row' alignItems='flex-start' justifyContent='flex-end'>
        <View style={[s.indicator, { backgroundColor: colors.placeholder }]} />
        <Box
          justifyContent='flex-end'
          flexDirection='row'
          width={SCREEN_WIDTH / 2 - HANDLE_WIDTH / 2}>
          <IconButton
            style={{ marginHorizontal: 0, marginBottom: 0 }}
            onPress={onShare}
            icon='share-circle'
            size={30}
          />
          <IconButton
            style={{ marginHorizontal: 0, marginBottom: 0 }}
            onPress={onFavorite}
            icon='plus-circle'
            size={30}
          />
          <IconButton
            style={{ marginHorizontal: 0, marginBottom: 0 }}
            onPress={onClose}
            icon='close-circle'
            size={30}
          />
        </Box>
      </Box>
      <Box paddingHorizontal={15}>
        <Pressable onPress={onPress}>
          <Text variant='titleLarge'>{title}</Text>
        </Pressable>
        <Box marginTop={10}>
          <Chip style={{ alignSelf: 'flex-start' }} icon='dots-grid'>
            {subtitle}
          </Chip>
        </Box>
      </Box>
    </>
  )
}

const s = StyleSheet.create({
  indicator: {
    marginTop: 10,
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
