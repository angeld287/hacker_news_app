import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Options } from '../../interfaces/components/ISelect';
import { searchAsync } from './asyncThunks';
import { ISearchRecord, ISearchSlice } from './ISearch';

export const initialState: ISearchSlice = {
  status: 'idle',
  results: {
    hits: null
  },
  records: [],
  currentSearchProps: { page: '0', type: Options.ANGULAR },
  apiCurrentPage: 0
};

export const searchSlice = createSlice({
  name: 'finder',
  initialState,

  //Actions
  reducers: {
    setCurrentSearchProps: (state, action: PayloadAction<ISearchRecord>) => {
      state.currentSearchProps = { page: action.payload.page, type: action.payload.type };
    },
    setApiCurrentPage: (state, action: PayloadAction<number>) => {
      state.apiCurrentPage = action.payload;
    },
  },

  //async operations
  extraReducers: (builder) => {
    builder
      .addCase(searchAsync.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(searchAsync.fulfilled, (state, action) => {
        const prev = state.results.hits ? state.results.hits : []
        const next = action.payload.hits ? action.payload.hits : []

        state.records.push(state.currentSearchProps)
        state.results.hits = [...prev, ...next]
        state.currentSearchProps = initialState.currentSearchProps;
        state.status = 'idle';
      })
      .addCase(searchAsync.rejected, (state) => {
        state.currentSearchProps = initialState.currentSearchProps;
        state.status = 'failed';
      })
  },
});

//Actions
export const { setCurrentSearchProps, setApiCurrentPage } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.finder;

export default searchSlice.reducer;
