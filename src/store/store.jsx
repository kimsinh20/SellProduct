import languageReducer from "../slice/languageSlice/languageSlice";
import userReducer from "../slice/userSlice/UserSlice";
import cartReducer from "../slice/cartSlice/cartSlice"
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as rp from 'redux-persist'
import { combineReducers } from "redux";
const { configureStore } = require("@reduxjs/toolkit");
// redux persist
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const reducer = combineReducers({
  language: languageReducer ,
  user : userReducer,
  cart : cartReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
// const rootReducer = {
//   language: languageReducer ,
//   user : userReducer,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//   reducer: rootReducer,
// });
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [rp.FLUSH, rp.REHYDRATE, rp.PAUSE, rp.PERSIST, rp.PURGE, rp.REGISTER],
      },
    }),
});
export default store;
