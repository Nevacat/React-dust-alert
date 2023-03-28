import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidoName: '서울',
  stationName: ''
};

const selectDataSlice = createSlice({
  name: 'selectData',
  initialState,
  reducers: {
    setSidoName: (state, action) => {
      state.sidoName = action.payload;
    },
    setStationName: (state, action) => {
      state.stationName = action.payload;
    },
  },
});

export const { setSidoName, setStationName } = selectDataSlice.actions;
export default selectDataSlice.reducer;
