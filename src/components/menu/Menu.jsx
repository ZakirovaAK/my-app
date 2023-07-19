import * as Styled from './menu__style'

import { useState, useContext } from 'react'
import sprite from '../../img/icon/sprite.svg'
import logoLight from '../../img/logo-light.png'
import logoDark from '../../img/logo-dark.png'

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

  const getThemeIcon = () => {
    if (themeType === 'light') {
      return logoLight
    }
    return logoDark
  }

  return (
    <Styled.Nav>
      <Styled.NavLogo>
        <Styled.LogoImage src={getThemeIcon()} alt="logo" />
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
                xlinkHref={`${sprite}#icon-toggle-theme-${themeType}`}
              ></use>
            </Styled.ToggleThemeSvg>
          </Styled.MenuList>
        </Styled.Menu>
      )}
    </Styled.Nav>
  )
}

export default Menu
