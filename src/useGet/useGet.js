import Axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addVideoList, addVideoPlaying, addCommentThread, addResultVideoList } from '../features/videoSlice';
export function useGetVideolist() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const getVideoList = (pageToken) => {
    setLoading(true);
    Axios({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/videos',
      params: {
        key: 'AIzaSyDwnxsOzAJCAzdV-aC36MVnZXX7UzHQtc8',
        part: 'snippet,statistics',
        chart: 'mostPopular',
        pageToken: pageToken,
        maxResults: 50
      },
    })
      .then((res) => {
        setLoading(false);
        dispatch(addVideoList({
          videoListData: res.data
        }))
      })
      .catch((err) => {
        setLoading(false);
        alert(err);
      });
  };
  return { getVideoList, loading };
}
export function useGetVideoPlaying() {
  const dispatch = useDispatch()
  const getVideoPlaying = (id) => {
    dispatch(addVideoPlaying({
      loading : true
    }))
    Axios({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/videos',
      params: {
        key: 'AIzaSyDwnxsOzAJCAzdV-aC36MVnZXX7UzHQtc8',
        part: 'snippet,contentDetails,statistics,player',
        id: id
      }
    }).then(res=>{
      dispatch(addVideoPlaying({
        dataVideoPlaying : res.data,
        loading : false
      }))
    }).catch(err=>{
      dispatch(addVideoPlaying({
        loading : false
      }))
      alert(err)
    })
  }
  return { getVideoPlaying }
}
export function useGetCommentThreads(){
 const dispatch = useDispatch()
 const getCommentThreads = (videoId,pageToken)=>{
   dispatch(addCommentThread({
     loading : true,
   }))
   Axios({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/commentThreads',
    params: {
      key: 'AIzaSyDwnxsOzAJCAzdV-aC36MVnZXX7UzHQtc8',
      part: 'snippet,replies,id',
      videoId: videoId,
      pageToken : pageToken
    }
   }).then(res=>{
    dispatch(addCommentThread({  
      dataCommentThread : res.data,
      loading : false,
    }))
   }).catch(err=>{
     dispatch(addCommentThread({
       loading : false
     }))
     alert(err)
   })
 }
 return {getCommentThreads}
}
export function useGetVideosSearch(){
  const dispatch = useDispatch()
  const getVideosSearch = (query,pageToken)=>{
    dispatch(addResultVideoList({
      loading : true
    }))
    console.log(query,pageToken)
    Axios({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: 'AIzaSyDwnxsOzAJCAzdV-aC36MVnZXX7UzHQtc8',
        part: 'snippet',
        maxResults: 25,
        q : query,
        pageToken : pageToken
      }
    }).then(res=>{
      dispatch(addResultVideoList({
        DataResultVideoList : res.data,
        loading : false
      }))
    }).catch(err=>{
      dispatch(addResultVideoList({
        loading  : false
      }))
      alert(err)
    })
  }
  return {getVideosSearch}
}