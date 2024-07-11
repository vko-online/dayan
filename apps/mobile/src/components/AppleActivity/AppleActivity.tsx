import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SharedValue } from 'react-native-reanimated'

import { R1, STROKE_WIDTH } from './Constants'
import Ring from './Ring'
import Stickers from './Stickers'

const backgroundColor = '#000001'
const fgRadius = R1.size / 2 - STROKE_WIDTH
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '-270deg' }]
  },
  fg: {
    backgroundColor,
    borderRadius: fgRadius,
    width: fgRadius * 2,
    height: fgRadius * 2
  }
})
const rings = [R1]

interface Props {
  progress: SharedValue<number>
}
export default function AppleAcivity({ progress }: Props) {
  return (
    <View style={styles.container}>
      {rings.map((ring, i) => (
        <View key={i} style={styles.overlay}>
          <Ring theta={progress} {...{ ring }} />
        </View>
      ))}
      <View style={styles.overlay}>
        <View style={styles.fg} />
      </View>
      <Stickers />
    </View>
  )
}
