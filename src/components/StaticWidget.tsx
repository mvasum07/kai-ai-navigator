import React from 'react';

interface StaticWidgetProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const StaticWidget: React.FC<StaticWidgetProps> = ({
  children,
  className = "",
  title
}) => {
  return (
    <div className={`bg-[hsl(var(--widget-bg))] border border-[hsl(var(--widget-border))] rounded-xl p-6 shadow-lg ${className}`}>
      {title && (
        <h3 className="text-[hsl(var(--foreground))] font-semibold text-lg mb-4">{title}</h3>
      )}
      <div className="h-full">
        {React.cloneElement(children as React.ReactElement, {
          style: { width: '100%', height: '100%' }
        })}
      </div>
    </div>
  );
};

export default StaticWidget;