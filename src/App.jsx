import './App.css'

import GlobalStyle from './style/styles'

import { AppRoutes } from './routes'

function App() {
  return (
    <>
      {/* <AppRoutes /> */}
      <AppRoutes isLogin={true} /> {/*// заглушка для входа*/}
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
