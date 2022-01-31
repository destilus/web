import { styled } from '@linaria/react'

const Container = styled.div`
  opacity: var(--opacity, 0.75);
  background-color: var(--color, var(--color-gray-900));
  z-index: 1201;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justinfy-content: center;
`

export default Container
