import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserApi from "../../api/UserApi";

export const register = createAsyncThunk(
  'user/register',
  async (payload) => {
    const data = await UserApi.register(payload);
      localStorage.setItem("user",JSON.stringify(data))
      return data;
  }
)
export const login = createAsyncThunk(
  'user/signin',
  async (payload) => {
    const data = await UserApi.login(payload);
      localStorage.setItem("data",JSON.stringify(data))
      return data;
  }
)
const UserSlice = createSlice({
  name: "user",
  initialState: {
    current:  {} ,
    setting : {}
  },

  reducers: {
    logout: (state) => {
      localStorage.removeItem("data");
      state.current = {}
    },
  },
  extraReducers:{
    [register.fulfilled] : (state,action) => {
      state.current = action.payload;
    },
    [login.fulfilled] : (state,action) => {
      state.current = action.payload;
    },
  } 
});
const {actions,reducer } = UserSlice;
export const {logout} = actions;
export default reducer;
