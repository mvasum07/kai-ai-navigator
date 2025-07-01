
import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { 
      name: 'Discord', 
      color: 'bg-indigo-600 hover:bg-indigo-700', 
      icon: <MessageCircle size={20} className="text-white" />
    },
    { 
      name: 'Twitter', 
      color: 'bg-blue-500 hover:bg-blue-600', 
      icon: <div className="text-white text-lg font-bold">𝕏</div>
    },
    { 
      name: 'Facebook', 
      color: 'bg-blue-700 hover:bg-blue-800', 
      icon: <div className="text-white text-lg font-bold">f</div>
    },
    { 
      name: 'Instagram', 
      color: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500', 
      icon: <div className="text-white text-lg">📷</div>
    },
  ];

  return (
    <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
      <h3 className="text-white font-medium mb-4 text-center">Quick Links</h3>
      <div className="space-y-3">
        {socialLinks.map((link, index) => (
          <button
            key={index}
            className={`${link.color} w-full p-3 rounded-lg cursor-pointer transition-all duration-200 flex items-center justify-center hover:scale-105 shadow-lg`}
            title={link.name}
          >
            {link.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
