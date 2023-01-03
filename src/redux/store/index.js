// import { createStore } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
// import { rootReducer } from 'redux/reducers/index';

// const store = createStore(rootReducer, devToolsEnhancer());
// export default store;

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contacts from 'redux/slices/contacts';
import filter from 'redux/slices/filter';

const rootReducer = combineReducers({
  contacts,
  filter,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
export default store;
