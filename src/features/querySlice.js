import { createSlice } from '@reduxjs/toolkit';

export const querySlice = createSlice({
  name: 'Query',
  initialState: {
    query: ''
  },
  reducers: {
    addQuery: (state,action) => {
      state.query = action.payload
    },
  },
});
export const { addQuery } = querySlice.actions;
export const selectQuery = state => state.query.query;
export default querySlice.reducer;
