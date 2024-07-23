import React, { memo } from 'react'
import { Pressable } from 'react-native'
import { Chip, Text } from 'react-native-paper'
import { BottomSheetHandleProps } from '@gorhom/bottom-sheet'

import Box from 'src/components/Box'

import { GenericHandle } from './GenericHandle'

interface CardHandleProps extends BottomSheetHandleProps {
  title?: string
  subtitle?: string | null
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
  ...other
}: CardHandleProps) => {
  return (
    <GenericHandle
      {...other}
      buttons={[
        {
          icon: 'plus-circle',
          onPress: onFavorite
        },
        {
          icon: 'share-circle',
          onPress: onShare
        }
      ]}>
      <Box>
        <Pressable onPress={onPress}>
          <Text variant='headlineSmall'>{title}</Text>
        </Pressable>

        <Chip style={{ alignSelf: 'flex-start' }} compact icon='dots-grid'>
          {subtitle}
        </Chip>
      </Box>
    </GenericHandle>
  )
}

export const CardHandle = memo(CardHandleComponent)
