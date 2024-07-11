import React, { useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BottomSheetSectionList } from '@gorhom/bottom-sheet'

import { Request, requests } from 'src/graphql/types'

import ListSegmentItem, { ListSegmentHeader } from './item'

interface DataSectionProps {
  onSelect: (item: Request) => void
}

export default function DataSection({ onSelect }: DataSectionProps) {
  const { bottom } = useSafeAreaInsets()
  const scrollViewContentContainer = useMemo(
    () => [s.scrollViewContentContainer, { paddingBottom: bottom }],
    [bottom]
  )

  const data = [
    {
      title: 'Recent tasks',
      data: requests
    },
    {
      title: 'Closest tasks',
      data: requests
    },
    {
      title: 'Bigger tasks',
      data: requests.slice(0, 3)
    },
    {
      title: 'Smaller tasks',
      data: requests
    },
    {
      title: 'Other tasks',
      data: requests
    }
  ]
  return (
    <BottomSheetSectionList
      data={requests}
      sections={data}
      keyExtractor={(item, index) => item.id + index}
      keyboardDismissMode='on-drag'
      keyboardShouldPersistTaps='never'
      style={s.scrollView}
      stickySectionHeadersEnabled={false}
      renderItem={({ item, index, section }) => (
        <ListSegmentItem
          title={item.title}
          subtitle={item.category}
          price={item.price}
          onPress={() => onSelect(item)}
          bottomDivider={index < section.data.length - 1}
        />
      )}
      renderSectionHeader={({ section: { title, data } }) => (
        <ListSegmentHeader count={data.length} text={title} />
      )}
      contentContainerStyle={scrollViewContentContainer}
    />
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
