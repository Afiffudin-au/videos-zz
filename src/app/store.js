import { configureStore } from '@reduxjs/toolkit';
import videoReducer from '../features/videoSlice';
import queryReducer from '../features/querySlice'
export default configureStore({
  reducer: {
    video: videoReducer,
    query : queryReducer
  },
});
