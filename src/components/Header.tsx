
import React from 'react';
import { Button } from '@/components/ui/button';
import { LayoutGrid } from 'lucide-react';
import { useViewToggle } from '../contexts/ViewToggleContext';

const Header = () => {
  const { viewMode, setViewMode } = useViewToggle();
  
  return (
    <header className="bg-white border-b border-sand-200 py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 mr-auto">
          <h1 className="text-xl font-bold text-charcoal-950">Layout Generator</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">Documentation</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
