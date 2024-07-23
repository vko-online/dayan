import React from 'react'
import { StyleSheet } from 'react-native'
import { List } from 'react-native-paper'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet'

import { requests } from 'src/graphql/types'

export default function SearchSection() {
  return (
    <BottomSheetFlatList
      keyboardDismissMode='on-drag'
      keyboardShouldPersistTaps='never'
      style={s.scrollView}
      data={requests}
      renderItem={({ item, index }) => <List.Item title={item.title} />}
    />
  )
}

const s = StyleSheet.create({
  scrollView: {
    flex: 1
  }
})
