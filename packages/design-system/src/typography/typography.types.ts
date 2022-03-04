import { ColorProps, LayoutProps, SpaceProps } from 'styled-system'

export type TextProps = {
  fontFamily: string
  lineHeight: string | number
  fontSize: string | number
  fontWeight: string | number
}

export type CommonProps = ColorProps & SpaceProps & LayoutProps
