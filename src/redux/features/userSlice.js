import { createSlice, AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  return fetch("http://localhost:3001/users").then((res) => res.json());
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
  },
  // extraReducers: {
  //   [getUsers.pending]: (state, action) => {
  //     state.loading = true;
  //   },
  //   [getUsers.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     state.users = action.payload;
  //   },
  //   [getUsers.rejected]: (state, action) => {
  //     state.loading = false;
  //   },
  // },
});

export default userSlice.reducer;
