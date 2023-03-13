import language from "../languageSlice/languageSlice";

const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  language: language ,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
