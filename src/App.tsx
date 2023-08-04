import './App.css';
import { GlobalStyles } from './assets/styles/globalStyles.ts';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './assets/styles/theme.ts';

import { useEffect, useState } from 'react';

import Header from './components/Header/Header.tsx';
import SearchBar from './components/SearchBar/SearchBar.tsx';
import axios from 'axios';

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
  const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState<string>(userPrefersDark ? 'dark' : 'light');
  const isDarkTheme: boolean = theme === 'dark';
  const [searchValue, setSearchValue] = useState<string>('');
  const [response, setResponse] = useState({});

  useEffect(() => {
    const handleColorSchemeChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    const colorSchemeListener = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeListener.addEventListener('change', handleColorSchemeChange);

    return () => {
      colorSchemeListener.removeEventListener('change', handleColorSchemeChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };

  const getResponse = async (value: string) => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`);
      setResponse(response);
    } catch (err) {
      setResponse({ title: 'none' });
    }
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppWrapper>
        <MainWrapper>
          <Header toggleTheme={toggleTheme} theme={theme} />
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} getResponse={getResponse} />
          <h1>{JSON.stringify(response)}</h1>
        </MainWrapper>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
