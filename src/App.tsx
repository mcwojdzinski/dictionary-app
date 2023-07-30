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
`;

const MainWrapper = styled.div`
  max-width: 768px;
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
        </MainWrapper>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
