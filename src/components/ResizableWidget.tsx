
import React, { useState, useRef, useEffect } from 'react';
import { Move, X } from 'lucide-react';
import { useDashboardTheme } from '../contexts/DashboardThemeContext';

interface ResizableWidgetProps {
  children: React.ReactNode;
  initialWidth?: number;
  initialHeight?: number;
  initialX?: number;
  initialY?: number;
  minWidth?: number;
  minHeight?: number;
  title?: string;
  widgetId: string;
  onRemove?: (widgetId: string) => void;
}

const ResizableWidget: React.FC<ResizableWidgetProps> = ({
  children,
  initialWidth = 300,
  initialHeight = 400,
  initialX = 0,
  initialY = 0,
  minWidth = 200,
  minHeight = 150,
  title = "Widget",
  widgetId,
  onRemove
}) => {
  const [dimensions, setDimensions] = useState({
    width: initialWidth,
    height: initialHeight,
    x: initialX,
    y: initialY
  });
  
  const [isResizing, setIsResizing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ 
    width: 0, 
    height: 0, 
    x: 0, 
    y: 0, 
    mouseX: 0, 
    mouseY: 0 
  });
  const [resizeDirection, setResizeDirection] = useState('');
  
  const widgetRef = useRef<HTMLDivElement>(null);
  const { currentScheme, widgetThemes } = useDashboardTheme();

  // Get custom theme for this widget or use default
  const widgetTheme = widgetThemes.find(t => t.widgetId === widgetId);
  const widgetGradient = widgetTheme ? widgetTheme.gradient : currentScheme.widgetDefault;

  const handleMouseDown = (e: React.MouseEvent, action: 'drag' | 'resize', direction?: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (action === 'drag') {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - dimensions.x,
        y: e.clientY - dimensions.y
      });
    } else if (action === 'resize' && direction) {
      setIsResizing(true);
      setResizeDirection(direction);
      setResizeStart({
        width: dimensions.width,
        height: dimensions.height,
        x: dimensions.x,
        y: dimensions.y,
        mouseX: e.clientX,
        mouseY: e.clientY
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setDimensions(prev => ({
          ...prev,
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y
        }));
      } else if (isResizing) {
        const deltaX = e.clientX - resizeStart.mouseX;
        const deltaY = e.clientY - resizeStart.mouseY;
        
        let newWidth = resizeStart.width;
        let newHeight = resizeStart.height;
        let newX = resizeStart.x;
        let newY = resizeStart.y;

        if (resizeDirection.includes('right')) {
          newWidth = Math.max(minWidth, resizeStart.width + deltaX);
        }
        if (resizeDirection.includes('left')) {
          newWidth = Math.max(minWidth, resizeStart.width - deltaX);
          if (newWidth > minWidth) {
            newX = resizeStart.x + deltaX;
          }
        }
        if (resizeDirection.includes('bottom')) {
          newHeight = Math.max(minHeight, resizeStart.height + deltaY);
        }
        if (resizeDirection.includes('top')) {
          newHeight = Math.max(minHeight, resizeStart.height - deltaY);
          if (newHeight > minHeight) {
            newY = resizeStart.y + deltaY;
          }
        }

        setDimensions({
          width: newWidth,
          height: newHeight,
          x: newX,
          y: newY
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
      setResizeDirection('');
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, dragStart, resizeStart, resizeDirection, minWidth, minHeight]);

  const resizeHandleStyle = "absolute bg-blue-500 opacity-0 hover:opacity-100 transition-opacity duration-200";

  return (
    <div
      ref={widgetRef}
      className="absolute border-2 border-transparent hover:border-blue-300 transition-all group"
      style={{
        width: dimensions.width,
        height: dimensions.height,
        left: dimensions.x,
        top: dimensions.y,
        zIndex: isDragging || isResizing ? 1000 : 1
      }}
    >
      {/* Controls */}
      <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        {onRemove && (
          <button
            onClick={() => onRemove(widgetId)}
            className="p-1 bg-red-600/80 hover:bg-red-600 rounded text-white transition-colors"
          >
            <X size={14} />
          </button>
        )}
        <div
          className="p-1 bg-black/20 rounded cursor-move"
          onMouseDown={(e) => handleMouseDown(e, 'drag')}
        >
          <Move size={16} className="text-white" />
        </div>
      </div>

      {/* Corner Resize Handles */}
      <div
        className={`${resizeHandleStyle} w-3 h-3 -top-1 -left-1 cursor-nw-resize group-hover:opacity-100`}
        onMouseDown={(e) => handleMouseDown(e, 'resize', 'top-left')}
      />
      <div
        className={`${resizeHandleStyle} w-3 h-3 -top-1 -right-1 cursor-ne-resize group-hover:opacity-100`}
        onMouseDown={(e) => handleMouseDown(e, 'resize', 'top-right')}
      />
      <div
        className={`${resizeHandleStyle} w-3 h-3 -bottom-1 -left-1 cursor-sw-resize group-hover:opacity-100`}
        onMouseDown={(e) => handleMouseDown(e, 'resize', 'bottom-left')}
      />
      <div
        className={`${resizeHandleStyle} w-3 h-3 -bottom-1 -right-1 cursor-se-resize group-hover:opacity-100`}
        onMouseDown={(e) => handleMouseDown(e, 'resize', 'bottom-right')}
      />

      {/* Middle Edge Resize Handles */}
      <div
        className={`${resizeHandleStyle} w-full h-1 -top-1 left-0 cursor-n-resize group-hover:opacity-100`}
        onMouseDown={(e) => handleMouseDown(e, 'resize', 'top')}
      />
      <div
        className={`${resizeHandleStyle} w-full h-1 -bottom-1 left-0 cursor-s-resize group-hover:opacity-100`}
        onMouseDown={(e) => handleMouseDown(e, 'resize', 'bottom')}
      />
      <div
        className={`${resizeHandleStyle} w-1 h-full -left-1 top-0 cursor-w-resize group-hover:opacity-100`}
        onMouseDown={(e) => handleMouseDown(e, 'resize', 'left')}
      />
      <div
        className={`${resizeHandleStyle} w-1 h-full -right-1 top-0 cursor-e-resize group-hover:opacity-100`}
        onMouseDown={(e) => handleMouseDown(e, 'resize', 'right')}
      />

      {/* Content */}
      <div 
        className="w-full h-full overflow-hidden rounded-xl shadow-lg relative border border-gray-700/50"
        style={{
          background: widgetGradient || 'rgba(31, 41, 55, 0.9)',
          backdropFilter: 'blur(8px)'
        }}
      >
        <div className="relative z-10 h-full">
          {React.cloneElement(children as React.ReactElement, {
            style: { width: '100%', height: '100%' }
          })}
        </div>
      </div>
    </div>
  );
};

export default ResizableWidget;
