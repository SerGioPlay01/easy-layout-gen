
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ViewMode = 'grid' | 'modal';

interface ViewToggleContextType {
  viewMode: ViewMode;
  toggleViewMode: () => void;
  setViewMode: (mode: ViewMode) => void;
}

const ViewToggleContext = createContext<ViewToggleContextType | undefined>(undefined);

export const ViewToggleProvider = ({ children }: { children: ReactNode }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'modal' : 'grid');
  };

  return (
    <ViewToggleContext.Provider value={{ viewMode, toggleViewMode, setViewMode }}>
      {children}
    </ViewToggleContext.Provider>
  );
};

export const useViewToggle = () => {
  const context = useContext(ViewToggleContext);
  if (context === undefined) {
    throw new Error('useViewToggle must be used within a ViewToggleProvider');
  }
  return context;
};
