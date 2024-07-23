import React, { forwardRef } from 'react'
import { Button } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

import BlurredBackground from 'src/components/BlurredBackground'
import Box from 'src/components/Box'
import { GENERIC_HANDLE_HEIGHT, GenericHandle } from 'src/components/GenericHandle'
import PricePicker from 'src/components/PricePicker'

interface RespondProps {
  onClose: () => void
}
const Respond = forwardRef<BottomSheetModal, RespondProps>(
  ({ onClose }: RespondProps, ref: React.ForwardedRef<BottomSheetModal>) => {
    const { bottom } = useSafeAreaInsets()
    return (
      <BottomSheetModal
        ref={ref}
        key='respondSheet'
        name='respondSheet'
        snapPoints={['40%']}
        handleHeight={GENERIC_HANDLE_HEIGHT}
        handleComponent={props => <GenericHandle {...props} onClose={onClose} />}
        backgroundComponent={BlurredBackground}>
        <Box flex={1} padding={20}>
          <PricePicker />
        </Box>
        <Box marginBottom={bottom} marginHorizontal={10}>
          <Button>Submit</Button>
        </Box>
      </BottomSheetModal>
    )
  }
)

Respond.displayName = 'RespondSegment'

export default Respond
