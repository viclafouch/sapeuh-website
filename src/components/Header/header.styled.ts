import styled from '@emotion/styled'

export const Header = styled.header`
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  background-color: ${(props) => {
    return props.theme.palette.primary.main
  }};
  color: ${(props) => {
    return props.theme.palette.primary.contrastText
  }};
`

export const LogoLink = styled.a`
  display: block;
`

export const Nav = styled.nav`
  flex: 1;
`

export const NavList = styled.ul`
  display: flex;
  gap: 3rem;
  list-style-type: none;
  width: 100%;
`

export const NavListItem = styled.li`
  text-transform: uppercase;
`

export const NavListItemLink = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: #b4b4b2;
  font-size: 1.8rem;

  &:hover {
    color: ${(props) => {
      return props.theme.palette.primary.contrastText
    }};
  }
`
