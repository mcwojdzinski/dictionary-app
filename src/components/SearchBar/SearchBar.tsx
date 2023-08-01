import IconSearch from '../Icons/IconSearch.tsx';
import { ErrorMessage, Input, SearchIconWrapper, SearchWrapper } from './SearchBar.styles.tsx';
import { ChangeEvent, useState } from 'react';

const SearchBar = ({
  searchValue,
  setSearchValue,
}: {
  searchValue: string;
  setSearchValue: (value: string) => unknown;
}) => {
  const [isInputEmpty, setIsInputEmpty] = useState<boolean>(false);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setIsInputEmpty(event.target.value === '');
  };

  return (
    <SearchWrapper>
      <Input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
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
