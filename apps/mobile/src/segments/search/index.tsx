import React, { forwardRef } from 'react'
import { Text } from 'react-native'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

import BlurredBackground from 'src/components/BlurredBackground'

interface SearchProps {}
const Search = forwardRef<BottomSheetModal, SearchProps>(
  (props: SearchProps, ref: React.ForwardedRef<BottomSheetModal>) => {
    return (
      <BottomSheetModal
        ref={ref}
        key='searchSheet'
        name='searchSheet'
        snapPoints={['100%']}
        backgroundComponent={BlurredBackground}>
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
        <Text>Profile</Text>
      </BottomSheetModal>
    )
  }
)

Search.displayName = 'SearchSegment'

export default Search
