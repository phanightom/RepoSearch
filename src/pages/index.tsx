import {useState, useCallback} from 'react';
import {fetchRepos, fetchReposRequest} from 'api'
import {debounce} from 'lodash';
import Layout from 'components/Layout';
import InfiniteScrollList from 'components/InfiniteScrollList';
import Search from 'components/Search';
import {ListItem} from 'types';

const Home = () => {
  const [list, setList] = useState<ListItem[]>([]);
  const [userName, setUserName] = useState('')
  const [isFetching, setFetching] = useState(false);
  const [isFetched, setFetched] = useState(false);

  const handleFetchRepos = (params: fetchReposRequest) => {
    if (!params.userName) return null
    setFetching(true)
    fetchRepos(params).then(data => {
      setList(data)
      setFetching(false)
      setFetched(true)
    })
  }

  const handleFetchReposDebounce = useCallback(debounce((userName: string) => {
    setUserName(userName)
    handleFetchRepos({userName, perpage: 10, pageNumber: 1})
  }, 500), [])

  const handleFetchReposMore = (pageNumber: number) => {
    handleFetchRepos({userName, perpage: 10, pageNumber})
  }

  return (
    <Layout>
      <Search
        handleFetchDatas={handleFetchReposDebounce}
        setFetching={setFetching}
      />
      <InfiniteScrollList
        datas={list}
        handleFetchDatas={handleFetchReposMore}
        userName={userName}
        isFetched={isFetched}
        isFetching={isFetching}
      />
    </Layout>
  )
}

export default Home