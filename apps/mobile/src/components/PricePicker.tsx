import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue
} from 'react-native-reanimated'
import { canvas2Polar, clamp, polar2Canvas, ReText } from 'react-native-redash'
import { Text } from '@rneui/themed'

const CANVAS_SIZE = 100
const CENTER = {
  x: 0,
  y: 0
}

export default function PricePicker() {
  const translationX = useSharedValue(0)
  const translationY = useSharedValue(-CANVAS_SIZE / 2)
  const prevTranslationX = useSharedValue(0)
  const prevTranslationY = useSharedValue(0)
  const rotation = useSharedValue(0)
  const price = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: translationX.value }, { translateY: translationY.value }]
  }))

  const pan = Gesture.Pan()
    .minDistance(1)
    .onStart(() => {
      prevTranslationX.value = translationX.value
      prevTranslationY.value = translationY.value
    })
    .onUpdate(event => {
      const moveX = clamp(prevTranslationX.value + event.translationX, -CANVAS_SIZE, CANVAS_SIZE)
      const moveY = clamp(prevTranslationY.value + event.translationY, -CANVAS_SIZE, CANVAS_SIZE)
      const move = { x: moveX, y: moveY }

      const { theta, radius } = canvas2Polar(move, CENTER)
      const polar = {
        theta: theta,
        radius: clamp(radius, CANVAS_SIZE / 2, CANVAS_SIZE / 2)
      }
      const translated = polar2Canvas(polar, CENTER)

      translationX.value = translated.x
      translationY.value = translated.y
      rotation.value = theta
      console.log('theta', theta)
      if (theta >= Math.PI - 0.1) {
        price.value += 1
      }
      // console.log('pos', translated.x, translated.y)
    })
    .runOnJS(true)

  const formattedPrice = useDerivedValue(() => `$ ${price.value.toFixed(2)}`)

  return (
    <View style={styles.container}>
      <ReText text={formattedPrice} style={{ color: '#fff' }} />
      <GestureDetector gesture={pan}>
        <Animated.View style={[animatedStyles, styles.box]} />
      </GestureDetector>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: CANVAS_SIZE,
    height: CANVAS_SIZE,
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'dashed',
    alignSelf: 'center',
    borderRadius: CANVAS_SIZE,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: '#b58df1',
    borderRadius: 20
  }
})
