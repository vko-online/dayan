import React, { useState } from 'react'
import { SearchBar, useTheme } from '@rneui/themed'

import Box from 'src/components/Box'

export default function CategorySelection() {
  const { theme } = useTheme()
  const [value, setValue] = useState('')

  const updateSearch = (text: string) => {
    setValue(text)
  }

  return (
    <Box paddingHorizontal={10} flex={1} backgroundColor={theme.colors.background}>
      <Box
        alignSelf='flex-start'
        alignItems='center'
        flexDirection='row'
        backgroundColor={theme.colors.background}>
        <SearchBar
          containerStyle={{
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            borderBottomWidth: 0
          }}
          placeholder='Type Here...'
          showCancel
          showLoading={false}
          platform='ios'
          clearIcon={{ type: 'ionicons', name: 'close', color: theme.colors.divider }}
          searchIcon={{ type: 'ionicons', name: 'search', color: theme.colors.divider }}
          inputStyle={{ color: theme.colors.black }}
          cancelButtonTitle='Cancel'
          placeholderTextColor={theme.colors.divider}
          onChangeText={updateSearch}
          value={value}
        />
      </Box>
    </Box>
  )
}
