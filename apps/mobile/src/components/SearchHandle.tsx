import React, { memo, useCallback, useState } from 'react'
import {
  Button,
  Dimensions,
  Keyboard,
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  TextInputChangeEventData,
  View
} from 'react-native'
import { BottomSheetHandleProps, BottomSheetTextInput } from '@gorhom/bottom-sheet'
import { Avatar, useTheme } from '@rneui/themed'

import Box from 'src/components/Box'

const { width: SCREEN_WIDTH } = Dimensions.get('screen')
export const SEARCH_HANDLE_HEIGHT = 69

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
  onCancel
}: SearchHandleProps) => {
  const { theme } = useTheme()
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
    <Box paddingHorizontal={16} paddingVertical={5}>
      <View style={[s.indicator, { backgroundColor: theme.colors.divider }]} />
      <Box flexDirection='row' gap={10} alignItems='center'>
        <BottomSheetTextInput
          style={[s.input, { color: theme.colors.black }]}
          value={value}
          textContentType='location'
          clearButtonMode='never'
          onFocus={onFocus}
          onPress={onFocus}
          onBlur={onBlur}
          placeholderTextColor={theme.colors.grey1}
          placeholder='Search for a place or address'
          onChange={handleInputChange}
        />
        {showCancel ? (
          <Button title='Cancel' onPress={handleCancel} />
        ) : (
          <Pressable onPress={onProfilePress}>
            <Avatar size={40} rounded source={{ uri: 'https://picsum.photos/200' }} title='MT' />
          </Pressable>
        )}
      </Box>
    </Box>
  )
}

const s = StyleSheet.create({
  indicator: {
    marginTop: 5,
    alignSelf: 'center',
    width: (8 * SCREEN_WIDTH) / 100,
    height: 5,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
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
