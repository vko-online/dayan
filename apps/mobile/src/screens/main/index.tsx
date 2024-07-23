import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Badge, IconButton } from 'react-native-paper'
import { useSharedValue } from 'react-native-reanimated'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import * as Location from 'expo-location'

import Box from 'src/components/Box'
import { useAppTheme } from 'src/components/themes'
import { TasksQuery, useTasksQuery } from 'src/generated/graphql'
import CardSegment from 'src/segments/card'
import ListSegment from 'src/segments/list'
import ProfileSegment from 'src/segments/profile'
import RespondSegment from 'src/segments/respond'

import ActionBar from './action-bar'

const { width } = Dimensions.get('window')

export default function Main() {
  const mapRef = useRef<MapView>(null)
  const { colors } = useAppTheme()
  const { data } = useTasksQuery({
    onCompleted: () => {
      mapRef.current?.fitToElements({
        animated: true
      })
    }
  })

  const handleMyLocation = useCallback(async () => {
    let location = await Location.getCurrentPositionAsync({})
    console.log('location', location.coords)
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
  const [selectedItem, setSelectedItem] = useState<TasksQuery['tasks'][0]>()
  const animatedListIndex = useSharedValue<number>(0)
  const animatedListPosition = useSharedValue<number>(width)

  const handleTouchStart = useCallback(() => {
    listModalRef.current?.collapse()
  }, [])

  const handleSelect = useCallback(
    (req: TasksQuery['tasks'][0]) => {
      setSelectedItem(req)
      cardModalRef.current?.present()
    },
    [cardModalRef]
  )

  useLayoutEffect(() => {
    requestAnimationFrame(() => listModalRef.current?.present())
  }, [])

  console.log('tasks', data?.tasks.filter(v => v.location)[0])

  return (
    <BottomSheetModalProvider>
      <Box flex={1} position='relative'>
        <View style={s.userLocation}>
          <IconButton
            onPress={handleMyLocation}
            icon='map-marker-outline'
            containerColor={colors.background}
            iconColor={colors.text}
          />
          <Box>
            <IconButton
              iconColor={colors.text}
              containerColor={colors.background}
              icon='message-badge-outline'
            />
            <Badge style={{ position: 'absolute', right: 0, top: 0 }} size={24}>
              3
            </Badge>
          </Box>
        </View>
        <MapView
          showsPointsOfInterest={false}
          showsScale
          onTouchStart={handleTouchStart}
          zoomControlEnabled
          ref={mapRef}
          loadingEnabled
          mapType='hybrid'
          showsUserLocation
          style={s.map}>
          {(data?.tasks ?? []).map(task =>
            task.location?.location?.latitude ? (
              <Marker
                key={task.id}
                onPress={() => handleSelect(task)}
                coordinate={{
                  latitude: task.location?.location?.latitude ?? 0,
                  longitude: task.location?.location?.longitude ?? 0
                }}
                title={task.title}
              />
            ) : null
          )}
        </MapView>
        <ActionBar animatedPosition={animatedListPosition} />
        <ListSegment
          ref={listModalRef}
          animatedIndex={animatedListIndex}
          animatedPosition={animatedListPosition}
          onSelect={handleSelect}
          data={data?.tasks ?? []}
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
    right: 0,
    top: 120
  }
})
