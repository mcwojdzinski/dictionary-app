import './App.css'
import styled, { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme} from "./assets/styles/theme.ts"
import { useState } from 'react';
import { GlobalStyles } from './assets/styles/globalStyles.ts';

const AppWrapper = styled.div`
  min-height: 100vh;
  transition: all 0.30s ease;
  background-color: ${(props) => props.theme.bgPrimary};
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
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
