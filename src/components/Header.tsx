
import React from 'react';
import { Button } from '@/components/ui/button';
import { LayoutGrid, SquareSplitVertical } from 'lucide-react';
import { useViewToggle } from '../contexts/ViewToggleContext';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const Header = () => {
  const { viewMode, setViewMode } = useViewToggle();
  
  return (
    <header className="bg-white border-b border-sand-200 py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 mr-auto">
          <h1 className="text-xl font-bold text-charcoal-950">Layout Generator</h1>
          
          <ToggleGroup type="single" value={viewMode} onValueChange={(value) => value && setViewMode(value as 'grid' | 'modal')}>
            <ToggleGroupItem value="grid" aria-label="Toggle grid view">
              <LayoutGrid className="h-4 w-4 mr-1" />
              Grid
            </ToggleGroupItem>
            <ToggleGroupItem value="modal" aria-label="Toggle modal view">
              <SquareSplitVertical className="h-4 w-4 mr-1" />
              Modal
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">Documentation</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
