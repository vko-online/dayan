import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import Animated, { interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { Button, Icon } from '@rneui/themed'

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
      top: animatedPosition.value - 160
    }
  }, [animatedPosition])

  return (
    <Animated.View style={[s.container, animatedStyle]}>
      <Button
        color='primary'
        onPress={() => {
          navigation.navigate('NewTask')
        }}
        buttonStyle={s.button}>
        <Icon name='add' color='white' />
        New task
      </Button>
      <Button color='success' buttonStyle={s.button}>
        <Icon name='select-all' color='white' />
        Active task
      </Button>
      <Button color='secondary' buttonStyle={s.button}>
        <Icon name='message' color='white' />
        New message
      </Button>
      <Button color='warning' buttonStyle={s.button}>
        <Icon name='grade' color='white' />
        Awaiting review
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
