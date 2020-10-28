import React from 'react'
import { useSelector } from 'react-redux'
import { selectVideoPlaying } from '../../features/videoSlice'
import LinearProgress from '@material-ui/core/LinearProgress';
import PlayingVideoChild from './PlayingVideoChild';
function PlayingVideo() {
  const videoPlaying = useSelector(selectVideoPlaying)
  const newVideoPlaying = {...videoPlaying?.dataVideoPlaying}
  return (
    <div className="videoPlaying">
      <div className="sticky top-0">
       {videoPlaying.loading && <LinearProgress color="secondary"/>}
      </div>
      {
        newVideoPlaying.items?.map((item,index)=>(
          <PlayingVideoChild key={item.id} item={item}/>
        ))
      }
    </div>
  )
}

export default PlayingVideo
