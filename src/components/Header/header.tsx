import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import * as Styled from './header.styled'

const Header = () => {
  return (
    <Styled.Header>
      <Link href="/" passHref>
        <Styled.LogoLink>
          <Image src="/images/logo.jpg" width={100} height={51} />
        </Styled.LogoLink>
      </Link>
      <Styled.Nav>
        <Styled.NavList>
          <Styled.NavListItem>
            <Link href="/" passHref>
              <Styled.NavListItemLink>WebTV</Styled.NavListItemLink>
            </Link>
          </Styled.NavListItem>
          <Styled.NavListItem>
            <Link href="/" passHref>
              <Styled.NavListItemLink>YouTube</Styled.NavListItemLink>
            </Link>
          </Styled.NavListItem>
        </Styled.NavList>
      </Styled.Nav>
    </Styled.Header>
  )
}

export default Header
