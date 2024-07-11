import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import { useSharedValue } from 'react-native-reanimated'
import { Ionicons } from '@expo/vector-icons'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { useTheme } from '@rneui/themed'
import * as Location from 'expo-location'

import Box from 'src/components/Box'
import { IconButton } from 'src/components/Button'
import { Request } from 'src/graphql/types'
import CardSegment from 'src/segments/card'
import ListSegment from 'src/segments/list'
import ProfileSegment from 'src/segments/profile'
import RespondSegment from 'src/segments/respond'

import ActionBar from './action-bar'

const { width } = Dimensions.get('window')

export default function Main() {
  const mapRef = useRef<MapView>(null)
  const { theme } = useTheme()

  const handleMyLocation = useCallback(async () => {
    let location = await Location.getCurrentPositionAsync({})
    mapRef.current?.animateCamera({
      altitude: 3000,
      center: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }
    })
  }, [mapRef])

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        return
      }

      handleMyLocation()
    })()
  }, [handleMyLocation])

  const listModalRef = useRef<BottomSheetModal>(null)
  const profileModalRef = useRef<BottomSheetModal>(null)
  const cardModalRef = useRef<BottomSheetModal>(null)
  const respondModalRef = useRef<BottomSheetModal>(null)
  const [selectedItem, setSelectedItem] = useState<Request>()
  const animatedListIndex = useSharedValue<number>(0)
  const animatedListPosition = useSharedValue<number>(width)

  const handleTouchStart = useCallback(() => {
    listModalRef.current?.collapse()
  }, [])

  const handleSelect = useCallback(
    (req: Request) => {
      setSelectedItem(req)
      cardModalRef.current?.present()
    },
    [cardModalRef]
  )

  useLayoutEffect(() => {
    requestAnimationFrame(() => listModalRef.current?.present())
  }, [])

  return (
    <BottomSheetModalProvider>
      <Box flex={1} position='relative'>
        <IconButton onPress={handleMyLocation} style={s.userLocation}>
          <Ionicons color={theme.colors.divider} size={26} name='location-outline' />
        </IconButton>
        <MapView
          showsPointsOfInterest={false}
          showsScale
          onTouchStart={handleTouchStart}
          zoomControlEnabled
          ref={mapRef}
          mapType='hybrid'
          showsUserLocation
          style={s.map}
        />
        <ActionBar animatedPosition={animatedListPosition} />
        <ListSegment
          ref={listModalRef}
          animatedIndex={animatedListIndex}
          animatedPosition={animatedListPosition}
          onSelect={handleSelect}
          onSearchFocus={() => listModalRef.current?.expand()}
          onSearchCancel={() => listModalRef.current?.snapToIndex(1)}
          onProfilePress={() => profileModalRef.current?.present()}
        />
        <ProfileSegment ref={profileModalRef} onClose={() => profileModalRef.current?.dismiss()} />
        <CardSegment
          item={selectedItem}
          ref={cardModalRef}
          onRespond={() => respondModalRef.current?.present()}
          onTitlePress={() => cardModalRef.current?.expand()}
          onClose={() => cardModalRef.current?.dismiss()}
        />
        <RespondSegment ref={respondModalRef} onClose={() => respondModalRef.current?.dismiss()} />
      </Box>
    </BottomSheetModalProvider>
  )
}

const s = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%'
  },
  userLocation: {
    zIndex: 10,
    position: 'absolute',
    right: 5,
    top: 120
  }
})
