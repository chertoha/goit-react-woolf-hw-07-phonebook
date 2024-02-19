import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65d3847d522627d501090f4c.mockapi.io';

// export const ACTION_ROUTE = {
//   FETCH: 'allContacts',
//   CREATE: 'createContact',
//   REMOVE: 'removeContact',
// };

// const getActionRoute = actionType => actionType.split('/')[1];

export const getContacts = createAsyncThunk(
  'contacts/allContacts',
  // `contacts/${ACTION_ROUTE.FETCH}`,
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const createContact = createAsyncThunk(
  'contacts/createContact',
  // `contacts/${ACTION_ROUTE.CREATE}`,
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  // `contacts/${ACTION_ROUTE.REMOVE}`,
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
