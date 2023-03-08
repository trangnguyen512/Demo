import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

type CurrentUser = {
  email?: string;
  first_name?: string;
  last_name: string;
  username?: string;
  updated_at?: string;
  created_at?: string;
};

export interface IAuth {
  isAuthenticated?: boolean;
  currentAccount?: CurrentUser | null;
}
const initialState: IAuth = {
  isAuthenticated: false,
  currentAccount: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated: (state: any, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setCurrentUser: (state: any, action: PayloadAction<CurrentUser>) => {
      state.currentAccount = action.payload;
    },
    loginSuccess: (state: any, action: PayloadAction<CurrentUser>) => {
      state.isAuthenticated = true;
      state.currentAccount = action.payload;
    },
    loginFail: (state: any) => {
      state.isAuthenticated = false;
      state.currentAccount = null;
    },
  },
});
export const { setAuthenticated, setCurrentUser, loginSuccess, loginFail } =
  authSlice.actions;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
export const selectCurrentUser = (state: RootState) =>
  state.auth.currentAccount;

export default authSlice.reducer;
