import './App.css'

import GlobalStyle from './style/styles'

import { AppRoutes } from './routes'

function App() {
  return (
    <>
      <AppRoutes />
      <GlobalStyle />
      {/* <Wrapper>
        <Container>
          <MainElement mainClassName="main" />
          <BarElement />
          <Footer footerClassName="footer" />
        </Container>
      </Wrapper> */}
    </>
  )
}

export default App
