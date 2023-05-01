import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,

  isCheckTokenLoading: false,
  isCheckTokenSuccess: false,
  isCheckTokenError: false,

  errorMsg: "",
  isTokenExpired: false,
  user:
    localStorage.getItem("auth") !== "undefined"
      ? JSON.parse(localStorage.getItem("auth"))
      : null,
};

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await authService.userLogin(userData);

      if (data?.response?.status === 422) {
        return rejectWithValue(data?.response?.data?.message);
      }
      if (data?.response?.status === 401) {
        return rejectWithValue(data?.response?.data?.data?.error);
      }

      return data?.data;
    } catch (err) {
      return rejectWithValue(err?.response?.data?.message);
    }
  }
);

export const checkToken = createAsyncThunk(
  "auth/checkToken",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth?.token;
      console.log(thunkAPI.getState());

      return await authService.checkToken(token);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    },
    [userLogin.fulfilled]: (state, action) => {
      localStorage.setItem("auth", JSON.stringify(action.payload));
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    },
    [userLogin.rejected]: (state, action) => {
      localStorage.removeItem("auth");
      state.isLoading = false;
      state.user = null;
      state.isError = true;
      state.errorMsg = action.payload;
    },
    [checkToken.pending]: (state) => {
      state.isEditLoading = false;
      state.isEditError = false;
      state.isEditSuccess = false;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.isFirstTimeLoading = false;
      state.isFirstTimeError = false;
      state.isFirstTimeSuccess = false;
      state.isGetUserLoading = false;
      state.isGetUserError = false;
      state.isGetUserSuccess = false;
      state.isCheckTokenLoading = true;
      state.isCheckTokenSuccess = false;
      state.isCheckTokenError = false;
    },
    [checkToken.fulfilled]: (state, action) => {
      state.isCheckTokenLoading = false;
      state.isCheckTokenSuccess = true;
      state.isTokenExpired = !action.payload?.data?.status;
    },
    [checkToken.rejected]: (state, action) => {
      state.isCheckTokenLoading = false;
      state.isCheckTokenError = true;
      state.errorMsg = action.payload?.data;
      state.user = null;
    },
    [logout.fulfilled]: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.errorMsg = "";
      state.user = null;
    },
  },
});

export default authSlice.reducer;
