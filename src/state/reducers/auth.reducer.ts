import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

type UserState = {
  user: any | null;
  token: string | null;
  tempAuth: boolean;

};

const slice = createSlice({
  name: 'userauth',
  initialState: {
    user: null,
    token: null,
    tempAuth: false

  } as unknown as UserState,
  reducers: {
    setCredentials: (state, {payload: {user, token}}) => {
      state.user = user;
      state.token = token;
    },
    login: (state, {payload: {tempAuth}}) => {
      state.tempAuth = true;
    },

    signOut: () => {},
  },
});

export const {setCredentials, login,signOut} =
  slice.actions;

export default slice.reducer;

export const selectUser = (state: RootState) => state.userAuth.user;
export const selectToken = (state: RootState) => state.userAuth.token;
export const selectTempAuth = (state: RootState) => state.userAuth.tempAuth;