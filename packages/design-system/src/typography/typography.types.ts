import { ColorProps, LayoutProps, SpaceProps } from 'styled-system'

export type TextProps = {
  fontFamily: string
  lineHeight: string | number
  fontSize: string | number
  fontWeight: string | number
  color?: string
}

export type CommonProps = Omit<ColorProps, 'color'> & SpaceProps & LayoutProps
