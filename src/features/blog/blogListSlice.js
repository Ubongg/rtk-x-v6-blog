import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:8000/blogs";

const initialState = {
  blogList: [],
  isLoading: true,
};

export const getBlogList = createAsyncThunk(
  "blogs/getBlogList",
  async (name, thunkAPI) => {
    try {
      const resp = await axios(url);
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogList = action.payload;
      })
      .addCase(getBlogList.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export default blogSlice.reducer;
