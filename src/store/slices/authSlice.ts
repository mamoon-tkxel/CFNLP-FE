import { UserAuth } from "@/constants/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
  userInfo: UserAuth | null;
  isAuthenticated: boolean;
  accessToken: string | null;
}

interface LOGIN_SUCCESS_PAYLOAD {
  profile: UserAuth;
  token: string;
}

const initialState: LoginState = {
  userInfo: null,
  isAuthenticated: false,
  accessToken: null,
};

export const authSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<LOGIN_SUCCESS_PAYLOAD>) => {
      const { profile, token } = action.payload;
      state.userInfo = profile;
      state.isAuthenticated = true;
      state.accessToken = token;
    },
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    resetAuthUser: (state) => {
      state.userInfo = null;
      state.isAuthenticated = false;
      localStorage.clear();
    },
  },
});

export const { loginSuccess, setAuthenticated, resetAuthUser } =
  authSlice.actions;

export default authSlice.reducer;
