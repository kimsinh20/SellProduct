import languageReducer from "../languageSlice/languageSlice";
import userReducer from "../userSlice/UserSlice";

const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  language: languageReducer ,
  user : userReducer,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
