import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserApi from "../api/UserApi";

export const register = createAsyncThunk(
  'user/register',
  async (payload) => {
    const data = await UserApi.register(payload);
      localStorage.setItem("user",JSON.stringify(data))
      return data;
  }
)
const UserSlice = createSlice({
  name: "user",
  initialState: {
    current: {} ,
    setting : {}
  },

  reducers: {},
  extraReducers:{
    [register.fulfilled] : (state,action) => {
      state.current = action.payload;
    }
  } 
});
const { reducer } = UserSlice;
export default reducer;
