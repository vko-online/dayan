import React from 'react'
import Gallery from 'react-native-awesome-gallery'

import { RootStackScreenProps } from 'src/navigation/types'

export default function GalleryPreview({ navigation }: RootStackScreenProps<'GalleryPreview'>) {
  return (
    <Gallery
      onSwipeToClose={() => navigation.goBack()}
      data={[
        'https://picsum.photos/200?random=1',
        'https://picsum.photos/300?random=1',
        'https://picsum.photos/400?random=1',
        'https://picsum.photos/500?random=1'
      ]}
    />
  )
}
