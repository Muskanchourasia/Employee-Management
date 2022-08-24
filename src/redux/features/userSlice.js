import { createSlice } from "@reduxjs/toolkit";

export const UserReducer = createSlice({
  name: "user",
  initialState: {
    users: [],
    // loading: false,
  },
  reducers: {
    userData: (state, action) => {
      state.users = action.payload;
    },
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
export const { userData } = UserReducer.actions;
export default UserReducer.reducer;
