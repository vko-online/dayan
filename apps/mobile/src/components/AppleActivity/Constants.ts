export const { PI } = Math
export const SIZE = 100
export const STROKE_WIDTH = 5
export const CX = SIZE / 2
export const TAU = 2 * PI
export const CY = SIZE / 2

type Color = string

export interface IRing {
  start: Color
  end: Color
  bg: Color
  size: number
}

export const R1: IRing = {
  start: 'rgb(249, 18, 78)',
  end: 'rgb(249, 56, 133)',
  bg: 'rgb(50, 1, 14)',
  size: SIZE - 30
}
