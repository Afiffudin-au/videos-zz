import React from 'react'
import { useSelector } from 'react-redux'
import { selectVideoPlaying } from '../../features/videoSlice'
import LinearProgress from '@material-ui/core/LinearProgress';
import PlayingVideoChild from './PlayingVideoChild';
function PlayingVideo() {
  const {dataVideoPlaying,loading} = useSelector(selectVideoPlaying)
  return (
    <div className="videoPlaying">
      <div className="sticky top-0">
       {loading && <LinearProgress color="secondary"/>}
      </div>
      {
        dataVideoPlaying?.items?.map((item,index)=>(
          <PlayingVideoChild key={item.id} item={item}/>
        ))
      }
    </div>
  )
}

export default PlayingVideo
