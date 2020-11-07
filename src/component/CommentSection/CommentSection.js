import React ,{useEffect}from 'react'
import { useSelector, useDispatch } from 'react-redux'
import LinearProgress from '@material-ui/core/LinearProgress';
import CommentCard from './CommentCard';
import { selectCommentThread, selectCommentItems, addCommentThread } from '../../features/videoSlice';
import { useGetCommentThreads } from '../../useGet/useGet';
function CommentSection({videoId}) {
  const {getCommentThreads} = useGetCommentThreads()
  const commentThreads = useSelector(selectCommentThread)
  const commentItem = useSelector(selectCommentItems)
  const newComment = {...commentThreads?.dataCommentThread}
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(addCommentThread({
      dataCommentThread : [],
      removeCopyArray : true
    }))
    getCommentThreads(videoId)
  },[])
  return (
    <div className="CommentSection">
      <div className="sticky top-0">
        {
          commentThreads.loading && <LinearProgress color="secondary"/>
        }
      </div>
      <div className="CommentSection__cards" style={{padding : '10px'}}>
        {
          commentItem.map(items=>(
            items?.map((item,index)=>(
              <div key={index}>
                <MemoizedChildComponent item={item}/>
              </div>
            ))
         ))
        //  commentItem?.map((item,index)=>(
        // <div key={index}>
        //     <MemoizedChildComponent item={item}/>
        //   </div>
        // ))
        }
      </div>
      <div className="CommentSection__loadMore" style={{padding : '10px'}}>
        {
          newComment.nextPageToken && <button style={{outline : '0'}} className="px-2 font-semibold py-2 w-full border-none cursor-pointer hover:bg-blue-700 text-lg rounded shadow-xl outline-none bg-blue-600 text-white" onClick={()=>getCommentThreads(videoId,newComment.nextPageToken)}>Load More</button>
        }
      </div>
    </div>
  )
}
function ChildComponent({item}){
  return(
    <CommentCard displayName={item.authorDisplayName} profileImageUrl={item.authorProfileImageUrl} textDisplay={item.textDisplay} textOriginal={item.textOriginal}/>
  )
}
function compare(prevProps , nextProps){
  return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}
const MemoizedChildComponent = React.memo(ChildComponent,compare)
export default CommentSection
