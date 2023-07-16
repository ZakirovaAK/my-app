import styled, { css, createGlobalStyle } from 'styled-components'

export const Sidebar = styled.div``

export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`

export const MenuLink = styled.a`
  color: ${(props) => props.theme.supportiveColor};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`

export const MenuList = styled.ul`
  padding: 18px 0 10px 0;
`

export const Menu = styled.div`
  display: block;
  visibility: visible;
`

// transform: ${props => props.active ? 'translateX(0)' : 'translate(-200%)'};
// transition: transform 0.5s;

export const NavBurger = styled.div`
  cursor: pointer;
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`

export const Nav = styled.nav`
  width: 244px;
  ${'' /* background-color: #181818; */}
  background-color: ${(props) => props.theme.additionalColor};
  padding: 20px 0 20px 36px;
`

export const NavLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`

export const LogoImage = styled.img`
  width: 113.33px;
  height: 17px;
  ${'' /* color: #181818; */}
  color: transparent;
`

export const BurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
`
const SvgLight = css`
    fill: transparent;
    stroke: #696969;
    stroke: ${(props) => props.theme.svgLightColor};
`

const SvgDark = css`
    fill: transparent;
    stroke: ${(props) => props.theme.svgDarkColor};
`

export const ToggleThemeSvg = styled.svg`
  ${SvgLight}
  width: 39px;
  height: 39px;
`
