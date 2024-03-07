import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      state.isLoggedIn = true;

      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    token: (state, action) => {
      localStorage.setItem("userToken", action.payload);
      Cookies.set("cookie", action.payload, { expires: 1 });
    },
    logout: (state) => {
      state.userInfo = null;
      state.isLoggedIn = false;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("userToken");
      Cookies.remove("cookie")
    },
  },
});

export const { setCredentials, logout, token } = authSlice.actions;

export default authSlice.reducer;
