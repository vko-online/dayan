import React, { useCallback, useEffect, useRef } from 'react'
import { Button, Dimensions, StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {
  NavigationProp,
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute
} from '@react-navigation/native'
import { Icon, useTheme } from '@rneui/themed'
import * as Location from 'expo-location'

import Box, { BlurBox } from 'src/components/Box'
import { Text } from 'src/components/Text'
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
  const { theme } = useTheme()
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
        mapRef.current?.animateCamera({
          altitude: route.params.location.altitude,
          center: {
            latitude: route.params.location.latitude,
            longitude: route.params.location.longitude
          }
        })
        return
      }

      handleMyLocation()
    })()
  }, [handleMyLocation, route])
  return (
    <Box flex={1} backgroundColor={theme.colors.background}>
      <MapView
        mapPadding={{ top: 40, left: 0, right: 0, bottom: 0 }}
        ref={mapRef}
        mapType='hybrid'
        showsUserLocation
        style={s.map}
      />
      <BlurBox height={40} alignItems='center' justifyContent='center' padding={10}>
        <Text>Pan and zoom map to refine location</Text>
      </BlurBox>
      <View style={[s.centerMarker, { top: height / 2 - SIZE / 2 - top - bottom }]}>
        <Icon name='location-pin' size={SIZE} color={theme.colors.grey0} />
      </View>
    </Box>
  )
}

const s = StyleSheet.create({
  map: {
    flex: 1
  },
  centerMarker: {
    position: 'absolute',
    left: width / 2 - SIZE / 2
  }
})
