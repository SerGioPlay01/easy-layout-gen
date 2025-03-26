import React from 'react';
import {
  TwelveSpanGridPreview,
  ThreeByThreeGridPreview,
  HolyGrailPreview,
  SidebarPreview,
  HeaderMainFooterPreview,
  RowPreview,
  RowWrapPreview,
  FillSpacePreview,
  FillRemainingSpacePreview,
  SeparatePreview
} from '../components/LayoutPreviews';

export interface LayoutTemplate {
  id: string;
  name: string;
  previewComponent: JSX.Element;
  description: string;
  type: 'grid' | 'flexbox';
}

export interface CSSLayout {
  containerCSS: string;
  childrenCSS: string;
  html: string;
}

export const generateGridLayout = (templateId: string, options: any = {}): CSSLayout => {
  switch (templateId) {
    case '12-span-grid':
      return {
        containerCSS: `
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${options.gap || '1rem'};
  width: 100%;
}`,
        childrenCSS: `
.span-12 { grid-column: span 12 / span 12; }
.span-6 { grid-column: span 6 / span 6; }
.span-4 { grid-column: span 4 / span 4; }
.span-3 { grid-column: span 3 / span 3; }
.span-2 { grid-column: span 2 / span 2; }
.span-1 { grid-column: span 1 / span 1; }`,
        html: `
<div class="container">
  <div class="span-12">Full width</div>
  <div class="span-6">Half width</div>
  <div class="span-4">One third</div>
  <div class="span-2">One sixth</div>
</div>`
      };
      
    case '3x3':
      return {
        containerCSS: `
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: ${options.gap || '1rem'};
  width: 100%;
}`,
        childrenCSS: `
.grid-item {
  min-height: 100px;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
}`,
        html: `
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
</div>`
      };
      
    case 'holy-grail':
      return {
        containerCSS: `
.holy-grail {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav content sidebar"
    "footer footer footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: ${options.navWidth || '200px'} 1fr ${options.sidebarWidth || '200px'};
  min-height: 100vh;
  gap: ${options.gap || '1rem'};
}`,
        childrenCSS: `
.header { grid-area: header; }
.nav { grid-area: nav; }
.content { grid-area: content; }
.sidebar { grid-area: sidebar; }
.footer { grid-area: footer; }

/* Responsive adjustment */
@media (max-width: 768px) {
  .holy-grail {
    grid-template-areas:
      "header"
      "nav"
      "content"
      "sidebar"
      "footer";
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto auto;
  }
}`,
        html: `
<div class="holy-grail">
  <header class="header">Header</header>
  <nav class="nav">Navigation</nav>
  <main class="content">Main Content</main>
  <aside class="sidebar">Sidebar</aside>
  <footer class="footer">Footer</footer>
</div>`
      };
      
    case 'sidebar':
      return {
        containerCSS: `
.sidebar-layout {
  display: grid;
  grid-template-columns: ${options.sidebarWidth || '250px'} 1fr;
  min-height: 100vh;
  gap: ${options.gap || '0'};
}`,
        childrenCSS: `
.sidebar {
  background-color: #f5f5f5;
  padding: 1rem;
}

.main-content {
  padding: 1rem;
}

/* Responsive adjustment */
@media (max-width: 768px) {
  .sidebar-layout {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    display: none;
  }
}`,
        html: `
<div class="sidebar-layout">
  <aside class="sidebar">Sidebar Content</aside>
  <main class="main-content">Main Content</main>
</div>`
      };
      
    case 'header-main-footer':
      return {
        containerCSS: `
.page-layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}`,
        childrenCSS: `
.header {
  padding: 1rem;
  background-color: #f5f5f5;
}

.main-content {
  padding: 1rem;
}

.footer {
  padding: 1rem;
  background-color: #f5f5f5;
}`,
        html: `
<div class="page-layout">
  <header class="header">Header</header>
  <main class="main-content">Main Content</main>
  <footer class="footer">Footer</footer>
</div>`
      };
      
    default:
      return {
        containerCSS: '',
        childrenCSS: '',
        html: ''
      };
  }
};

export const generateFlexboxLayout = (templateId: string, options: any = {}): CSSLayout => {
  switch (templateId) {
    case 'row':
      return {
        containerCSS: `
.flex-row {
  display: flex;
  gap: ${options.gap || '1rem'};
  flex-direction: row;
  ${options.wrap ? 'flex-wrap: wrap;' : ''}
}`,
        childrenCSS: `
.flex-item {
  ${options.growItems ? 'flex: 1;' : ''}
}`,
        html: `
<div class="flex-row">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>`
      };
      
    case 'row-wrap':
      return {
        containerCSS: `
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: ${options.gap || '1rem'};
}`,
        childrenCSS: `
.flex-item {
  flex: 0 0 ${options.itemWidth || 'calc(33.333% - 0.67rem)'};
  min-width: ${options.minWidth || '200px'};
}

/* Responsive adjustment */
@media (max-width: 768px) {
  .flex-item {
    flex: 0 0 ${options.mobileItemWidth || 'calc(50% - 0.5rem)'};
  }
}

@media (max-width: 480px) {
  .flex-item {
    flex: 0 0 100%;
  }
}`,
        html: `
<div class="flex-wrap">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
  <div class="flex-item">Item 4</div>
  <div class="flex-item">Item 5</div>
  <div class="flex-item">Item 6</div>
</div>`
      };
      
    case 'fill-space':
      return {
        containerCSS: `
.fill-space {
  display: flex;
  gap: ${options.gap || '1rem'};
  width: 100%;
}`,
        childrenCSS: `
.fill-item {
  flex: 1;
}`,
        html: `
<div class="fill-space">
  <div class="fill-item">Equal Width</div>
  <div class="fill-item">Equal Width</div>
  <div class="fill-item">Equal Width</div>
</div>`
      };
      
    case 'fill-remaining-space':
      return {
        containerCSS: `
.flex-container {
  display: flex;
  gap: ${options.gap || '1rem'};
  width: 100%;
}`,
        childrenCSS: `
.fixed-item {
  width: ${options.fixedWidth || '200px'};
}

.flex-item {
  flex: 1;
}`,
        html: `
<div class="flex-container">
  <div class="fixed-item">Fixed Width</div>
  <div class="fixed-item">Fixed Width</div>
  <div class="flex-item">Fills Remaining Space</div>
</div>`
      };
      
    case 'separate':
      return {
        containerCSS: `
.flex-separate {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}`,
        childrenCSS: `
.left-items {
  display: flex;
  gap: ${options.itemGap || '1rem'};
}

.right-item {
  /* Optional styling */
}`,
        html: `
<div class="flex-separate">
  <div class="left-items">
    <div>Left Item 1</div>
    <div>Left Item 2</div>
  </div>
  <div class="right-item">Right Item</div>
</div>`
      };
      
    default:
      return {
        containerCSS: '',
        childrenCSS: '',
        html: ''
      };
  }
};

export const getLayoutCode = (templateId: string, type: 'grid' | 'flexbox', options: any = {}): CSSLayout => {
  if (type === 'grid') {
    return generateGridLayout(templateId, options);
  } else {
    return generateFlexboxLayout(templateId, options);
  }
};

// Template data
export const layoutTemplates: LayoutTemplate[] = [
  // Grid layouts
  {
    id: '12-span-grid',
    name: '12 Span Grid',
    type: 'grid',
    description: 'A responsive 12-column grid system',
    previewComponent: <TwelveSpanGridPreview />
  },
  {
    id: '3x3',
    name: '3 × 3',
    type: 'grid',
    description: 'A simple 3×3 grid layout',
    previewComponent: <ThreeByThreeGridPreview />
  },
  {
    id: 'holy-grail',
    name: 'Holy Grail',
    type: 'grid',
    description: 'Classic header, footer, nav, main, sidebar layout',
    previewComponent: <HolyGrailPreview />
  },
  {
    id: 'sidebar',
    name: 'Sidebar',
    type: 'grid',
    description: 'Simple sidebar and main content layout',
    previewComponent: <SidebarPreview />
  },
  {
    id: 'header-main-footer',
    name: 'Header Main Footer',
    type: 'grid',
    description: 'Standard page layout with header and footer',
    previewComponent: <HeaderMainFooterPreview />
  },
  
  // Flexbox layouts
  {
    id: 'row',
    name: 'Row',
    type: 'flexbox',
    description: 'Simple flexbox row layout',
    previewComponent: <RowPreview />
  },
  {
    id: 'row-wrap',
    name: 'Row Wrap',
    type: 'flexbox',
    description: 'Flexbox row that wraps items to new lines',
    previewComponent: <RowWrapPreview />
  },
  {
    id: 'fill-space',
    name: 'Fill Space',
    type: 'flexbox',
    description: 'Items that equally distribute available space',
    previewComponent: <FillSpacePreview />
  },
  {
    id: 'fill-remaining-space',
    name: 'Fill Remaining Space',
    type: 'flexbox',
    description: 'One item fills all remaining space',
    previewComponent: <FillRemainingSpacePreview />
  },
  {
    id: 'separate',
    name: 'Seperate',
    type: 'flexbox',
    description: 'Space items apart (like in navigation bars)',
    previewComponent: <SeparatePreview />
  },
];
