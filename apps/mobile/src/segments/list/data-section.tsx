import React from 'react'
import { StyleSheet } from 'react-native'
import { List, Text } from 'react-native-paper'
import { BottomSheetSectionList } from '@gorhom/bottom-sheet'

import { TasksQuery } from 'src/generated/graphql'

interface DataSectionProps {
  onSelect: (item: TasksQuery['tasks'][0]) => void
  data: TasksQuery['tasks']
}

export default function DataSection({ data, onSelect }: DataSectionProps) {
  const sectionData = [
    {
      title: 'Recent tasks',
      data: data ?? []
    },
    {
      title: 'Closest tasks',
      data: data ?? []
    }
  ]
  return (
    <BottomSheetSectionList
      sections={sectionData}
      keyExtractor={(item, index) => item.id + index}
      keyboardDismissMode='on-drag'
      keyboardShouldPersistTaps='never'
      style={s.scrollView}
      stickySectionHeadersEnabled={false}
      renderItem={({ item, index, section }) => (
        <List.Item
          onPress={() => onSelect(item)}
          title={item.title}
          description={item.categoryId}
          right={() => <Text>{item.price}$</Text>}
        />
      )}
      renderSectionHeader={({ section: { title, data } }) => (
        <List.Subheader>{title}</List.Subheader>
      )}
    />
  )
}

const s = StyleSheet.create({
  scrollView: {
    flex: 1
  }
})
