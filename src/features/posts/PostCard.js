import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post, onClick }) => {
  // Daha yüksek çözünürlüklü resim URL'sini belirleyin
  const [imageUrl, setImageUrl] = useState(post.preview?.images[0]?.source?.url.replace(/&amp;/g, '&') || post.url);

  const handleImageError = () => {
    setImageUrl(null);
  };

  return (
    <div className="post-card card mb-4" onClick={onClick}>
      <Link to={`/post/${post.id}`} className="card-link">
        {imageUrl && (
          <img src={imageUrl} alt={post.title} className="card-img-top post-image" onError={handleImageError} />
        )}
        {post.media && post.media.reddit_video && (
          <video controls className="card-img-top post-video">
            <source src={post.media.reddit_video.fallback_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="card-body">
          <h3 className="card-title">{post.title}</h3>
          <p className="card-text">By {post.author}</p>
          <p className="card-text">{post.selftext || "No description available"}</p>
          <a href={`https://www.reddit.com${post.permalink}`} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View on Reddit
          </a>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;