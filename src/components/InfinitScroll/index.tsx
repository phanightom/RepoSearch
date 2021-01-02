import React, { useEffect, useState, useRef  } from 'react';
import { Item } from './style';
import { ListItem } from 'types';

const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
}
interface InfiniteScrollProps {
	datas: ListItem[]
	handleFetchDatas: (pageNumber: number) => void
	userName: string
}
const InfiniteScroll = ({datas, handleFetchDatas, userName}: InfiniteScrollProps) => {
	const [postList, setPostList] = useState<ListItem[]>([]); 
	const [page, setPage] = useState(1);
	const loader = useRef<HTMLDivElement>(null);
	
	const handleObserver = (entities) => {
		const target = entities[0];
		if (target.isIntersecting) {
			setPage((page) => (page + 1))
		}
	}
	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "20px",
			threshold: 1.0
		};
		const observer = new IntersectionObserver(handleObserver, options);
		if (loader && loader.current) {
			observer.observe(loader.current)
		}
	}, []);

	useEffect(() => {
		const newList = postList.concat(datas);
		setPostList(newList)
	}, [datas])

	useEffect(() => {
		handleFetchDatas(page)
	}, [page])

	useEffect(() => {
		if (userName) {
			setPostList([])
		}
	}, [userName])

	return (<div className="container" style={containerStyle}>
		<div className="post-list">
			{
				postList.map((d, index) => {
					return (
					<Item key={index} className="post">
						<p>{d.name}</p>
						<p>{d.description}</p>
						<p>{d.clone_url}</p>
						<p>{d.stargazers_count}</p>
						<p>{d.watchers_count}</p>
						<p>{d.language}</p>
					</Item>
					)
				})
			}
			<div className="loading" ref={loader}>
				<h2>Load More</h2>
			</div>
		</div>
	</div>)
}

export default InfiniteScroll;