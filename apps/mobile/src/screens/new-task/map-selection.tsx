import React, { useCallback, useEffect, useRef } from 'react'
import { Button, Dimensions, StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'
import { Icon, Text, useTheme } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {
  NavigationProp,
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute
} from '@react-navigation/native'
import * as Location from 'expo-location'

import Box, { BlurBox } from 'src/components/Box'
import { NewTaskStackParamList } from 'src/navigation/types'

const SIZE = 50

// todo: problem with map offset
// probably need to remove the top offset
// but compass is under the blurred box

const { width, height } = Dimensions.get('window')

export default function MapSelection() {
  const navigation = useNavigation<NavigationProp<NewTaskStackParamList, 'MapSelection'>>()
  const route = useRoute<RouteProp<NewTaskStackParamList, 'MapSelection'>>()
  const { bottom, top } = useSafeAreaInsets()
  const { colors } = useTheme()
  const mapRef = useRef<MapView>(null)
  const handleMyLocation = useCallback(async () => {
    let location = await Location.getCurrentPositionAsync({})
    mapRef.current?.animateCamera({
      // altitude: 500,
      center: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }
    })
  }, [mapRef])

  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        headerLeft: () => (
          <Button
            title='Back'
            onPress={async () => {
              const camera = await mapRef.current?.getCamera()
              navigation.navigate('Index', {
                location: {
                  altitude: camera?.altitude,
                  latitude: camera?.center.latitude,
                  longitude: camera?.center.longitude
                }
              })
            }}
          />
        )
      })
    }, [navigation])
  )

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        return
      }
      if (route.params?.location?.latitude && route.params?.location?.longitude) {
        console.log('route.params?.location', route.params?.location)
        mapRef.current?.animateCamera(
          {
            altitude: route.params.location.altitude,
            center: {
              latitude: route.params.location.latitude,
              longitude: route.params.location.longitude
            }
          },
          {
            duration: 1000
          }
        )
        return
      }

      handleMyLocation()
    })()
  }, [handleMyLocation, route])
  return (
    <Box flex={1} backgroundColor={colors.background}>
      <MapView
        mapPadding={{ bottom, top, left: 0, right: 0 }}
        ref={mapRef}
        mapType='hybrid'
        showsUserLocation
        style={s.map}
      />
      <BlurBox height={40} alignItems='center' justifyContent='center' padding={10}>
        <Text>Pan and zoom map to refine location</Text>
      </BlurBox>
      <View style={[s.centerMarker, { top: height / 2 - SIZE / 3 - top - bottom }]}>
        <Icon source='location-pin' size={SIZE} color={colors.backdrop} />
      </View>
      {/* <View
        style={{
          position: 'absolute',
          top: '0%',
          left: '50%',
          width: 1,
          height: '100%',
          backgroundColor: 'yellow'
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: '50%',
          left: '0%',
          width: '100%',
          height: 1,
          backgroundColor: 'yellow'
        }}
      /> */}
    </Box>
  )
}

const s = StyleSheet.create({
  map: {
    flex: 1
  },
  centerMarker: {
    shadowColor: 'black',
    shadowOffset: {
      height: 1,
      width: 1
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    position: 'absolute',
    left: width / 2 - SIZE / 2
  }
})
