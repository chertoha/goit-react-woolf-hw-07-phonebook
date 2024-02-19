import { createSlice } from '@reduxjs/toolkit';
import { createContact, getContacts, removeContact } from './operations';

const initialState = {
  items: [],
  isLoading: {
    fetching: false,
    creating: false,
    removing: false,
  },
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState,

  extraReducers: builder => {
    builder
      .addCase(getContacts.pending, state => {
        state.isLoading.fetching = true;
      })
      .addCase(getContacts.rejected, (state, { payload }) => {
        state.isLoading.fetching = false;
        state.error = payload;
      })
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.error = null;
        state.isLoading.fetching = false;
      })
      .addCase(createContact.pending, state => {
        state.isLoading.creating = true;
      })
      .addCase(createContact.rejected, (state, { payload }) => {
        state.isLoading.creating = false;
        state.error = payload;
      })
      .addCase(createContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.error = null;
        state.isLoading.creating = false;
      })
      .addCase(removeContact.pending, state => {
        state.isLoading.removing = true;
      })
      .addCase(removeContact.rejected, (state, { payload }) => {
        state.isLoading.removing = false;
        state.error = payload;
      })
      .addCase(removeContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload.id);
        state.error = null;
        state.isLoading.removing = false;
      });
  },
});

export default contactsSlice.reducer;
