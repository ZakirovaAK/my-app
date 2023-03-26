import * as Styled from './menu__style'

import { useState } from 'react'
import logo from '../../img/logo.png'

const MenuElem = ({ href, text }) => {
  return (
    <Styled.MenuItem>
      <Styled.MenuLink href={href}>{text}</Styled.MenuLink>
    </Styled.MenuItem>
  )
}

function Menu(props) {
  const [isVisible, setVisible] = useState(false)

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src={logo} alt="logo"></img>
      </div>
      <div
        className="nav__burger burger"
        onClick={() => setVisible(!isVisible)}
      >
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      {isVisible && (
        <Styled.Menu>
          <Styled.MenuList>
            <MenuElem href="#" text="Главное" />
            <MenuElem href="#" text="Мой плейлист" />
            <MenuElem href="#" text="Войти" />
          </Styled.MenuList>
        </Styled.Menu>
      )}
    </nav>
  )
}

export default Menu
