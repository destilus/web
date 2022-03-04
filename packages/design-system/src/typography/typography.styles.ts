import styled, { css } from 'styled-components'
import { space, layout, color } from 'styled-system'

import { TextProps } from './typography.types'

export const BaseText = styled.span<TextProps>`
  ${(props) => css`
    font-family: ${props.fontFamily};
    font-size: ${props.fontSize};
    font-weight: ${props.fontWeight};
    line-height: ${props.lineHeight};
    ${space}
    ${layout}
    ${color}
  `}
`

