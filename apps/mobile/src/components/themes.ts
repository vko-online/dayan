import { MD3DarkTheme, MD3LightTheme, MD3Theme, useTheme } from 'react-native-paper'

export type AppTheme = typeof LightTheme
export const useAppTheme = () => useTheme<AppTheme>()
type CustomTheme = MD3Theme & {
  colors: MD3Theme['colors'] & {
    divider: string
    placeholder: string
    text: string
  }
}
export const LightTheme: CustomTheme = {
  ...MD3LightTheme,
  isV3: true,
  dark: false,
  roundness: 2,
  colors: {
    primary: '#007AFF',
    onPrimary: '#F7F7F7',
    primaryContainer: 'rgb(216, 226, 255)',
    onPrimaryContainer: 'rgb(0, 26, 65)',
    secondary: 'rgb(0, 102, 135)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(193, 232, 255)',
    onSecondaryContainer: 'rgb(0, 30, 43)',
    tertiary: 'rgb(0, 110, 36)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(115, 254, 132)',
    onTertiaryContainer: 'rgb(0, 33, 6)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(254, 251, 255)',
    onBackground: 'rgb(27, 27, 31)',
    surface: 'rgb(254, 251, 255)',
    onSurface: 'rgb(27, 27, 31)',
    surfaceVariant: 'rgb(225, 226, 236)',
    onSurfaceVariant: 'rgb(68, 71, 79)',
    outline: 'rgb(116, 119, 127)',
    outlineVariant: 'rgb(196, 198, 208)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(48, 48, 51)',
    inverseOnSurface: 'rgb(242, 240, 244)',
    inversePrimary: 'rgb(173, 198, 255)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(241, 243, 252)',
      level2: 'rgb(234, 238, 250)',
      level3: 'rgb(226, 233, 248)',
      level4: 'rgb(224, 232, 248)',
      level5: 'rgb(218, 229, 246)'
    },
    surfaceDisabled: 'rgba(27, 27, 31, 0.12)',
    onSurfaceDisabled: 'rgba(27, 27, 31, 0.38)',
    backdrop: 'rgba(46, 48, 56, 0.4)',
    divider: '#c7c7cc',
    placeholder: '#bdbec2',
    text: '#1F1F21'
  }
}

export const DarkTheme: CustomTheme = {
  ...MD3DarkTheme,
  isV3: true,
  dark: true,
  roundness: 2,
  colors: {
    primary: '#007AFF',
    onPrimary: '#F7F7F7',
    primaryContainer: 'rgb(0, 68, 147)',
    onPrimaryContainer: 'rgb(216, 226, 255)',
    secondary: 'rgb(116, 209, 255)',
    onSecondary: 'rgb(0, 53, 72)',
    secondaryContainer: 'rgb(0, 77, 103)',
    onSecondaryContainer: 'rgb(193, 232, 255)',
    tertiary: 'rgb(85, 225, 107)',
    onTertiary: 'rgb(0, 57, 15)',
    tertiaryContainer: 'rgb(0, 83, 25)',
    onTertiaryContainer: 'rgb(115, 254, 132)',
    error: 'rgb(255, 180, 171)',
    onError: 'rgb(105, 0, 5)',
    errorContainer: 'rgb(147, 0, 10)',
    onErrorContainer: 'rgb(255, 180, 171)',
    background: 'rgb(27, 27, 31)',
    onBackground: 'rgb(227, 226, 230)',
    surface: 'rgb(27, 27, 31)',
    onSurface: 'rgb(227, 226, 230)',
    surfaceVariant: 'rgb(68, 71, 79)',
    onSurfaceVariant: 'rgb(196, 198, 208)',
    outline: 'rgb(142, 144, 153)',
    outlineVariant: 'rgb(68, 71, 79)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(227, 226, 230)',
    inverseOnSurface: 'rgb(48, 48, 51)',
    inversePrimary: 'rgb(0, 91, 193)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(34, 36, 42)',
      level2: 'rgb(39, 41, 49)',
      level3: 'rgb(43, 46, 56)',
      level4: 'rgb(45, 48, 58)',
      level5: 'rgb(47, 51, 62)'
    },
    surfaceDisabled: 'rgba(227, 226, 230, 0.12)',
    onSurfaceDisabled: 'rgba(227, 226, 230, 0.38)',
    backdrop: 'rgba(46, 48, 56, 0.4)',
    divider: '#455a64',
    placeholder: '#bdbec2',
    text: '#F7F7F7'
  }
}
