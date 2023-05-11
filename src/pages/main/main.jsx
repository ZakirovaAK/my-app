import React from 'react'
import * as Styled from './main.style'

// import BarElement from '../../components/barelement/BarElement'
import Audio from '../../components/barelement/Audio'
import Footer from '../../components/footer/Footer'
import MainElement from '../../components/mainelement/MainElement'

const Main = () => {
  return (
    // <MainElement/>
    <Styled.Wrapper>
      <Styled.Container>
        <MainElement mainClassName="main" />
        <Audio />
        <Footer footerClassName="footer" />
      </Styled.Container>
    </Styled.Wrapper>
  )
}

export default Main
