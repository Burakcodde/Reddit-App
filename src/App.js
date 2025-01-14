import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, setCategory } from './features/posts/postsSlice';
import PostCard from './features/posts/PostCard';
import PostDetail from './features/posts/PostDetail';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Filter from './components/Filter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { posts, status, error, category } = useSelector((state) => state.posts);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    dispatch(fetchPosts(category));
  }, [dispatch, category]);

  const handleSearch = (term) => {
    dispatch(fetchPosts(term));
  };

  return (
    <Router>
      <div id="root" className="container-fluid">
        <Header />
        <SearchBar onSearch={handleSearch} />
        <div className="row">
          <div className="col-md-3">
            <Filter />
          </div>
          <div className="col-md-9">
            <main>
              <Routes>
                <Route path="/" element={
                  <div>
                    {status === 'loading' && <div>Loading...</div>}
                    {error && <div>Error: {error}</div>}
                    {posts.map((post) => (
                      <PostCard key={post.id} post={post} />
                    ))}
                  </div>
                } />
                <Route path="/post/:id" element={<PostDetail />} />
              </Routes>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;