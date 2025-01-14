import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.posts.find((post) => post.id === id));

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-detail container">
      <h1 className="post-detail-title">{post.title}</h1>
      {post.preview?.images[0]?.source?.url && (
        <img src={post.preview.images[0].source.url.replace(/&amp;/g, '&')} alt={post.title} className="post-detail-image" />
      )}
      {post.media && post.media.reddit_video && (
        <video controls className="post-detail-video">
          <source src={post.media.reddit_video.fallback_url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <p>{post.selftext || "No description available"}</p>
      <p className="post-detail-author">By {post.author}</p>
      <a href={`https://www.reddit.com${post.permalink}`} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
        View on Reddit
      </a>
    </div>
  );
};

export default PostDetail;