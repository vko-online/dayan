import React, { memo, useCallback, useState } from 'react'
import {
  Button,
  Keyboard,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  TextInputChangeEventData
} from 'react-native'
import { Avatar } from 'react-native-paper'
import { BottomSheetHandleProps, BottomSheetTextInput } from '@gorhom/bottom-sheet'

import Box from 'src/components/Box'

import { GenericHandle } from './GenericHandle'
import { useAppTheme } from './themes'

interface SearchHandleProps extends BottomSheetHandleProps {
  initialValue?: string
  onChange?: (text: string) => void
  onProfilePress?: () => void
  focused: boolean
  onFocus?: () => void
  onCancel?: () => void
  onBlur?: () => void
}

const SearchHandleComponent = ({
  initialValue = '',
  onChange,
  onProfilePress,
  onFocus,
  focused,
  onBlur,
  onCancel,
  ...other
}: SearchHandleProps) => {
  const { colors } = useAppTheme()
  const [value, setValue] = useState(initialValue)
  const handleInputChange = useCallback(
    ({ nativeEvent: { text } }: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setValue(text)

      if (onChange) {
        onChange(text)
      }
    },
    [onChange]
  )

  const handleCancel = useCallback(() => {
    setValue('')
    onBlur?.()
    onCancel?.()
    Keyboard.dismiss()
  }, [onBlur, onCancel])

  const showCancel = value?.length > 0 || focused

  return (
    <GenericHandle {...other}>
      <Box width='100%' flexDirection='row' gap={10} alignItems='center'>
        <BottomSheetTextInput
          style={[s.input, { color: colors.text }]}
          value={value}
          textContentType='location'
          clearButtonMode='never'
          onFocus={onFocus}
          onPress={onFocus}
          onBlur={onBlur}
          placeholder='Search for a place or address'
          onChange={handleInputChange}
        />
        {showCancel ? (
          <Button title='Cancel' onPress={handleCancel} />
        ) : (
          <Pressable onPress={onProfilePress}>
            <Avatar.Image size={40} source={{ uri: 'https://picsum.photos/200' }} />
          </Pressable>
        )}
      </Box>
    </GenericHandle>
  )
}

const s = StyleSheet.create({
  input: {
    flex: 1,
    marginTop: 10,
    marginBottom: 6,
    borderRadius: 10,
    fontSize: 18,
    padding: 10,
    backgroundColor: 'rgba(151, 151, 151, 0.25)'
  }
})

export const SearchHandle = memo(SearchHandleComponent)
