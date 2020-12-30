import {useState, useCallback} from 'react';
import { fetchRepos } from 'api'
import {debounce} from 'lodash';
import Layout from 'components/Layout';

interface ListObj {
  name: string,
  description: string,
  clone_url: string,
  stargazers_count: number,
  watchers_count: number,
  language: string,
}

const Home = () => {
  const [list, setList] = useState<ListObj[]>([]);
  const [isFetching, setFetching] = useState(false);
  const [isFetched, setFetched] = useState(false);

  const handleFetchRepos = useCallback(debounce((userName: string) => {
    setFetched(true)
    fetchRepos(userName).then(response => response.json()).then(data => {
      setList(data)
      setFetching(false)
    })
  }, 500), [])
  return (
    <Layout>
      FetchRepos
      <input
        onChange={(e) => {
          setFetching(true)
          handleFetchRepos(e.target.value)
        }}
      />
      {
        isFetched && isFetching && (
          <div>Loading...</div>
        )
      }
      {
        isFetched && !isFetching && list.length > 0 && list.map((d) => {
          return (
            <div>
              <p>{d.name}</p>
              <p>{d.description}</p>
              <p>{d.clone_url}</p>
              <p>{d.stargazers_count}</p>
              <p>{d.watchers_count}</p>
              <p>{d.language}</p>
            </div>
          )
        })
      }
    </Layout>
  )
}

export default Home