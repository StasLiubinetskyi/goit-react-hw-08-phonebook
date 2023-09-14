import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from './contactActions';

const handlePendingAddContact = state => {
  state.isLoading = true;
  state.error = '';
};

const handleFulfilledFetchContact = (state, { payload }) => {
  state.items = payload;
  state.isLoading = false;
};

const handleFulfilledAddContact = (state, { payload }) => {
  state.items.push(payload);
  state.isLoading = false;
};

const handleFulfilledDeleteContact = (state, { payload }) => {
  state.items = state.items.filter(({ name }) => name !== payload.name);
};

const handleFulfilledEditContact = (state, { payload }) => {
  state.items = state.items.map(el =>
    el.id === payload.id ? { ...payload } : el
  );
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,

  reducers: {
    filter: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(addContact.fulfilled, handleFulfilledAddContact)
      .addCase(fetchContacts.fulfilled, handleFulfilledFetchContact)
      .addCase(deleteContact.fulfilled, handleFulfilledDeleteContact)
      .addCase(editContact.fulfilled, handleFulfilledEditContact)
      .addMatcher(
        isAnyOf(addContact.pending, fetchContacts.pending),
        handlePendingAddContact
      );
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { filter } = contactsSlice.actions;
