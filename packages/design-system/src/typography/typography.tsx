import React from 'react'

import { TextProps, CommonProps } from './typography.types'
import { BaseText } from './typography.styles'
import useTypography from './useTypography'

type TypographyProps = Partial<TextProps> &
  CommonProps & {
    children: string | React.ReactElement
  }

export function Text(props: TypographyProps) {
  const defaultStyle = useTypography('body', props)

  return <BaseText {...props} {...defaultStyle} />
}

export function Heading(props: TypographyProps) {
  const defaultStyle = useTypography('heading', props)

  return <BaseText as="h1" {...props} {...defaultStyle} />
}
