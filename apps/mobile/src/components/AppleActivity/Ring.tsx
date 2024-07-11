import React from 'react'
import { PixelRatio, StyleSheet, View } from 'react-native'
import Animated, { interpolateColor, SharedValue } from 'react-native-reanimated'

import AngularGradient from './AngularGradient'
import CircularProgress from './CircularProgress'
import { IRing, STROKE_WIDTH, TAU } from './Constants'
import Shadow from './Shadow'

const styles = StyleSheet.create({
  knob: {
    ...StyleSheet.absoluteFillObject,
    width: STROKE_WIDTH,
    height: STROKE_WIDTH,
    borderRadius: STROKE_WIDTH / 2
  }
})

interface RingProps {
  ring: IRing
  theta: SharedValue<number>
}

export default function Ring({ ring, theta }: RingProps) {
  const radius = PixelRatio.roundToNearestPixel(ring.size / 2)
  const fg = <AngularGradient colors={[ring.start, ring.end]} size={ring.size} />
  const bg = <View style={{ backgroundColor: ring.bg, flex: 1 }} />
  const opacity = theta.value < TAU ? 1 : 0
  const backgroundColor = interpolateColor(theta.value, [0, TAU], [ring.start, ring.end])
  return (
    <View>
      <Animated.View style={{ transform: [{ rotate: `${theta.value}rad` }] }}>
        {/* <CircularProgress theta={Math.min(theta.value, TAU)} {...{ fg, bg, radius }} /> */}
        <CircularProgress theta={theta} {...{ fg, bg, radius }} />
      </Animated.View>
      <Animated.View
        style={[
          styles.knob,
          {
            opacity,
            backgroundColor: ring.start,
            top: radius - STROKE_WIDTH / 2
          }
        ]}
      />
      <Animated.View
        style={[
          styles.knob,
          {
            top: radius - STROKE_WIDTH / 2,
            transform: [
              { translateX: radius - STROKE_WIDTH / 2 },
              { rotate: `${theta.value}rad` },
              { translateX: -(radius - STROKE_WIDTH / 2) },
              { translateY: -4 }
            ]
          }
        ]}>
        <Shadow />
      </Animated.View>
      <Animated.View
        style={[
          styles.knob,
          {
            backgroundColor,
            top: radius - STROKE_WIDTH / 2,
            transform: [
              { translateX: radius - STROKE_WIDTH / 2 },
              { rotate: `${theta.value}rad` },
              { translateX: -(radius - STROKE_WIDTH / 2) }
            ]
          }
        ]}
      />
    </View>
  )
}
