import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectResultVideoList, addResultVideoList } from '../../features/videoSlice'
import LinearProgress from '@material-ui/core/LinearProgress';
import { selectQuery } from '../../features/querySlice';
import { useGetVideosSearch } from '../../useGet/useGet';
import CardVideoList from '../CardVideoList/CardVideoList';
function SearchVideoResult() {
  const {DataResultVideoList,loading} = useSelector(selectResultVideoList)
  const query = useSelector(selectQuery)
  const {getVideosSearch} = useGetVideosSearch()
  const dispatch = useDispatch()
  const checkVideo = DataResultVideoList?.items?.length === 0 && !loading
  const cannotFindVideo = checkVideo
  const handleControlNext = ()=>{
    const videoListCoord = document.querySelector('.SearchVideoResult')
    window.scrollTo(0,videoListCoord.offsetTop - 100)
    dispatch(addResultVideoList({
      DataResultVideoList : []
    }))
    getVideosSearch(query,DataResultVideoList?.nextPageToken)
  }
  const handleControlPrev = ()=>{
    const videoListCoord = document.querySelector('.SearchVideoResult')
    window.scrollTo(0,videoListCoord.offsetTop - 100)
    getVideosSearch(addResultVideoList({
      DataResultVideoList : []
    }))
    getVideosSearch(query,DataResultVideoList?.prevPageToken)
  }
  return (
    <div className="SearchVideoResult">
      <div className="sticky top-0">
        {
          loading && <LinearProgress color="secondary"/>
        }
      </div>
      <div>
      {
        cannotFindVideo && <p className="text-white text-lg uppercase">Sorry We Cannot Find...</p>
      }
      </div>
      <MemoizedChildComponent DataResultVideoList={DataResultVideoList}/>
      <div className="VideoList__control flex flex-col mt-2 mx-auto xs:w-8/12 sm:w-6/12">
        {
          DataResultVideoList?.prevPageToken && <button className="px-2 font-semibold py-2 mb-2 w-full border-none cursor-pointer hover:bg-red-700 text-lg rounded shadow-xl outline-none bg-red-500 text-black" onClick={handleControlPrev}>Prev Load More</button>
        }
        {
          DataResultVideoList?.nextPageToken && <button className="px-2 font-semibold py-2 w-full border-none cursor-pointer hover:bg-blue-700 text-lg rounded shadow-xl outline-none bg-blue-600 text-white" onClick={handleControlNext}>Next Load More</button>
        }
      </div>
    </div>
  )
}
function ChildComponent({DataResultVideoList}){
  return (
    <div className="SearchVideoResultt__grid gap-2 mt-2 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {
        DataResultVideoList?.items?.map((item,index)=>(
          <CardVideoList 
          key={index}
          id={item.id.videoId} 
          etag={item.etag} 
          title={item.snippet.title} 
          channelTitle={item.snippet.channelTitle}
          thumbnailUrl={item.snippet.thumbnails.medium.url} 
          width={item.snippet.thumbnails.medium.width} 
          height={item.snippet.thumbnails.medium.height}
          publishedAt={item.snippet.publishedAt}
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
export default SearchVideoResult
