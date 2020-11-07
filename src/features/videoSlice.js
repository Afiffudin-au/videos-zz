import { createSlice } from '@reduxjs/toolkit';

export const videoSlice = createSlice({
  name: 'Video',
  initialState: {
    videoList: [],
    videoPlaying : [],
    resultVideoList : [],
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
      if(action.payload.removeCopyArray){
        state.commentBlock.commentItem.length = 0 
      }
      // state.commentBlock.commentItem = action.payload.dataCommentThread?.items?.map(item=>(item.snippet.topLevelComment.snippet))
      state.commentBlock.commentItem = [...new Set([...state.commentBlock.commentItem,action.payload.dataCommentThread?.items?.map(item=>(item.snippet.topLevelComment.snippet))])]
    },
    addResultVideoList : (state,action)=>{
      state.resultVideoList = action.payload
    }
  },
});

export const { addVideoList,addVideoPlaying,addCommentThread,addResultVideoList} = videoSlice.actions;
export const selectVideoList = state => state.video.videoList;
export const selectVideoPlaying = state => state.video.videoPlaying
export const selectCommentThread = state => state.video.commentBlock.commentThread
export const selectCommentItems = state=> state.video.commentBlock.commentItem
export const selectResultVideoList = state => state.video.resultVideoList
export default videoSlice.reducer;
