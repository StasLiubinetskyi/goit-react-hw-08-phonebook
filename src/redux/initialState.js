export const initialState = {
  auth: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  contacts: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
  },
};
