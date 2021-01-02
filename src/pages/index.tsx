import {useState, useCallback} from 'react';
import { fetchRepos } from 'api'
import {debounce} from 'lodash';
import Layout from 'components/Layout';
import InfinitScroll from 'components/InfinitScroll';
import Search from 'components/Search';
import {ListItem} from 'types';

const Home = () => {
  const [list, setList] = useState<ListItem[]>([]);
  const [userName, setUserName] = useState('')
  const [isFetching, setFetching] = useState(false);
  const [isFetched, setFetched] = useState(false);

  const handleFetchRepos = useCallback(debounce((userName: string, pageNumber: number) => {
    setFetched(true)
    setUserName(userName)
    fetchRepos({userName, perpage: 10, pageNumber}).then(data => {
      setList(data)
      setFetching(false)
    })
  }, 500), [])
  const handleFetchReposMore = (pageNumber: number) => {
    if (userName) {
      fetchRepos({userName, perpage: 10, pageNumber}).then(data => {
        setList(data)
      })
    }
  }
  return (
    <Layout>
      <Search {...{setFetching, handleFetchRepos}}/>
      <InfinitScroll datas={list} handleFetchDatas={handleFetchReposMore} userName={userName}/>
    </Layout>
  )
}

export default Home