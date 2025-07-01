
import React, { useState } from 'react';
import { Search, Mic } from 'lucide-react';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="relative">
      <div className="flex items-center bg-gray-700/80 backdrop-blur-sm rounded-full px-6 py-3 w-96 border border-gray-600">
        <Search className="text-gray-400 mr-3" size={20} />
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Enter Url"
          className="flex-1 bg-transparent text-red-400 placeholder-red-400 outline-none"
        />
        <Mic className="text-gray-400 ml-3 cursor-pointer hover:text-white" size={20} />
      </div>
    </div>
  );
};

export default SearchBar;
