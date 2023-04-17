import React from 'react'
import * as Styled from '../main/main.style'

// import Navigation from '../../components/main/navigation/navigation'
// import { PersonalPlaylistItems } from '../../mocks/personal-playlist'


import BarElement from '../../components/barelement/BarElement'
import Footer from '../../components/footer/Footer'
import Menu from '../../components/menu/Menu'
import SideBar from '../../components/sidebar/SideBar'

import SearchBlock from '../../components/centerblock/Search/Search'
import CenterBlockContent from '../../components/centerblock/Content/Content'
import { PersonalPlaylistItems } from '../../mocks/personal-playlist';

import * as S from '../../components/centerblock/MainCenterBlock/main_center_block__style'

const PersonalPlaylist = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Main>
          <Menu />
          <S.MainCenterBlock>
            <SearchBlock />
            <S.CenterBlockH2>Мой плейлист</S.CenterBlockH2>
            <CenterBlockContent trackDataList={PersonalPlaylistItems} />
          </S.MainCenterBlock>
          <SideBar />
        </Styled.Main>
        <BarElement />
        <Footer footerClassName="footer" />
      </Styled.Container>
    </Styled.Wrapper>
  )

  // return (
  //     <Styled.Main>
  //         <Navigation />
  //         <CenterBlock >
  //             <Search />
  //             <CenterBlockTitle >Мой плейлист</CenterBlockTitle>
  //             <Content playlist={PersonalPlaylistItems}/>
  //         </CenterBlock>
  //         <Sidebar />
  //         <Bar />
  //     </Styled.Main>
  // );
}

export default PersonalPlaylist
