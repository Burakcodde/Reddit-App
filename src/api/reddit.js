// src/api/reddit.js
import axios from 'axios';

// Reddit'ten gönderileri çekme
export const fetchPostsFromReddit = async (subreddit) => {
  const response = await axios.get(`https://www.reddit.com/r/${subreddit}.json`);
  return response.data.data.children.map((post) => post.data);
};

// Popüler subreddit listesini çekme
export const fetchSubredditsFromReddit = async () => {
  const response = await axios.get('https://www.reddit.com/subreddits/popular.json');
  return response.data.data.children.map((subreddit) => subreddit.data);
};
