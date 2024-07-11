import React, { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, { interpolate, SharedValue } from 'react-native-reanimated'
import { transformOrigin } from 'react-native-redash'

import { PI } from './Constants'
import HalfCircle from './HalfCircle'

interface CircularProgressProps {
  theta: SharedValue<number>
  bg: ReactNode
  fg: ReactNode
  radius: number
}

export default function CircularProgress({ theta, bg, fg, radius }: CircularProgressProps) {
  const opacity = theta.value < PI ? 1 : 0
  const rotate = interpolate(theta.value, [PI, 2 * PI], [0, PI], 'clamp')
  return (
    <>
      <View style={{ zIndex: 1 }}>
        <HalfCircle {...{ radius }}>
          <View style={{ transform: [{ rotate: '180deg' }] }}>{fg}</View>
        </HalfCircle>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            transform: transformOrigin({ x: 0, y: radius / 2 }, [
              {
                rotate: `${theta.value}rad`
              }
            ]),
            opacity
          }}>
          <HalfCircle {...{ radius }}>{bg}</HalfCircle>
        </Animated.View>
      </View>
      <View style={{ transform: [{ rotate: '180deg' }] }}>
        <HalfCircle {...{ radius }}>{fg}</HalfCircle>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            transform: transformOrigin({ x: 0, y: radius / 2 }, [{ rotate: `${rotate}rad` }])
          }}>
          <HalfCircle {...{ radius }}>{bg}</HalfCircle>
        </Animated.View>
      </View>
    </>
  )
}
