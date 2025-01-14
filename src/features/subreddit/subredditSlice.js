// src/features/subreddit/subredditSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSubredditsFromReddit } from '../../api/reddit';

// Asenkron işlem: Popüler subreddit'leri çekmek
export const fetchSubreddits = createAsyncThunk('subreddit/fetchSubreddits', async () => {
  return await fetchSubredditsFromReddit();
});

const subredditSlice = createSlice({
  name: 'subreddit',
  initialState: {
    subreddits: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubreddits.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSubreddits.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.subreddits = action.payload;
      })
      .addCase(fetchSubreddits.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default subredditSlice.reducer;
