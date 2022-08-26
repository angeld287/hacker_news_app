import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { searchAsync } from './asyncThunks';
import { ISearchSlice } from './ISearch';

export const initialState: ISearchSlice = {
  status: 'idle',
  results: {
    hits: null
  },
};

export const searchSlice = createSlice({
  name: 'finder',
  initialState,

  //Actions
  reducers: {},

  //async operations
  extraReducers: (builder) => {
    builder
      .addCase(searchAsync.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(searchAsync.fulfilled, (state, action) => {
        state.results.hits = action.payload.hits
        state.status = 'idle';
      })
      .addCase(searchAsync.rejected, (state) => {
        state.status = 'failed';
      })
  },
});

//Actions
//export const { } = userSessionSlice.actions;

export const selectSearch = (state: RootState) => state.finder;

export default searchSlice.reducer;
