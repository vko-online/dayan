import React, { useCallback, useMemo } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'

import { Request, requests } from 'src/graphql/types'

export default function SearchSection() {
  const { bottom } = useSafeAreaInsets()
  const scrollViewContentContainer = useMemo(
    () => [s.scrollViewContentContainer, { paddingBottom: bottom }],
    [bottom]
  )
  const renderItem = useCallback(
    (item: Request) => (
      <TouchableOpacity key={item.id}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    ),
    []
  )
  return (
    <BottomSheetScrollView
      keyboardDismissMode='on-drag'
      keyboardShouldPersistTaps='never'
      style={s.scrollView}
      contentContainerStyle={scrollViewContentContainer}>
      {requests.map(renderItem)}
    </BottomSheetScrollView>
  )
}

const s = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  scrollViewContentContainer: {
    paddingHorizontal: 16
  }
})
