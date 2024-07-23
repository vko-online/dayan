import React, { forwardRef, useCallback, useMemo, useState } from 'react'
import { SharedValue } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet'

import BlurredBackground from 'src/components/BlurredBackground'
import { HANDLE_HEIGHT, HANDLE_WIDTH } from 'src/components/GenericHandle'
import { SearchHandle } from 'src/components/SearchHandle'
import { TasksQuery } from 'src/generated/graphql'

import DataSection from './data-section'
import SearchSection from './search-section'

interface ListSegmentProps {
  animatedPosition: SharedValue<number>
  animatedIndex: SharedValue<number>
  onProfilePress: () => void
  onSearchFocus: () => void
  onSearchCancel: () => void
  onSelect: (item: TasksQuery['tasks'][0]) => void
  data: TasksQuery['tasks']
}
// const { width } = Dimensions.get('window')
const LOCATION_DETAILS_HEIGHT = 300

const List = forwardRef<BottomSheetModal, ListSegmentProps>(
  (
    {
      animatedIndex,
      animatedPosition,
      onProfilePress,
      onSearchFocus,
      onSearchCancel,
      onSelect,
      data
    }: ListSegmentProps,
    ref: React.ForwardedRef<BottomSheetModal>
  ) => {
    const [searchFocused, setSearchFocused] = useState(false)
    const { bottom, top } = useSafeAreaInsets()
    const listSnapPoints = useMemo(
      () => [bottom + HANDLE_HEIGHT, LOCATION_DETAILS_HEIGHT + bottom, '100%'],
      [bottom]
    )
    // const animatedListIndex = useSharedValue<number>(0)
    // const animatedListPosition = useSharedValue<number>(width)

    const handleSearhFocus = useCallback(() => {
      setSearchFocused(true)
      onSearchFocus()
    }, [onSearchFocus])
    const handleSearhCancel = useCallback(() => {
      onSearchCancel()
      setSearchFocused(false)
    }, [onSearchCancel])
    return (
      <BottomSheetModal
        ref={ref}
        key='listSheet'
        name='listSheet'
        index={1}
        snapPoints={listSnapPoints}
        handleHeight={HANDLE_WIDTH}
        topInset={top}
        enableDismissOnClose={false}
        enablePanDownToClose={false}
        keyboardBehavior='extend'
        animatedPosition={animatedPosition}
        animatedIndex={animatedIndex}
        handleComponent={props => (
          <SearchHandle
            {...props}
            focused={searchFocused}
            onBlur={handleSearhCancel}
            onFocus={handleSearhFocus}
            onCancel={handleSearhCancel}
            onProfilePress={onProfilePress}
          />
        )}
        backdropComponent={props => (
          <BottomSheetBackdrop
            {...props}
            enableTouchThrough={true}
            opacity={0.3}
            pressBehavior='none'
            appearsOnIndex={2}
            disappearsOnIndex={1}
          />
        )}
        backgroundComponent={BlurredBackground}>
        {searchFocused ? <SearchSection /> : <DataSection data={data} onSelect={onSelect} />}
      </BottomSheetModal>
    )
  }
)

List.displayName = 'ListSegment'

export default List
