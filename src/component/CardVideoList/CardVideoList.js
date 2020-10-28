import React from 'react'
import './CardVideoList.scss'
import LazyLoad from 'react-lazyload'
import LinearProgress from '@material-ui/core/LinearProgress';
import Moment from 'react-moment';
import { useGetVideoPlaying } from '../../useGet/useGet';
import { useDispatch } from 'react-redux';
import { addVideoPlaying } from '../../features/videoSlice';
import { useHistory } from 'react-router-dom';
import { UseNumberWithComma } from '../../useNumberWithComma/UseNumerWithComma';
function CardVideoList({id,etag,title,channelTitle,thumbnailUrl,width,height,publishedAt,viewCount}){
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
    <div onClick={handlePlayingVideo} className="CardVideoList cursor-pointer bg-gray-800 rounded shadow-xl">
      <LazyLoad height={height} width={width} placeholder={<LinearProgress color="secondary"/>}>
        <img className="CardVideoList__thumbnail" src={thumbnailUrl} alt={thumbnailUrl}/>
      </LazyLoad>
      <div className="CardVideoList__content p-1">
        <p className="title">{title}</p>
        <strong>{channelTitle}</strong>
        <p className="time"><Moment fromNow ago>{publishedAt}</Moment> ago</p>
        <p className="view">{UseNumberWithComma(viewCount)} view</p>
      </div>
    </div>
  )
}

export default CardVideoList
