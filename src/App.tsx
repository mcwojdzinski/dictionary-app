import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './assets/styles/theme.ts';
import { useState } from 'react';
import { GlobalStyles } from './assets/styles/globalStyles.ts';
import Header from './components/Header/Header.tsx';

const AppWrapper = styled.div`
  min-height: 100vh;
  transition: all 0.3s ease;
  background-color: ${(props) => props.theme.bgPrimary};
  display: flex;
  justify-items: center;
  justify-content: center;
  padding-top: 20px;

  @media (min-width: 768px) {
    padding-top: 58px;
  }
`;

const MainWrapper = styled.div`
  width: 100%;
  padding: 0px 15px;

  @media (min-width: 768px) {
    width: 768px;
  }
`;

const App = () => {
  const [theme, setTheme] = useState<string>('light');
  const isDarkTheme: boolean = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppWrapper>
        <MainWrapper>
          <Header toggleTheme={toggleTheme} />
          <h1>Check</h1>
        </MainWrapper>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
