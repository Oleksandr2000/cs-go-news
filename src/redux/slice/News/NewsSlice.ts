import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { FetchNewsResponce, NewsSlicepRrops } from "./NewsSlice.props";

import axios from "../../../axios";

export const fetchNews = createAsyncThunk<FetchNewsResponce, { lang: string; sort: string }>(
  "news/fetchNews",
  async ({ lang, sort }) => {
    const { data } = await axios.get(
      `/counterstrike/news?sort=${sort}&from=null&to=null&lang=${lang}`,
    );
    return data;
  },
);

export const fetchMoreNews = createAsyncThunk<
  FetchNewsResponce,
  { lang: string; page: number; sort: string }
>("news/fetchMoreNews", async ({ lang, page, sort }) => {
  const { data } = await axios.get(
    `/counterstrike/news/page/${page}?sort=${sort}&from=null&to=null&lang=${lang}`,
  );
  return data;
});

const initialState: NewsSlicepRrops = {
  data: [],
  lang: "en",
  status: "loading",
  page: 2,
  sort: "publishAtDesc",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "loaded";
        state.page = 2;
        state.data = action.payload.latest.counterstrike;
      })
      .addCase(fetchNews.rejected, (state) => {
        state.status = "error";
      })
      .addCase(fetchMoreNews.pending, (state) => {
        state.status = "adding";
      })
      .addCase(fetchMoreNews.fulfilled, (state, action) => {
        state.status = "added";
        state.page += 1;
        state.data = [...state.data, ...action.payload.latest.counterstrike];
      });
  },
});

export const { setSort } = newsSlice.actions;

export default newsSlice.reducer;
