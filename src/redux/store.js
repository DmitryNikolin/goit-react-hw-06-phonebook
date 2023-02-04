import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import contacts from './slices/contacts';
import filterContacts from './slices/filter';

const rootReducer = {
  contacts,
  filter: filterContacts,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
