import React from 'react';

interface SearchProps {
  setFetching: (isLoading: boolean) => void,
  handleFetchRepos: (userName: string, pageNumber: number) => void,
}

const Search = ({setFetching, handleFetchRepos}: SearchProps ) => {
  return (
    <div>
      FetchRepos
      <input
        onChange={(e) => {
          setFetching(true)
          handleFetchRepos(e.target.value, 1)
        }}
      />
    </div>
  )
}

export default Search;