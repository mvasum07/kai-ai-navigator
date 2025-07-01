
import React from 'react';
import { MessageCircle } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { name: 'Discord', color: 'bg-indigo-600', icon: '💬' },
    { name: 'Twitter', color: 'bg-blue-500', icon: '🐦' },
    { name: 'Facebook', color: 'bg-blue-700', icon: '📘' },
    { name: 'Instagram', color: 'bg-pink-500', icon: '📷' },
  ];

  return (
    <div className="space-y-2">
      {socialLinks.map((link, index) => (
        <div
          key={index}
          className={`${link.color} p-3 rounded-lg cursor-pointer hover:opacity-90 transition-opacity`}
        >
          <div className="text-white text-center text-xl">{link.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
