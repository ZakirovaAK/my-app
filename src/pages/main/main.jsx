import React from 'react'
import * as Styled from './main.style'

import BarElement from '../../components/barelement/BarElement'
import Footer from '../../components/footer/Footer'
import MainElement from '../../components/mainelement/MainElement'

import Navigation from '../../routes';

const Main = () => {
  return (
    // <MainElement/>
    <Styled.Wrapper>
      <Navigation />
      <Styled.Container>
        <MainElement mainClassName="main" />
        <BarElement />
        <Footer footerClassName="footer" />
      </Styled.Container>
    </Styled.Wrapper>
  )
}

export default Main
