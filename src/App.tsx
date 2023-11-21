import './App.css';
import { GlobalStyles } from './assets/styles/globalStyles.ts';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './assets/styles/theme.ts';

import { useEffect, useState } from 'react';

import Header from './components/Header/Header.tsx';
import SearchBar from './components/SearchBar/SearchBar.tsx';
import axios from 'axios';
import WordContent from './components/WordContent/WordContent.tsx';

type Theme = 'dark' | 'light';

const StyledAppWrapper = styled.div`
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

const StyledMainWrapper = styled.div`
  width: 100%;
  padding: 0px 15px;

  @media (min-width: 768px) {
    width: 768px;
  }
`;

const App = () => {
  const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState<Theme>(userPrefersDark ? 'dark' : 'light');
  const isDarkTheme: boolean = theme === 'dark';
  const [searchValue, setSearchValue] = useState<string>('');

  const [response, setResponse] = useState();
  const [responseError, setResponseError] = useState<boolean>(false); // true -  404, false - 200

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
      setResponse(response.data[0]);
      setResponseError(false);
    } catch (err: any) {
      if (err.response && err.response.status === 404) {
        if (err.response.data) {
          setResponse(err.response.data);
          setResponseError(true);
        }
      }
    }
  };

  console.log(response);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <StyledAppWrapper>
        <StyledMainWrapper>
          <Header toggleTheme={toggleTheme} theme={theme} />
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} getResponse={getResponse} />
          {response !== null || response !== undefined ? (
            <WordContent response={response} responseError={responseError} responseErrorBody={response} />
          ) : null}
        </StyledMainWrapper>
      </StyledAppWrapper>
    </ThemeProvider>
  );
};

export default App;
