import { styled } from '@linaria/react'
import type { NextPage } from 'next'

const Container = styled.div`
  max-width: 1024px;
  margin-right: auto;
  margin-left: auto;
  background-color: gray;
`

const Home: NextPage = () => {
  return <Container>olar</Container>
}

export default Home
