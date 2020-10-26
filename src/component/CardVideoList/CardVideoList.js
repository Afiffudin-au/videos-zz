import React from 'react'
import './CardVideoList.scss'
import LazyLoad from 'react-lazyload'
import LinearProgress from '@material-ui/core/LinearProgress';
import Moment from 'react-moment';
function CardVideoList({id,etag,title,channelTitle,thumbnailUrl,width,height,publishedAt}){
  return (
    <div className="CardVideoList bg-gray-800 rounded shadow-xl">
      <LazyLoad height={height} width={width} placeholder={<LinearProgress color="secondary"/>}>
        <img className="CardVideoList__thumbnail" src={thumbnailUrl} alt=""/>
      </LazyLoad>
      <div className="CardVideoList__content p-1">
        <p className="title">{title}</p>
        <strong>{channelTitle}</strong>
        <p><Moment fromNow ago>{publishedAt}</Moment> ago</p>
      </div>
    </div>
  )
}

export default CardVideoList
