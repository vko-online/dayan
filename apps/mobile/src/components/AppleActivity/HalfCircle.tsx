import React, { ReactNode } from 'react'
import { View } from 'react-native'

interface HalfCircleProps {
  children: ReactNode
  radius: number
}

export default function HalfCircle({ children, radius }: HalfCircleProps) {
  return (
    <View
      style={{
        width: radius * 2,
        height: radius,
        overflow: 'hidden'
      }}>
      <View
        style={{
          width: radius * 2,
          height: radius * 2,
          borderRadius: radius,
          overflow: 'hidden'
        }}>
        {children}
      </View>
    </View>
  )
}
