import Axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addVideoList } from '../features/videoSlice';
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
        part: 'snippet',
        chart: 'mostPopular',
        pageToken : pageToken,
        maxResults : 50
      },
    })
      .then((res) => {
        setLoading(false);
        dispatch(addVideoList({
          videoListData : res.data
        }))
      })
      .catch((err) => {
        setLoading(false);
        alert(err);
      });
  };
  return { getVideoList, loading };
}
