import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import Animated, { interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

interface Props {
  animatedPosition: SharedValue<number>
}

const { height } = Dimensions.get('screen')

export default function ActionBar({ animatedPosition }: Props) {
  const { bottom, top } = useSafeAreaInsets()
  const navigation = useNavigation()
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        animatedPosition.value,
        [top, 300, 300 + bottom, height - bottom, height],
        [0, 0, 1, 1, 0]
      ),
      top: animatedPosition.value - 40
    }
  }, [animatedPosition])

  return (
    <Animated.View style={[s.container, animatedStyle]}>
      <Button
        icon='plus'
        onPress={() => {
          navigation.navigate('NewTask')
        }}
        mode='contained'>
        New task
      </Button>
    </Animated.View>
  )
}

const s = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0
  },
  button: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignSelf: 'flex-end',
    gap: 10
  }
})
