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
  SeparatePreview,
  CardGridPreview,
  MasonryPreview,
  CenteredContentPreview,
  FixedHeaderPreview,
  TwoColumnPreview,
  TabsLayoutPreview,
  ZStackPreview,
  HierarchyPreview
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
      
    case 'card-grid':
      return {
        containerCSS: `
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${options.minWidth || '250px'}, 1fr));
  gap: ${options.gap || '1.5rem'};
  width: 100%;
}`,
        childrenCSS: `
.card {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: ${options.imageHeight || '200px'};
  object-fit: cover;
}

.card-content {
  padding: 1rem;
}`,
        html: `
<div class="card-grid">
  <div class="card">
    <img class="card-image" src="https://via.placeholder.com/300x200" alt="Card image">
    <div class="card-content">
      <h3>Card Title</h3>
      <p>Card description text goes here.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-image" src="https://via.placeholder.com/300x200" alt="Card image">
    <div class="card-content">
      <h3>Card Title</h3>
      <p>Card description text goes here.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-image" src="https://via.placeholder.com/300x200" alt="Card image">
    <div class="card-content">
      <h3>Card Title</h3>
      <p>Card description text goes here.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-image" src="https://via.placeholder.com/300x200" alt="Card image">
    <div class="card-content">
      <h3>Card Title</h3>
      <p>Card description text goes here.</p>
    </div>
  </div>
</div>`
      };
      
    case 'masonry':
      return {
        containerCSS: `
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(${options.columns || '3'}, 1fr);
  grid-auto-rows: ${options.rowHeight || '20px'};
  gap: ${options.gap || '1rem'};
}`,
        childrenCSS: `
.masonry-item {
  overflow: hidden;
  border-radius: 0.5rem;
}

.masonry-item:nth-child(1) { grid-row: span 8; }
.masonry-item:nth-child(2) { grid-row: span 10; }
.masonry-item:nth-child(3) { grid-row: span 6; }
.masonry-item:nth-child(4) { grid-row: span 9; }
.masonry-item:nth-child(5) { grid-row: span 7; }
.masonry-item:nth-child(6) { grid-row: span 5; }

.masonry-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Responsive adjustment */
@media (max-width: 768px) {
  .masonry-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .masonry-grid {
    grid-template-columns: 1fr;
  }
}`,
        html: `
<div class="masonry-grid">
  <div class="masonry-item">
    <img src="https://source.unsplash.com/random/1" alt="Masonry item">
  </div>
  <div class="masonry-item">
    <img src="https://source.unsplash.com/random/2" alt="Masonry item">
  </div>
  <div class="masonry-item">
    <img src="https://source.unsplash.com/random/3" alt="Masonry item">
  </div>
  <div class="masonry-item">
    <img src="https://source.unsplash.com/random/4" alt="Masonry item">
  </div>
  <div class="masonry-item">
    <img src="https://source.unsplash.com/random/5" alt="Masonry item">
  </div>
  <div class="masonry-item">
    <img src="https://source.unsplash.com/random/6" alt="Masonry item">
  </div>
</div>`
      };
      
    case 'two-column':
      return {
        containerCSS: `
.two-column {
  display: grid;
  grid-template-columns: ${options.leftWidth || '1fr'} ${options.rightWidth || '1fr'};
  gap: ${options.gap || '2rem'};
  width: 100%;
}`,
        childrenCSS: `
.column {
  /* Optional column styling */
}

/* Responsive adjustment */
@media (max-width: 768px) {
  .two-column {
    grid-template-columns: 1fr;
  }
}`,
        html: `
<div class="two-column">
  <div class="column">
    <h2>First Column</h2>
    <p>Content for the first column goes here.</p>
  </div>
  <div class="column">
    <h2>Second Column</h2>
    <p>Content for the second column goes here.</p>
  </div>
</div>`
      };
      
    case 'hierarchy':
      return {
        containerCSS: `
.hierarchy-layout {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  gap: ${options.gap || '1rem'};
  height: 100%;
}

.hierarchy-main {
  display: grid;
  grid-template-columns: ${options.sidebarWidth || '250px'} 1fr;
  gap: ${options.gap || '1rem'};
}`,
        childrenCSS: `
.hierarchy-header {
  padding: 1rem;
  background-color: #f8f8f8;
}

.hierarchy-sidebar {
  background-color: #f0f0f0;
  padding: 1rem;
}

.hierarchy-content {
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(${options.contentMinHeight || '150px'}, 1fr));
  gap: ${options.contentGap || '1rem'};
}

.content-section {
  background-color: #f8f8f8;
  padding: 1rem;
  border-radius: 0.25rem;
}

/* Responsive adjustment */
@media (max-width: 768px) {
  .hierarchy-main {
    grid-template-columns: 1fr;
  }
}`,
        html: `
<div class="hierarchy-layout">
  <header class="hierarchy-header">
    <h1>Page Title</h1>
  </header>
  <div class="hierarchy-main">
    <nav class="hierarchy-sidebar">
      <ul>
        <li>Navigation Item 1</li>
        <li>Navigation Item 2</li>
        <li>Navigation Item 3</li>
      </ul>
    </nav>
    <main class="hierarchy-content">
      <section class="content-section">
        <h2>Section One</h2>
        <p>Content for section one.</p>
      </section>
      <section class="content-section">
        <h2>Section Two</h2>
        <p>Content for section two.</p>
      </section>
    </main>
  </div>
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
      
    case 'centered-content':
      return {
        containerCSS: `
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${options.minHeight || '100vh'};
  width: 100%;
}`,
        childrenCSS: `
.centered-content {
  max-width: ${options.maxWidth || '500px'};
  width: 100%;
  padding: ${options.padding || '2rem'};
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: ${options.shadow ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none'};
}`,
        html: `
<div class="centered-container">
  <div class="centered-content">
    <h2>Centered Content</h2>
    <p>This content is centered both horizontally and vertically.</p>
  </div>
</div>`
      };
      
    case 'fixed-header':
      return {
        containerCSS: `
.fixed-header-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}`,
        childrenCSS: `
.fixed-header {
  position: sticky;
  top: 0;
  background-color: white;
  padding: 1rem;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.fixed-header-content {
  flex: 1;
  padding: 1rem;
}`,
        html: `
<div class="fixed-header-layout">
  <header class="fixed-header">
    <h1>Site Title</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>
  <main class="fixed-header-content">
    <h2>Main Content</h2>
    <p>Content goes here. Scroll down to see the fixed header in action.</p>
    <!-- Add more content to enable scrolling -->
    <div style="height: 1000px;"></div>
  </main>
</div>`
      };
      
    case 'tabs-layout':
      return {
        containerCSS: `
.tabs-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}`,
        childrenCSS: `
.tabs {
  display: flex;
  border-bottom: 1px solid #ddd;
}

.tab {
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  border-bottom: 2px solid transparent;
}

.tab.active {
  border-bottom-color: #333;
  font-weight: bold;
}

.tab-content {
  padding: 1.5rem;
  display: none;
}

.tab-content.active {
  display: block;
}`,
        html: `
<div class="tabs-container">
  <div class="tabs">
    <div class="tab active">Tab 1</div>
    <div class="tab">Tab 2</div>
    <div class="tab">Tab 3</div>
  </div>
  <div class="tab-content active">
    <h2>Tab 1 Content</h2>
    <p>This is the content for the first tab.</p>
  </div>
  <div class="tab-content">
    <h2>Tab 2 Content</h2>
    <p>This is the content for the second tab.</p>
  </div>
  <div class="tab-content">
    <h2>Tab 3 Content</h2>
    <p>This is the content for the third tab.</p>
  </div>
</div>
<script>
  // Basic JavaScript to handle tab switching
  document.querySelectorAll('.tab').forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs and contents
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding content
      tab.classList.add('active');
      document.querySelectorAll('.tab-content')[index].classList.add('active');
    });
  });
</script>`
      };
      
    case 'z-stack':
      return {
        containerCSS: `
.z-stack {
  position: relative;
  width: ${options.width || '100%'};
  height: ${options.height || 'auto'};
}`,
        childrenCSS: `
.z-stack-item {
  position: absolute;
  /* Items can be positioned individually */
}

.z-stack-item:nth-child(1) {
  z-index: 1;
  top: 0;
  left: 0;
}

.z-stack-item:nth-child(2) {
  z-index: 2;
  top: 20px;
  left: 20px;
}

.z-stack-item:nth-child(3) {
  z-index: 3;
  top: 40px;
  left: 40px;
}`,
        html: `
<div class="z-stack" style="height: 300px;">
  <div class="z-stack-item" style="width: 200px; height: 200px; background-color: #ffe0e0;">
    Bottom Layer
  </div>
  <div class="z-stack-item" style="width: 200px; height: 200px; background-color: #e0ffe0;">
    Middle Layer
  </div>
  <div class="z-stack-item" style="width: 200px; height: 200px; background-color: #e0e0ff;">
    Top Layer
  </div>
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
  {
    id: 'card-grid',
    name: 'Card Grid',
    type: 'grid',
    description: 'Responsive grid of card elements',
    previewComponent: <CardGridPreview />
  },
  {
    id: 'masonry',
    name: 'Masonry Grid',
    type: 'grid',
    description: 'Pinterest-style masonry grid layout',
    previewComponent: <MasonryPreview />
  },
  {
    id: 'two-column',
    name: 'Two Column',
    type: 'grid',
    description: 'Simple two column layout',
    previewComponent: <TwoColumnPreview />
  },
  {
    id: 'hierarchy',
    name: 'Hierarchy Layout',
    type: 'grid',
    description: 'Complex nested grid layout',
    previewComponent: <HierarchyPreview />
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
    name: 'Separate',
    type: 'flexbox',
    description: 'Space items apart (like in navigation bars)',
    previewComponent: <SeparatePreview />
  },
  {
    id: 'centered-content',
    name: 'Centered Content',
    type: 'flexbox',
    description: 'Content centered both horizontally and vertically',
    previewComponent: <CenteredContentPreview />
  },
  {
    id: 'fixed-header',
    name: 'Fixed Header',
    type: 'flexbox',
    description: 'Layout with a sticky/fixed header',
    previewComponent: <FixedHeaderPreview />
  },
  {
    id: 'tabs-layout',
    name: 'Tabs Layout',
    type: 'flexbox',
    description: 'Tabbed interface layout',
    previewComponent: <TabsLayoutPreview />
  },
  {
    id: 'z-stack',
    name: 'Z-Stack',
    type: 'flexbox',
    description: 'Layered elements with z-index positioning',
    previewComponent: <ZStackPreview />
  },
];
