import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import searchReducer from '../features/finder/searchSlice';

export const store = configureStore({
  reducer: {
    finder: searchReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
