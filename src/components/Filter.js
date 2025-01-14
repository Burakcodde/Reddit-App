import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../features/posts/postsSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.posts.category);

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <div className="filter category-select">
      <ul className="list-group">
        <li className={`list-group-item ${category === 'all' ? 'active' : ''}`} onClick={() => handleCategoryChange('all')}>
          <i className="fas fa-globe"></i> All
        </li>
        <li className={`list-group-item ${category === 'technology' ? 'active' : ''}`} onClick={() => handleCategoryChange('technology')}>
          <i className="fas fa-laptop"></i> Technology
        </li>
        <li className={`list-group-item ${category === 'news' ? 'active' : ''}`} onClick={() => handleCategoryChange('news')}>
          <i className="fas fa-newspaper"></i> News
        </li>
        <li className={`list-group-item ${category === 'funny' ? 'active' : ''}`} onClick={() => handleCategoryChange('funny')}>
          <i className="fas fa-laugh"></i> Funny
        </li>
        {/* Kendi kategorilerinizi buraya ekleyebilirsiniz */}
      </ul>
    </div>
  );
};

export default Filter;