import { Typography } from '../theme/theme.types'
import { useThemeContext } from '../theme'

import get from '../utils/get'

import { TextProps } from './typography.types'

type UseTypographyType = keyof Typography

export default function useTypography(
  type: UseTypographyType,
  props: Partial<TextProps>,
): TextProps {
  const theme = useThemeContext()

  const tokens = theme.typography[type]

  console.log(props.color ? get(theme.colors, props.color) : tokens.color)

  return {
    fontSize: props.fontSize ?? tokens.fontSize,
    fontFamily: props.fontFamily ?? tokens.fontFamily,
    fontWeight: props.fontWeight ?? tokens.fontWeight,
    lineHeight: props.lineHeight ?? tokens.lineHeight,
    color: props.color ? get(theme.colors, props.color) : tokens.color,
  }
}
