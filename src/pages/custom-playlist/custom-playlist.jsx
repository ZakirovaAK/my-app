// import Navigation from '../../components/main/navigation/navigation'
// import { CustomPlaylists } from '../../mocks/custom-playlist'

import React from 'react'
import * as Styled from '../main/main.style'

import BarElement from '../../components/barelement/BarElement'
import Footer from '../../components/footer/Footer'
import Menu from '../../components/menu/Menu'
import SideBar from '../../components/sidebar/SideBar'

import SearchBlock from '../../components/centerblock/Search/Search'
import CenterBlockContent from '../../components/centerblock/Content/Content'
import { CustomPlaylists } from '../../mocks/custom-playlist';

import * as S from '../../components/centerblock/MainCenterBlock/main_center_block__style'

import { useParams } from 'react-router-dom'

const CustomPlaylist = () => {
  const params = useParams()
  const currenPlaylist = CustomPlaylists.filter((item) => item.id === params.id)

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Main>
          <Menu />
          <S.MainCenterBlock>
            <SearchBlock />
            <S.CenterBlockH2>{currenPlaylist[0].title}</S.CenterBlockH2>
            <CenterBlockContent trackDataList={currenPlaylist} />
          </S.MainCenterBlock>
          <SideBar />
        </Styled.Main>
        <BarElement />
        <Footer footerClassName="footer" />
      </Styled.Container>
    </Styled.Wrapper>
    // <Styled.Main>
    //     <Navigation />
    //     <CenterBlock >
    //         <Search />
    //         <CenterBlockTitle >{currenPlaylist[0].title}</CenterBlockTitle>
    //         <Content playlist={currenPlaylist} />
    //     </CenterBlock>
    //     <Sidebar />
    //     <Bar />
    // </Styled.Main>
  )
}

export default CustomPlaylist
