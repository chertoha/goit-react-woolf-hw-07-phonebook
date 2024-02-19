import { configureStore } from '@reduxjs/toolkit';
// import { contactsPersistedReducer } from './contacts/slice';
import contactsReducer, { contactsSlice } from './contacts/slice';
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   persistStore,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
// } from 'redux-persist';
import filterReducer from './filter/slice';

export const store = configureStore({
  reducer: {
    // contacts: contactsPersistedReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },

  // middleware: getDefaultMiddleware => [
  //   // ...getDefaultMiddleware({
  //   //   serializableCheck: {
  //   //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   //   },
  //   // }),
  //   // ...contactsSlice.middleware(),
  // ],
});

// export const persistor = persistStore(store);
