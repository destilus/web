import { Fragment, ReactNode, SyntheticEvent } from 'react'

import { AvatarContainer, AvatarImage, AvatarOverlayComponent } from './avatar.styles'
import { AvatarSizes } from './avatar.interface'

export type AvatarProps = {
  size: AvatarSizes
  source?: string
  fallbackSource?: string
  editable?: boolean
  onEditClick?: (event?: SyntheticEvent) => void
}

export default function Avatar(props: AvatarProps): JSX.Element {
  const { source, fallbackSource, size, editable, onEditClick } = props

  const src = source || fallbackSource
  const AvatarOverlay = editable ? AvatarEditable : Fragment

  return (
    <AvatarContainer size={size}>
      <AvatarOverlay onEditClick={onEditClick}>
        <AvatarImage src={src} />
      </AvatarOverlay>
    </AvatarContainer>
  )
}

type AvatarEditableProps = {
  children: ReactNode
  onEditClick?: (event?: SyntheticEvent) => void
}

function AvatarEditable(props: AvatarEditableProps) {
  const { children, onEditClick } = props

  return <AvatarOverlayComponent onClick={onEditClick}>{children}</AvatarOverlayComponent>
}
