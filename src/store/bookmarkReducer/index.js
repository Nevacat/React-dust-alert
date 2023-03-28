import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookmark: [],
};

const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      state.bookmark = [...state.bookmark, {...action.payload.bookmark}]
    },
    removeBookmark: (state, action) => ({
      bookmark: state.bookmark.filter((item) => item.stationName !== action.payload.bookmark.stationName),
    }),
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
