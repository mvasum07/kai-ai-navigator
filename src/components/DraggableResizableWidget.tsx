
import React, { useState, useRef, useEffect } from 'react';
import { GripVertical, Maximize2, Minimize2 } from 'lucide-react';

interface Position {
  x: number;
  y: number;
}

interface Size {
  width: number;
  height: number;
}

interface DraggableResizableWidgetProps {
  children: React.ReactNode;
  initialPosition: Position;
  initialSize: Size;
  minSize?: Size;
  title?: string;
}

const DraggableResizableWidget: React.FC<DraggableResizableWidgetProps> = ({
  children,
  initialPosition,
  initialSize,
  minSize = { width: 200, height: 150 },
  title
}) => {
  const [position, setPosition] = useState<Position>(initialPosition);
  const [size, setSize] = useState<Size>(initialSize);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 });
  const [isMinimized, setIsMinimized] = useState(false);
  
  const widgetRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent, action: 'drag' | 'resize') => {
    e.preventDefault();
    const rect = widgetRef.current?.getBoundingClientRect();
    
    if (action === 'drag') {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    } else {
      setIsResizing(true);
      setDragStart({
        x: e.clientX - (rect?.width || 0),
        y: e.clientY - (rect?.height || 0)
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = Math.max(0, Math.min(window.innerWidth - size.width, e.clientX - dragStart.x));
        const newY = Math.max(0, Math.min(window.innerHeight - size.height, e.clientY - dragStart.y));
        setPosition({ x: newX, y: newY });
      } else if (isResizing) {
        const newWidth = Math.max(minSize.width, e.clientX - dragStart.x);
        const newHeight = Math.max(minSize.height, e.clientY - dragStart.y);
        setSize({ width: newWidth, height: newHeight });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, dragStart, size, minSize]);

  return (
    <div
      ref={widgetRef}
      className="absolute bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 overflow-hidden"
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: isMinimized ? 'auto' : size.height,
        zIndex: isDragging || isResizing ? 1000 : 1,
      }}
    >
      {/* Widget Header */}
      <div
        className="flex items-center justify-between p-2 bg-white/10 cursor-move border-b border-white/10"
        onMouseDown={(e) => handleMouseDown(e, 'drag')}
      >
        <div className="flex items-center gap-2">
          <GripVertical size={16} className="text-white/70" />
          {title && <span className="text-white/90 text-sm font-medium">{title}</span>}
        </div>
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="text-white/70 hover:text-white p-1 rounded"
        >
          {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
        </button>
      </div>

      {/* Widget Content */}
      {!isMinimized && (
        <div className="relative h-full overflow-hidden">
          <div 
            className="p-4 h-full overflow-auto"
            style={{ height: size.height - 48 }} // Subtract header height
          >
            {children}
          </div>
          
          {/* Resize Handle */}
          <div
            className="absolute bottom-0 right-0 w-4 h-4 cursor-nw-resize bg-white/20 hover:bg-white/30 transition-all"
            onMouseDown={(e) => handleMouseDown(e, 'resize')}
          >
            <div className="absolute bottom-1 right-1 w-2 h-2 border-r-2 border-b-2 border-white/50"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DraggableResizableWidget;
