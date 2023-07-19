import './App.css'
import { useState } from 'react'
import GlobalStyle from './style/styles'

import { AppRoutes } from './routes'
import { ThemeProvider } from 'styled-components'
import { Context, themes } from './context/ThemeContext'

function App() {
  const [currentTheme, setCurrentTheme] = useState('dark')
  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      setCurrentTheme('light')
    } else setCurrentTheme('dark')
  }

  return (
    <>
      <Context.Provider value={{ themeType: currentTheme, toggleTheme }}>
        <ThemeProvider theme={themes[currentTheme]}>
          <GlobalStyle />
          <AppRoutes isLogin={true} /> {/*// заглушка для входа*/}
        </ThemeProvider>
      </Context.Provider>
    </>
  )
}

export default App
