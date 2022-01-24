import React from 'react'

import { ButtonComponent, ButtonContainer } from 'button/button.styles'

export type ButtonProps = {
  children: React.ReactNode
  onClick?: (event: React.SyntheticEvent) => void
  endComplement?: React.ReactNode
  startComplement?: React.ReactNode
}

export default function Button(props: ButtonProps) {
  const { children, onClick } = props

  return (
    <ButtonContainer>
      <ButtonComponent onClick={onClick}>{children}</ButtonComponent>
    </ButtonContainer>
  )
}
