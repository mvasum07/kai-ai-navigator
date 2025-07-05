import React from 'react';
import { Button } from './ui/button';
import { Grid, RotateCcw, Maximize2 } from 'lucide-react';

interface AutoAdjustControlsProps {
  onAutoLayout: () => void;
  onResetPositions: () => void;
  onOptimizeLayout: () => void;
}

const AutoAdjustControls: React.FC<AutoAdjustControlsProps> = ({
  onAutoLayout,
  onResetPositions,
  onOptimizeLayout
}) => {
  return (
    <div className="fixed top-32 right-6 z-50 bg-background/90 backdrop-blur-sm rounded-lg p-3 border shadow-lg">
      <div className="flex flex-col gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onAutoLayout}
          className="text-xs flex items-center gap-2"
          title="Auto arrange widgets in grid"
        >
          <Grid size={14} />
          Auto Grid
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={onOptimizeLayout}
          className="text-xs flex items-center gap-2"
          title="Optimize widget sizes and positions"
        >
          <Maximize2 size={14} />
          Optimize
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={onResetPositions}
          className="text-xs flex items-center gap-2"
          title="Reset to default positions"
        >
          <RotateCcw size={14} />
          Reset
        </Button>
      </div>
    </div>
  );
};

export default AutoAdjustControls;