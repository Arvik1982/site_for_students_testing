import { createSlice } from '@reduxjs/toolkit';
import { DataElementType } from '../../types/Types';

const dataSlice = createSlice({
  name: 'data',

  initialState: {
    data: <DataElementType[]>[],
    questType: <string>'',
    questNumber: Number(localStorage.getItem('currentNumberString'))
      ? Number(localStorage.getItem('currentNumberString'))
      : 0,
  },

  reducers: {
    setData(state, action) {
      state.data = action.payload;
      localStorage.getItem('testData') === null ? localStorage.setItem('testData', JSON.stringify(action.payload)) : '';
      state.questType = state.data[0].type;
    },
    setNextNumber(state) {
      state.questNumber < state.data.length - 1 ? (state.questNumber = state.questNumber + 1) : (state.questNumber = 0);
      state.questType = state.data[state.questNumber].type;
      localStorage.setItem('currentNumberString', state.questNumber.toString());
    },
    setPrevNumber(state) {
      state.questNumber > 0 ? (state.questNumber = state.questNumber - 1) : '';
      state.questType = state.data[state.questNumber].type;
      localStorage.setItem('currentNumberString', state.questNumber.toString());
    },
    resetNumber(state, action) {
      state.questNumber = action.payload;
      localStorage.removeItem('currentNumberString');
    },

    updateData(state, action) {
      state.data = JSON.parse(localStorage.getItem('testData') || '');
      state.data.forEach((el) => {
        el._id === state.data[state.questNumber]._id ? (state.data[state.questNumber].userAnswer = action.payload) : '';
      });
      state.data.forEach((el) => {
        el._id === state.data[state.questNumber]._id ? (state.data[state.questNumber].isReady = true) : '';
      });
      localStorage.setItem('testData', JSON.stringify(state.data));
    },
  },
});
export const { setData, setNextNumber, resetNumber, updateData, setPrevNumber } = dataSlice.actions;
export default dataSlice.reducer;
