import styled from 'styled-components'

import { AvatarSizes } from './avatar.interface'

const DEFAULT_SIZES: { [key in AvatarSizes]: number } = {
  small: 50,
  medium: 100,
  large: 150,
}

export const AvatarContainer = styled.div<{ size: AvatarSizes }>`
  height: ${(props) => `${DEFAULT_SIZES[props.size]}px`};
  width: ${(props) => `${DEFAULT_SIZES[props.size]}px`};
  border-radius: 50%;
  border: 2px solid;
  overflow: hidden;
`

export const AvatarImage = styled.img`
  width: 100%;
  object-fit: cover;
`

// TODO: definir estilo
export const AvatarOverlayComponent = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`
