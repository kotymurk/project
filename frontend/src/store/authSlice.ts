//хранилище токена
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  isAuth: boolean;
}

const initialToken = localStorage.getItem('token');

const initialState: AuthState = {
  token: initialToken,
  isAuth: !!initialToken,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ access_token: string }>,
    ) => {
      state.token = action.payload.access_token;
      state.isAuth = true;
      localStorage.setItem('token', action.payload.access_token);
    },
    logout: (state) => {
      state.token = null;
      state.isAuth = false;
      localStorage.removeItem('token');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
