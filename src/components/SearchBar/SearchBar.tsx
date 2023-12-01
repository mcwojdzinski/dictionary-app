import IconSearch from '../Icons/IconSearch';
import { ErrorMessage, Input, SearchIconWrapper, SearchWrapper } from './SearchBar.styles';
import { useState } from 'react';

const SearchBar = ({
  searchValue,
  setSearchValue,
  getResponse,
}: {
  searchValue: string;
  setSearchValue: (value: string) => void;
  getResponse: (value: string) => void;
}) => {
  const [isInputEmpty, setIsInputEmpty] = useState<boolean>(false);
  const handleInputChange = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    setIsInputEmpty(false);
    if (event.key === 'Enter' && event.currentTarget.value !== '') {
      setSearchValue(event.currentTarget.value);
      getResponse(event.currentTarget.value);
    }
    if (event.key === 'Enter' && event.currentTarget.value === '') {
      setIsInputEmpty(event.currentTarget.value === '');
    }
  };

  return (
    <SearchWrapper>
      <Input
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onKeyDown={handleInputChange}
        placeholder="Search for any word..."
        isInputEmpty={isInputEmpty}
      />
      <SearchIconWrapper>
        <IconSearch />
      </SearchIconWrapper>
      {isInputEmpty && <ErrorMessage>Whoops, can’t be empty…</ErrorMessage>}
    </SearchWrapper>
  );
};

export default SearchBar;
