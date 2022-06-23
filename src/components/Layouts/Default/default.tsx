import React from 'react'
import Header from '@components/Header/header'

import { Main } from './default.styled'

type Props = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  )
}

export default DefaultLayout
