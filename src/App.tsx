import './App.css'
import styled, { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme} from "./assets/styles/theme.ts"
import { useState } from 'react';
import { GlobalStyles } from './assets/styles/globalStyles.ts';

const AppWrapper = styled.div`
  background-color: ${(props) => props.theme.bgPrimary};
`

const H1 = styled.h1`
    color: ${(props) => props.theme.textPrimary}}
`

const App = () => {
  const [theme, setTheme] = useState<string>('light')
  const isDarkTheme: boolean = theme === 'dark'

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark")
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppWrapper>
        <input type="checkbox" onClick={toggleTheme} />
        <H1>Hello world</H1>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
