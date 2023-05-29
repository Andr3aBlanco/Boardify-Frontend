import React from 'react';
import { FaSearch } from 'react-icons/fa';

const MainPage = () => {
  return (
    <div>
      <div className="banner">
        {/* Banner content */}
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default MainPage;
