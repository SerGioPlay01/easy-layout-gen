
import React from 'react';

export const TwelveSpanGridPreview: React.FC = () => (
  <div className="grid grid-cols-12 gap-1 w-full h-full">
    <div className="col-span-12 bg-charcoal-800 h-6"></div>
    <div className="col-span-6 bg-charcoal-800 h-6"></div>
    <div className="col-span-4 bg-charcoal-800 h-6"></div>
    <div className="col-span-2 bg-charcoal-800 h-3"></div>
  </div>
);

export const ThreeByThreeGridPreview: React.FC = () => (
  <div className="grid grid-cols-3 grid-rows-3 gap-1 w-full h-full">
    {Array(9).fill(0).map((_, i) => (
      <div key={i} className="bg-charcoal-800"></div>
    ))}
  </div>
);

export const HolyGrailPreview: React.FC = () => (
  <div className="grid w-full h-full" style={{
    gridTemplateAreas: '"header header header" "nav content sidebar" "footer footer footer"',
    gridTemplateRows: '15% 1fr 15%',
    gridTemplateColumns: '20% 1fr 20%',
    gap: '2px'
  }}>
    <div style={{ gridArea: 'header' }} className="bg-charcoal-800"></div>
    <div style={{ gridArea: 'nav' }} className="bg-charcoal-800"></div>
    <div style={{ gridArea: 'content' }} className="bg-charcoal-800"></div>
    <div style={{ gridArea: 'sidebar' }} className="bg-charcoal-800"></div>
    <div style={{ gridArea: 'footer' }} className="bg-charcoal-800"></div>
  </div>
);

export const SidebarPreview: React.FC = () => (
  <div className="grid grid-cols-[30%_1fr] w-full h-full gap-1">
    <div className="bg-charcoal-800 h-full"></div>
    <div className="bg-charcoal-800 h-full"></div>
  </div>
);

export const HeaderMainFooterPreview: React.FC = () => (
  <div className="grid grid-rows-[20%_1fr_20%] w-full h-full gap-1">
    <div className="bg-charcoal-800"></div>
    <div className="bg-charcoal-800"></div>
    <div className="bg-charcoal-800"></div>
  </div>
);

export const RowPreview: React.FC = () => (
  <div className="flex gap-1 w-full h-full items-center">
    <div className="bg-charcoal-800 h-16 w-16 flex-shrink-0"></div>
    <div className="bg-charcoal-800 h-16 w-16 flex-shrink-0"></div>
    <div className="bg-charcoal-800 h-16 w-16 flex-shrink-0"></div>
  </div>
);

export const RowWrapPreview: React.FC = () => (
  <div className="flex flex-wrap gap-1 w-full h-full">
    {Array(7).fill(0).map((_, i) => (
      <div key={i} className="bg-charcoal-800 h-8 w-8"></div>
    ))}
  </div>
);

export const FillSpacePreview: React.FC = () => (
  <div className="flex gap-1 w-full h-full items-center">
    <div className="bg-charcoal-800 h-12 flex-1"></div>
    <div className="bg-charcoal-800 h-12 flex-1"></div>
    <div className="bg-charcoal-800 h-12 flex-1"></div>
  </div>
);

export const FillRemainingSpacePreview: React.FC = () => (
  <div className="flex gap-1 w-full h-full items-center">
    <div className="bg-charcoal-800 h-12 w-12"></div>
    <div className="bg-charcoal-800 h-12 w-12"></div>
    <div className="bg-charcoal-800 h-12 flex-1"></div>
  </div>
);

export const SeparatePreview: React.FC = () => (
  <div className="flex justify-between w-full h-full items-center">
    <div className="flex gap-1">
      <div className="bg-charcoal-800 h-8 w-8"></div>
      <div className="bg-charcoal-800 h-8 w-8"></div>
    </div>
    <div className="bg-charcoal-800 h-8 w-8"></div>
  </div>
);
