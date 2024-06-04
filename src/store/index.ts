import { configureStore } from '@reduxjs/toolkit';
import allDataSlice from './slices/allDataSlice';

export default configureStore({
  reducer: {
    allDataReducer: allDataSlice,
  },
});
