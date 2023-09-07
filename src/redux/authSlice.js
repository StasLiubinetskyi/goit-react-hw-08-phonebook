import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearUser: state => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, setToken, clearUser } = authSlice.actions;

export default authSlice.reducer;
