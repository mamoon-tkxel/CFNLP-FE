import { UserAuth } from "@/constants/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
  userInfo: UserAuth | null;
  isAuthenticated: boolean;
}

const initialState: LoginState = {
  userInfo: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<UserAuth | null>) => {
      state.userInfo = action.payload;
    },
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    resetAuthUser: (state) => {
      state.userInfo = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, setAuthenticated, resetAuthUser } =
  authSlice.actions;

export default authSlice.reducer;
