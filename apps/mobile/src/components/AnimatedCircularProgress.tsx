import React, { useEffect, useMemo } from 'react'
import { PixelRatio, StyleSheet } from 'react-native'
import Animated, {
  SharedValue,
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { Circle, Svg } from 'react-native-svg'

type ReadOnlyProps<T> = {
  readonly [P in keyof T]: T[P]
}

interface AnimatedCircularProgressProps {
  radius?: number
  color?: string
  percentage: SharedValue<number>
  borderWidth?: number
  duration?: number
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

const AnimatedCircularProgress: React.FC<ReadOnlyProps<AnimatedCircularProgressProps>> = ({
  radius = 100,
  color = 'rgba(0, 0, 0, 0.1)',
  percentage,
  borderWidth = 20,
  duration = 500
}) => {
  const loaderRadius = PixelRatio.roundToNearestPixel(radius)
  const innerCircleRadii = loaderRadius - borderWidth / 2

  const progress = useDerivedValue(() => {
    return percentage.value * radius
  }, [percentage, radius])
  // const progress = useSharedValue(percentage.value * innerCircleRadii)

  const getCircumferenceData = useMemo(() => {
    const circumference = percentage.value * radius
    return {
      circumference
    }
  }, [percentage, radius])

  const animatedStrokeDashOffset = useAnimatedProps(() => {
    return {
      strokeDashoffset: withTiming(progress.value, {
        duration
      })
    }
  }, [progress])

  // useEffect(() => {
  //   progress.value = getCircumferenceData.percentDiff
  // }, [percentage, innerCircleRadii])

  return (
    <Svg style={styles(radius).svg}>
      <AnimatedCircle
        cx={radius}
        cy={radius}
        fill='transparent'
        r={radius}
        stroke={color}
        strokeWidth={borderWidth}
        animatedProps={animatedStrokeDashOffset}
        // strokeDasharray={(Math.PI / 1.5) * radius}
        // strokeDashoffset={2 * Math.PI * radius}
        strokeLinecap='round'
      />
    </Svg>
  )
}

const styles = (radius: number) =>
  StyleSheet.create({
    svg: {
      width: 2 * radius,
      height: 2 * radius
    }
  })
export default AnimatedCircularProgress
