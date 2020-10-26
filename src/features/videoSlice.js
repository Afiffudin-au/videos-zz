import { createSlice } from '@reduxjs/toolkit';

export const videoSlice = createSlice({
  name: 'Video',
  initialState: {
    videoList: [],
  },
  reducers: {
    addVideoList: (state,action) => {
      state.videoList = action.payload
    },
  },
});

export const { addVideoList } = videoSlice.actions;
export const selectVideoList = state => state.video.videoList;
export default videoSlice.reducer;
