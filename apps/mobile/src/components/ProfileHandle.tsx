import React, { memo } from 'react'
import { Avatar, Text } from 'react-native-paper'
import { BottomSheetHandleProps } from '@gorhom/bottom-sheet'

import Box from 'src/components/Box'

import { GenericHandle } from './GenericHandle'

interface ProfileHandleProps extends BottomSheetHandleProps {
  name: string | null | undefined
  phone: string | null | undefined
  onClose: () => void
}

const ProfileHandleComponent = ({ name, phone, ...other }: ProfileHandleProps) => {
  return (
    <GenericHandle {...other}>
      <Box padding={10} flexDirection='row' gap={10} alignItems='center'>
        <Avatar.Image size={48} source={{ uri: 'https://picsum.photos/200' }} />
        <Box>
          <Text variant='bodyLarge'>{name}</Text>
          <Text variant='labelSmall'>{phone}</Text>
        </Box>
      </Box>
    </GenericHandle>
  )
}

export const ProfileHandle = memo(ProfileHandleComponent)
