import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import { ArticleSlicepRrops, FetchArticleResponce } from "./ArticleSlice.props";

export const fetchOneNews = createAsyncThunk<FetchArticleResponce, { slug: string; lang: string }>(
  "news/fetchOneNews",
  async ({ slug, lang }) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_PROXY_SERVER}/article/${slug}?lang=${lang}`,
    );
    return data;
  },
);

const initialState: ArticleSlicepRrops = {
  article: null,
  loadingArticle: "loading",
  eventMatches: null,
  eventsData: null,
  players: null,
  teams: null,
  neighbor: null,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOneNews.pending, (state) => {
        state.loadingArticle = "loading";
      })
      .addCase(fetchOneNews.fulfilled, (state, action) => {
        state.loadingArticle = "loaded";
        state.article = action.payload.article;
        state.eventMatches = action.payload.eventMatches;
        state.eventsData = action.payload.eventsData;
        state.players = action.payload.players;
        state.teams = action.payload.teams;
        state.neighbor = action.payload.neighbor;
      })
      .addCase(fetchOneNews.rejected, (state) => {
        state.loadingArticle = "error";
      });
  },
});

export default articleSlice.reducer;
