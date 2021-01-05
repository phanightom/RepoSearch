import React, {useEffect, useState, useRef} from 'react';
import {Item, Container, LoadingFrame, ItemFrame} from './style';
import {ListItem} from 'types';
import Loading from 'react-loading';

interface InfiniteScrollProps {
	datas: ListItem[]
	handleFetchDatas: (pageNumber: number) => void
	userName: string
	isFetching: boolean
	isEmpty: boolean
	isFetched: boolean
}
const InfiniteScrollList = ({
	datas, handleFetchDatas, userName, isFetching, isEmpty, isFetched
}: InfiniteScrollProps) => {
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
		if (page > 1) {
			handleFetchDatas(page)
		}
	}, [page])

	useEffect(() => {
		if (userName) {
			setPostList([])
			setPage(1)
		}
	}, [userName])
	return (
		<Container>
			<ItemFrame>
				{
					postList.length > 0 && postList.map((d, index) => {
						return (
						<Item key={index}>
							<h2>{d.name}</h2>
							<p>Description: {d.description}</p>
							<p>Clone URL: {d.clone_url}</p>
							<p>Star: {d.stargazers_count}</p>
							<p>Watcher: {d.watchers_count}</p>
							<p>Language: {d.language}</p>
						</Item>
						)
					})
				}
			</ItemFrame>
			<LoadingFrame ref={loader}>
				{
					isFetching && (datas.length >= 10 || !isFetched) && (
						<Loading type="bubbles" color="#ccc"/>
					)
				}
			</LoadingFrame>
			{
				!isFetching && isEmpty && (<LoadingFrame>－　Data Not Found.　－</LoadingFrame>)
			}
			{
				!isFetching && !isEmpty && isFetched && datas.length === 0 && (<LoadingFrame>－　No More Data.　－</LoadingFrame>)
			}
		</Container>
	)
}

export default InfiniteScrollList;