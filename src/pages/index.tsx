import { NextPage } from 'next'
import { styled } from 'linaria/react'

const Box = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  height: 200px;
  width: 200px;
  background-color: tomato;
`

const Home: NextPage = () => {
  return <Box>Hello</Box>
}

export default Home
