import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

type UserState = {
  darkMode: boolean;
};

const slice = createSlice({
  name: 'preferences',
  initialState: {
    darkMode: true,
  } as unknown as UserState,
  reducers: {
    toggleMode: (state, {payload: {mode}}) => {
      state.darkMode = mode;
    },
  },
});

export const {toggleMode} =
  slice.actions;

export default slice.reducer;

export const selectMode = (state: RootState) => state.preferences.darkMode;