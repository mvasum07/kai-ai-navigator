
import React from 'react';
import { Linkedin, Youtube } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      color: 'bg-blue-600'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com',
      color: 'bg-red-600'
    },
    {
      name: 'Pinterest',
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.853 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.176-4.068-2.845 0-4.516 2.135-4.516 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.97-.527-2.297-1.155l-.624 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
        </svg>
      ),
      url: 'https://pinterest.com',
      color: 'bg-red-500'
    }
  ];

  return (
    <div>
      <h3 className="text-gray-700 font-bold text-lg mb-4">SOCIAL</h3>
      <div className="flex gap-3">
        {socialLinks.map(link => {
          const IconComponent = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} p-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg`}
              title={link.name}
            >
              <IconComponent className="text-white" size={24} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
