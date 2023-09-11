import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    editContact: (state, action) => {
      const { id, updatedContact } = action.payload;
      const contactIndex = state.items.findIndex(contact => contact.id === id);
      if (contactIndex !== -1) {
        state.items[contactIndex] = updatedContact;
      }
    },
    deleteContact: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter(contact => contact.id !== id);
    },
  },
});

export const { addContact, editContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
