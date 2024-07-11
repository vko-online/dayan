import React, { forwardRef } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { Icon, ListItem, useTheme } from '@rneui/themed'

import BlurredBackground from 'src/components/BlurredBackground'
import Box from 'src/components/Box'
import { PROFILE_HANDLE_HEIGHT, ProfileHandle } from 'src/components/ProfileHandle'

interface ProfileProps {
  onClose: () => void
}
const ProfileSegment = forwardRef<BottomSheetModal, ProfileProps>(
  ({ onClose }: ProfileProps, ref: React.ForwardedRef<BottomSheetModal>) => {
    const { theme } = useTheme()
    return (
      <BottomSheetModal
        ref={ref}
        key='profileSheet'
        name='profileSheet'
        snapPoints={['40%']}
        handleHeight={PROFILE_HANDLE_HEIGHT}
        handleComponent={props => (
          <ProfileHandle {...props} name='Medet Tleugabyluly' onClose={onClose} />
        )}
        backgroundComponent={BlurredBackground}>
        <Box marginHorizontal={theme.spacing.lg} borderRadius={15} overflow='hidden'>
          <ListItem bottomDivider containerStyle={{ backgroundColor: theme.colors.background }}>
            <Icon name='inbox' type='material-community' color='grey' />
            <ListItem.Content>
              <ListItem.Title>Watchlist</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider>
            <Icon name='archive' type='material-community' color='grey' />
            <ListItem.Content>
              <ListItem.Title>Archive</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider>
            <Icon name='archive' type='material-community' color='grey' />
            <ListItem.Content>
              <ListItem.Title>Archive</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider>
            <Icon name='archive' type='material-community' color='grey' />
            <ListItem.Content>
              <ListItem.Title>Archive</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem>
            <Icon name='cog' type='material-community' color='grey' />
            <ListItem.Content>
              <ListItem.Title>Preferences</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </Box>
      </BottomSheetModal>
    )
  }
)

ProfileSegment.displayName = 'ProfileSegment'

export default ProfileSegment
