import React, { memo, ReactNode } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { IconButton } from 'react-native-paper'
import { BottomSheetHandleProps } from '@gorhom/bottom-sheet'

import Box from 'src/components/Box'

import { useAppTheme } from './themes'

const { width: SCREEN_WIDTH } = Dimensions.get('screen')
export const HANDLE_HEIGHT = 69
export const HANDLE_WIDTH = (8 * SCREEN_WIDTH) / 100

type ButtonProps = {
  icon: string
  onPress?: () => void
}

interface GenericHandleProps extends BottomSheetHandleProps {
  onClose?: () => void
  children?: ReactNode
  buttons?: ButtonProps[]
}

const GenericHandleComponent = ({ onClose, children, buttons }: GenericHandleProps) => {
  const { colors } = useAppTheme()
  return (
    <Box>
      {onClose ? (
        <Box flexDirection='row' alignItems='flex-start'>
          <Box
            paddingLeft={15}
            paddingTop={10}
            width={SCREEN_WIDTH / 2 - HANDLE_WIDTH / 2}
            alignItems='flex-start'>
            {children}
          </Box>
          <View style={[s.indicator, { backgroundColor: colors.placeholder }]} />

          <Box
            justifyContent='flex-end'
            flexDirection='row'
            paddingRight={5}
            width={SCREEN_WIDTH / 2 - HANDLE_WIDTH / 2}>
            {buttons?.map((button, index) => (
              <IconButton
                style={{ marginHorizontal: 0 }}
                key={index}
                onPress={button.onPress}
                icon={button.icon}
                size={30}
              />
            ))}
            <IconButton
              style={{ marginHorizontal: 0 }}
              onPress={onClose}
              icon='close-circle'
              size={30}
            />
          </Box>
        </Box>
      ) : (
        <Box>
          <Box width={SCREEN_WIDTH}>
            <View
              style={[s.indicator, { backgroundColor: colors.placeholder, alignSelf: 'center' }]}
            />
          </Box>
          <Box paddingHorizontal={10}>{children}</Box>
        </Box>
      )}
    </Box>
  )
}

const s = StyleSheet.create({
  indicator: {
    marginTop: 10,
    alignSelf: 'flex-start',
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
