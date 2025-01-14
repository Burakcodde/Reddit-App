// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './features/posts/postsSlice';
import subredditReducer from './features/subreddit/subredditSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    subreddit: subredditReducer,
  },
});

export default store;
