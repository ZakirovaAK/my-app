import SideBarBlock from './SideBarBlock'

import * as Styled from './sidebar__style'

function MainElement(props) {
  return (
    <Styled.Sidebar>
      <Styled.SidebarPersonal>
        <Styled.SidebarPersonalName>Alina.Zakirova</Styled.SidebarPersonalName>
        <Styled.SidebarPersonalAvatar></Styled.SidebarPersonalAvatar>
      </Styled.SidebarPersonal>
      <SideBarBlock />
    </Styled.Sidebar>
  )
}

export default MainElement
