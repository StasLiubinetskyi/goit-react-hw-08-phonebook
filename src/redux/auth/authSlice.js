import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { login, logout, refreshUser, register } from './authActions';

const handlePending = state => {
  state.error = '';
};

const handlePendingRefresh = state => {
  state.error = '';
  state.isRefreshing = true;
};

const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const handleFulfilledRefresh = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleFulfilledLogout = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
};

const handleRejectedRefresh = (state, { payload }) => {
  state.error = payload;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState.auth,

  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(logout.fulfilled, handleFulfilledLogout)
      .addCase(refreshUser.pending, handlePendingRefresh)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addCase(refreshUser.rejected, handleRejectedRefresh)
      .addMatcher(
        isAnyOf(register.pending, login.pending, refreshUser.pending),
        handlePending
      )
      .addMatcher(isAnyOf(register.fulfilled, login.fulfilled), handleFulfilled)
      .addMatcher(isAnyOf(register.rejected, login.rejected), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
