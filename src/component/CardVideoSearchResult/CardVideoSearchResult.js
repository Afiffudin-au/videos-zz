import React from 'react'
import './CardVideoSearchResult.scss'
import LazyLoad from 'react-lazyload'
import LinearProgress from '@material-ui/core/LinearProgress';
import Moment from 'react-moment';
import { useGetVideoPlaying } from '../../useGet/useGet';
import { useDispatch } from 'react-redux';
import { addVideoPlaying } from '../../features/videoSlice';
import { useHistory } from 'react-router-dom';
function CardVideoSearchResult({id,etag,title,channelTitle,thumbnailUrl,width,height,publishedAt}) {
  const {getVideoPlaying} = useGetVideoPlaying()
  const dispatch = useDispatch()
  const history = useHistory()
  const handlePlayingVideo = ()=>{
    dispatch(addVideoPlaying({
      dataVideoPlaying : [],
    }))
    getVideoPlaying(id)
    history.push('/playingVideo')
  }
  return (
  <div onClick={handlePlayingVideo} className="CardVideoSearchResult cursor-pointer bg-gray-800 rounded shadow-xl">
    <LazyLoad height={height} width={width} placeholder={<LinearProgress color="secondary"/>}>
      <img className="CardVideoSearchResult__thumbnail" src={thumbnailUrl} alt={thumbnailUrl}/>
    </LazyLoad>
    <div className="CardVideoSearchResult__content p-1">
      <p className="title">{title}</p>
      <strong>{channelTitle}</strong>
      <p className="time"><Moment fromNow ago>{publishedAt}</Moment> ago</p>
    </div>
  </div>
  )
}

export default CardVideoSearchResult
