import React from 'react';
import {Container, SearchInput, SearchImage} from './style';

interface SearchProps {
  setFetching: (isLoading: boolean) => void,
  handleFetchDatas: (userName: string) => void,
}

const Search = ({setFetching, handleFetchDatas}: SearchProps) => {
  return (
    <Container>
      <SearchImage src='https://image.flaticon.com/icons/png/512/25/25231.png' />
      <SearchInput
        type="text"
        placeholder="Search Users Repo ..."
        onChange={(e) => {
          setFetching(true)
          handleFetchDatas(e.target.value)
        }}
      />
    </Container>
  )
}

export default Search;