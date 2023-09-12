import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    clearUser: state => {
      state.user = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
    setRefreshing: state => {
      state.isRefreshing = true;
    },
    clearRefreshing: state => {
      state.isRefreshing = false;
    },
  },
});

export const { setUser, clearUser, setRefreshing, clearRefreshing } =
  authSlice.actions;

export default authSlice.reducer;