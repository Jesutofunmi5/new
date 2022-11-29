/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setMessage } from "./message.slice";

import { AuthService } from "services";
import { formatErrorResponse } from "utils";
import { ZUMARIDI_USER_DATA } from "services/CONSTANTS";

const user = JSON.parse(localStorage.getItem(ZUMARIDI_USER_DATA) as string);

export const register = createAsyncThunk(
  "auth/register",
  async (
    {
      firstname,
      lastname,
      email,
      password
    }: { firstname: string; lastname: string; email: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await AuthService.register({ firstname, lastname, email, password });
      thunkAPI.dispatch(setMessage(response.data.MESSAGE));
      return response.data;
    } catch (error) {
      const message = formatErrorResponse(error);
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: { email: string; password: string }, thunkAPI) => {
    try {
      const { DATA } = await AuthService.signin({ email, password });
      return { userId: DATA.id, email: DATA.email };
    } catch (error) {
      console.log(error);
      const message = formatErrorResponse(error);
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const loginSuccess = createAsyncThunk("auth/loginSuccess", async (_, thunkAPI) => {
  try {
    const { DATA } = await AuthService.loginSuccess();
    return { user: DATA };
  } catch (error) {
    console.log(error);
    const message = formatErrorResponse(error);
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue(message);
  }
});

export const confirmAccount = createAsyncThunk(
  "auth/confirmAccount",
  async (code: string, thunkAPI) => {
    try {
      const { DATA } = await AuthService.confirmAccount(code);
      return { user: DATA };
    } catch (error) {
      console.log(error);
      const message = formatErrorResponse(error);
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
  window.location.reload();
});

const initialState = user
  ? { isLoggedIn: true, user, isLoading: false }
  : { isLoggedIn: false, user: null, isLoading: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // register actions
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    });
    builder.addCase(register.rejected, (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    });

    // login actions
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isLoading = false;
    });

    // login success actions
    builder.addCase(loginSuccess.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginSuccess.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.isLoading = false;
    });
    builder.addCase(loginSuccess.rejected, (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isLoading = false;
    });
  }
});

const { reducer } = authSlice;
export default reducer;
