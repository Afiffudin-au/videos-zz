import React, { useEffect } from 'react'
import CardVideoList from '../CardVideoList/CardVideoList'
import { useGetVideolist } from '../../useGet/useGet'
import { useSelector, useDispatch } from 'react-redux'
import { selectVideoList, addVideoList } from '../../features/videoSlice'
import LinearProgress from '@material-ui/core/LinearProgress';
function VideoList() {
  const {getVideoList,loading} = useGetVideolist()
  const videoList = useSelector(selectVideoList)
  const newVideoList = {...videoList.videoListData}
  const dispatch = useDispatch()
  useEffect(()=>{
    getVideoList()
  },[])
  const handleControlNext = ()=>{
    const videoListCoord = document.querySelector('.VideoList')
    window.scrollTo(0,videoListCoord.offsetTop - 100)
    dispatch(addVideoList({
      videoListData : []
    }))
    getVideoList(newVideoList?.nextPageToken)
  }
  const handleControlPrev = ()=>{
    const videoListCoord = document.querySelector('.VideoList')
    window.scrollTo(0,videoListCoord.offsetTop - 100)
    dispatch(addVideoList({
      videoListData : []
    }))
    getVideoList(newVideoList?.prevPageToken)
  }
  return (
    <div className="VideoList p-1">
      <div className="VideoList__loading sticky top-0 w-full">
        {
          loading && <LinearProgress color="secondary"/>
        }
      </div>
      <MemoizedChildComponent newVideoList={newVideoList}/>
      <div className="VideoList__control flex flex-col mt-2 mx-auto xs:w-8/12 sm:w-6/12">
        {
          newVideoList?.prevPageToken && <button className="px-2 font-semibold py-2 mb-2 w-full border-none cursor-pointer hover:bg-red-700 text-lg rounded shadow-xl outline-none bg-red-500 text-black" onClick={handleControlPrev}>Prev Load More</button>
        }
        {
          newVideoList?.nextPageToken && <button className="px-2 font-semibold py-2 w-full border-none cursor-pointer hover:bg-blue-700 text-lg rounded shadow-xl outline-none bg-blue-600 text-white" onClick={handleControlNext}>Next Load More</button>
        }
      </div>
    </div>
  )
}
function ChildComponent({newVideoList}){
  return (
    <div className="VideoList__grid gap-2 mt-2 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {
       newVideoList?.items?.map((item,index)=>(
        <CardVideoList key={item.id}
        id={item.id} 
        etag={item.etag} 
        title={item.snippet.title} 
        channelTitle={item.snippet.channelTitle}
        thumbnailUrl={item.snippet.thumbnails.medium.url} 
        width={item.snippet.thumbnails.medium.width} 
        height={item.snippet.thumbnails.medium.height}
        publishedAt={item.snippet.publishedAt}
        viewCount={item.statistics.viewCount}
        />
      ))
      }
    </div>
  )
}
function compare(prevProps , nextProps){
  return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}
const MemoizedChildComponent = React.memo(ChildComponent,compare)
export default VideoList
