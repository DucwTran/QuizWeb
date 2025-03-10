import { createSlice } from "@reduxjs/toolkit";

export const loginReducer = createSlice({
  name: "isLogin",
  initialState: false,
  reducers: {
    stateLogin: (state) => !state,
  },
});

export const { stateLogin } = loginReducer.actions;
export default loginReducer.reducer;
