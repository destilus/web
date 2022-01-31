import React from 'react'
import Container from './styles'

interface IProps {
  show: boolean
  color?: string
  opacity?: number
}

const Backdrop: React.FC<IProps> = ({ show, opacity, color, children }) => {
  return show ? (
    <Container
      style={{
        '--color': color,
        '--opacity': opacity,
      }}
    >
      {children}
    </Container>
  ) : null
}

export default Backdrop
