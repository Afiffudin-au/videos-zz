import { createSlice } from '@reduxjs/toolkit';

export const videoSlice = createSlice({
  name: 'Video',
  initialState: {
    videoList: [],
    videoPlaying : [],
    commentBlock : {
      commentThread : [],
      commentItem : [],
    }
  },
  reducers: {
    addVideoList: (state,action) => {
      state.videoList = action.payload
    },
    addVideoPlaying : (state,action)=>{
      state.videoPlaying = action.payload
    },
    addCommentThread : (state,action)=>{
      state.commentBlock.commentThread = action.payload
      state.commentBlock.commentItem = action.payload.dataCommentThread?.items?.map(item=>(item.snippet.topLevelComment.snippet))
      // state.commentBlock.commentItem = [...new Set([...state.commentBlock.commentItem,action.payload.dataCommentThread?.items?.map(item=>(item.snippet.topLevelComment.snippet))])]
    },
  },
});

export const { addVideoList,addVideoPlaying,addCommentThread,addCommentItem} = videoSlice.actions;
export const selectVideoList = state => state.video.videoList;
export const selectVideoPlaying = state => state.video.videoPlaying
export const selectCommentThread = state => state.video.commentBlock.commentThread
export const selectCommentItems = state=> state.video.commentBlock.commentItem
export default videoSlice.reducer;
