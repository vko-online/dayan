import React, { useCallback, useEffect, useRef } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Text } from 'react-native-paper'
import * as Location from 'expo-location'

import Box, { BlurBox } from 'src/components/Box'
import Surface from 'src/components/Surface'
import { MapLocation } from 'src/navigation/types'

interface MapInputProps {
  location: MapLocation | undefined
  onPress: () => void
}
export default function MapInput({ location, onPress }: MapInputProps) {
  const mapRef = useRef<MapView>(null)
  const handleMyLocation = useCallback(async () => {
    let location = await Location.getCurrentPositionAsync({})
    mapRef.current?.animateCamera({
      altitude: 500,
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
      if (location?.latitude && location?.longitude) {
        mapRef.current?.animateCamera({
          altitude: location.altitude,
          center: {
            latitude: location.latitude,
            longitude: location.longitude
          }
        })
        return
      }

      handleMyLocation()
    })()
  }, [location, handleMyLocation])

  return (
    <Pressable onPress={onPress}>
      <Surface padding={0} overflow='hidden' marginBottom={20}>
        <MapView pointerEvents='none' ref={mapRef} mapType='hybrid' showsUserLocation style={s.map}>
          {location?.latitude && location?.longitude ? (
            <Marker
              coordinate={{
                latitude: location?.latitude,
                longitude: location?.longitude
              }}
              image={require('./pin.png')}
            />
          ) : null}
        </MapView>
        <Box position='absolute' bottom={40} left={0} right={0}>
          <BlurBox height={40} alignItems='center' justifyContent='center' padding={10}>
            <Text>Tap map to edit location</Text>
          </BlurBox>
        </Box>
      </Surface>
    </Pressable>
  )
}

const s = StyleSheet.create({
  map: {
    width: '100%',
    aspectRatio: 3
  }
})
