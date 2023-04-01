import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';


type filterType = {
  searchValue: string;
}

const initialState: filterType = {
  searchValue: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = filterSlice.actions;
export const selectFilter = (state: RootState) => state.filter;
export default filterSlice.reducer;
