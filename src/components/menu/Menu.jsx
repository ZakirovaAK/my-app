import * as Styled from './menu__style'

import { useState, useContext } from 'react'
import logo from '../../img/logo.png'
// import theme from '../../img/icon/logo.svg'

import { Context } from '../../context/ThemeContext'
import { ThemeContext } from 'styled-components'

const MenuElem = ({ href, text }) => {
  return (
    <Styled.MenuItem>
      <Styled.MenuLink href={href}>{text}</Styled.MenuLink>
    </Styled.MenuItem>
  )
}

function Menu(props) {
  const [isVisible, setVisible] = useState(false)

  const { themeType, toggleTheme } = useContext(Context)
  const themeContext = useContext(ThemeContext)
  console.log(themeContext)

  return (
    <Styled.Nav>
      <Styled.NavLogo>
        {/* <Styled.LogoImage src={logo} alt="logo"></Styled.LogoImage> */}
        <Styled.LogoImage src={`../../img/logo-${themeType}.png`} alt="logo" />
      </Styled.NavLogo>
      <Styled.NavBurger onClick={() => setVisible(!isVisible)}>
        <Styled.BurgerLine></Styled.BurgerLine>
        <Styled.BurgerLine></Styled.BurgerLine>
        <Styled.BurgerLine></Styled.BurgerLine>
      </Styled.NavBurger>
      {isVisible && (
        <Styled.Menu>
          <Styled.MenuList>
            <MenuElem href="#" text="Главное" />
            <MenuElem href="#" text="Мой плейлист" />
            <MenuElem href="#" text="Войти" />
            <Styled.ToggleThemeSvg alt={'Toggle theme'} onClick={toggleTheme}>
              <use
                xlinkHref={`../../img/icon/sprite.svg#icon-toggle-theme-${themeType}`}
              ></use>
            </Styled.ToggleThemeSvg>
          </Styled.MenuList>
        </Styled.Menu>
      )}
    </Styled.Nav>
  )
}

export default Menu
