import { Typography } from '../theme/theme.types'
import { useThemeContext } from '../theme'

import { TextProps } from './typography.types'

type UseTypographyType = keyof Typography

export default function useTypography(
  type: UseTypographyType,
  props: Partial<TextProps>,
): TextProps {
  const theme = useThemeContext()

  const tokens = theme.typography[type]

  return {
    fontSize: props.fontSize ?? tokens.fontSize,
    fontFamily: props.fontFamily ?? tokens.fontFamily,
    fontWeight: props.fontWeight ?? tokens.fontWeight,
    lineHeight: props.lineHeight ?? tokens.lineHeight,
  }
}
