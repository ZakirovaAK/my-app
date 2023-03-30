import './App.css'

import styled from 'styled-components';
import GlobalStyle from './style/styles'
// import * as Styled from './style/style'

import BarElement from './components/barelement/BarElement'
import Footer from './components/footer/Footer'
import MainElement from './components/mainelement/MainElement'

const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: #181818;
`;

const Container = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    position: relative;
    background-color: #181818;
    display: flex;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <MainElement mainClassName="main" />
          <BarElement />
          <Footer footerClassName="footer" />
        </Container>
      </Wrapper>
    </>
  )
}

export default App