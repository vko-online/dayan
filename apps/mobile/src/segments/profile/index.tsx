import React, { forwardRef } from 'react'
import { List } from 'react-native-paper'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

import BlurredBackground from 'src/components/BlurredBackground'
import Box from 'src/components/Box'
import { HANDLE_WIDTH } from 'src/components/GenericHandle'
import { ProfileHandle } from 'src/components/ProfileHandle'
import { useMeQuery } from 'src/generated/graphql'

interface ProfileProps {
  onClose: () => void
}
const ProfileSegment = forwardRef<BottomSheetModal, ProfileProps>(
  ({ onClose }: ProfileProps, ref: React.ForwardedRef<BottomSheetModal>) => {
    const { data } = useMeQuery()
    return (
      <BottomSheetModal
        ref={ref}
        key='profileSheet'
        name='profileSheet'
        snapPoints={['40%']}
        handleHeight={HANDLE_WIDTH}
        handleComponent={props => (
          <ProfileHandle
            {...props}
            name={data?.me?.name}
            phone={data?.me?.phone}
            onClose={onClose}
          />
        )}
        backgroundComponent={BlurredBackground}>
        <Box marginHorizontal={15} borderRadius={15} overflow='hidden'>
          <List.Item
            title='Watchlist'
            right={props => <List.Icon {...props} icon='chevron-right' />}
          />
          <List.Item
            title='Archive'
            right={props => <List.Icon {...props} icon='chevron-right' />}
          />
        </Box>
      </BottomSheetModal>
    )
  }
)

ProfileSegment.displayName = 'ProfileSegment'

export default ProfileSegment
