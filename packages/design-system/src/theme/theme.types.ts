export type Scale<TValue> = {
  [key: string]: Array<TValue>
}

export type TypographyTokens = {
  fontFamily: string
  lineHeight: string | number
  fontSize: string | number
  fontWeight: string | number
  color: string
}

export type Typography = {
  body: TypographyTokens
  heading: TypographyTokens
  [key: string]: TypographyTokens
}

export interface ColorHues {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export type RecursiveProperty<T = string | number> = RecursiveObject<T> | T

export interface RecursiveObject<T = string | number> {
  [property: string]: RecursiveProperty<T>
}

export type Colors = RecursiveObject<Record<string, Partial<ColorHues>> | string>

export type ThemeType = {
  typography: Typography
  colors: Colors
}
