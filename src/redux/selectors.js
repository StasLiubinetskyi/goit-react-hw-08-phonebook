export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.contacts.filter;

export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
