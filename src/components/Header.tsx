
import React from 'react';
import { LayoutGrid } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 flex items-center border-b border-sand-200 bg-sand-100 sticky top-0 z-10">
      <div className="flex items-center gap-2 mr-auto">
        <LayoutGrid className="h-6 w-6 text-charcoal-950" />
        <h1 className="text-xl font-medium tracking-tight text-charcoal-950">CSS Layout Generator</h1>
      </div>
      
      <a 
        href="https://github.com/your-repo/css-layout-generator" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center px-4 py-2 rounded-full bg-charcoal-950 text-sand-100 text-sm hover:bg-charcoal-800 transition-all-200"
      >
        Star on GitHub
      </a>
    </header>
  );
};

export default Header;
