import { configureStore } from "@reduxjs/toolkit";

import ArticleSlice from "./slice/Article/ArticleSlice";

import NewsSlice from "./slice/News/NewsSlice";

export const store = configureStore({
  reducer: {
    news: NewsSlice,
    article: ArticleSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
