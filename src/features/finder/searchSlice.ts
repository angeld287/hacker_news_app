import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Options } from '../../interfaces/components/ISelect';
import IHit from '../../interfaces/models/IHit';
import localStoreService from '../../services/localStoreService';
import { searchAsync } from './asyncThunks';
import { ICurrentPage, ISearchRecord, ISearchSlice } from './ISearch';

const myFaves: Array<IHit> = new localStoreService().getMyFavesHits();

export const initialState: ISearchSlice = {
  status: 'idle',
  localHits: [],
  results: {
    query: "",
    hits: null,
    page: 0,
  },
  records: [],
  currentSearchProps: { page: '0', type: Options.ANGULAR },
  apiCurrentPage: [
    { page: 0, type: Options.ANGULAR },
    { page: 0, type: Options.REACT },
    { page: 0, type: Options.VUE },
  ],
  newsType: null
};

export const searchSlice = createSlice({
  name: 'finder',
  initialState,

  //Actions
  reducers: {
    setCurrentSearchProps: (state, action: PayloadAction<ISearchRecord>) => {
      state.currentSearchProps = { page: action.payload.page, type: action.payload.type };
    },
    setApiCurrentPage: (state, action: PayloadAction<ICurrentPage>) => {
      const pages = state.apiCurrentPage
      const currentPage = pages.find(page => page.type === action.payload.type)
      if (currentPage) {
        currentPage.page = action.payload.page
      } else {
        pages.push(action.payload)
      }
      state.apiCurrentPage = pages;
    },
    setNewsType: (state, action: PayloadAction<Options>) => {
      state.newsType = action.payload
    },
    setLocalHits: (state, action: PayloadAction<Array<IHit>>) => {
      state.localHits = action.payload
    },
    addLocalHit: (state, action: PayloadAction<IHit>) => {
      state.localHits.push(action.payload)
    },
    removeLocalHit: (state, action: PayloadAction<IHit>) => {
      const hitIndex = state.localHits.findIndex(hit => hit.objectID === action.payload.objectID)
      state.localHits.splice(hitIndex, 1)
    },
    setApiHits: (state, action: PayloadAction<Array<IHit>>) => {
      state.results.hits = action.payload
    }
  },

  //async operations
  extraReducers: (builder) => {
    builder
      .addCase(searchAsync.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(searchAsync.fulfilled, (state, action) => {
        const prev = state.results.hits ? state.results.hits : []
        const next = action.payload.hits ? action.payload.hits.map(hit => {
          hit.isInMyFaves = myFaves.find(fave => fave.objectID === hit.objectID) ? true : false;
          hit.query = action.payload.query
          hit.page = action.payload.page.toString()
          return hit
        }) : []

        const currentPage = state.apiCurrentPage.find(page => page.type === state.newsType)
        if (prev.filter(hit => hit.query === currentPage?.type && hit.page === currentPage?.page.toString()).length === 0) {
          state.records.push(state.currentSearchProps)
          state.results.hits = [...prev, ...next]
          state.currentSearchProps = initialState.currentSearchProps;
        }

        state.status = 'idle';
      })
      .addCase(searchAsync.rejected, (state) => {
        state.currentSearchProps = initialState.currentSearchProps;
        state.status = 'failed';
      })
  },
});

//Actions
export const { setCurrentSearchProps, setApiCurrentPage, setNewsType, setLocalHits, addLocalHit, removeLocalHit, setApiHits } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.finder;

export default searchSlice.reducer;
