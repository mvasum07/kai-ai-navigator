
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const Header = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      // In a real implementation, this would open in the built-in browser
      window.open(url.startsWith('http') ? url : `https://${url}`, '_blank');
      setUrl('');
    }
  };

  return (
    <div className="w-full bg-gray-600 py-4 px-6">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="relative">
          <label htmlFor="url-input" className="block text-white text-sm font-medium mb-2">
            Enter Url:
          </label>
          <div className="relative">
            <input
              id="url-input"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter website URL..."
              className="w-full px-4 py-3 pr-12 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Search size={20} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Header;
