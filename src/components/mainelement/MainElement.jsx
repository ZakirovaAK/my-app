import MainCenterBlock from '../centerblock/MainCenterBlock/MainCenterBlock'
import Menu from '../menu/Menu'
import SideBar from '../sidebar/SideBar'

import * as Styled from './mainelement__style'

function MainElement(props) {
  return (
    <Styled.Main>
      <Menu />
      <MainCenterBlock />
      <SideBar/>
    </Styled.Main>
  )
}

export default MainElement
