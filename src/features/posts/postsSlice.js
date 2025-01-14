import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Asenkron işlem: Gönderileri çekmek
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (subreddit) => {
  try {
    const response = await axios.get(`https://www.reddit.com/r/${subreddit}.json`);
    return response.data.data.children.map((child) => child.data);
  } catch (error) {
    throw new Error('Reddit API request failed');
  }
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
    category: 'popular', // Varsayılan kategori
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCategory } = postsSlice.actions;

export default postsSlice.reducer;