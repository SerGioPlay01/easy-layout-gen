
import React, { useRef, useEffect } from 'react';

interface LayoutPreviewProps {
  css: string;
  html: string;
}

const LayoutPreview: React.FC<LayoutPreviewProps> = ({ css, html }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    const updateIframeContent = () => {
      if (iframeRef.current) {
        const iframeDoc = iframeRef.current.contentDocument;
        if (iframeDoc) {
          iframeDoc.open();
          iframeDoc.write(`
            <!DOCTYPE html>
            <html>
              <head>
                <style>
                  body {
                    margin: 0;
                    padding: 16px;
                    font-family: system-ui, -apple-system, sans-serif;
                    color: #333;
                  }
                  
                  * {
                    box-sizing: border-box;
                  }
                  
                  .header, .nav, .content, .sidebar, .footer,
                  .flex-item, .fill-item, .fixed-item, .span-12, .span-6, .span-4, .span-3, .span-2, .span-1,
                  .grid-item {
                    padding: 1rem;
                    background-color: #f2f2f2;
                    border: 1px solid #ddd;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  }
                  
                  ${css}
                </style>
              </head>
              <body>
                ${html}
              </body>
            </html>
          `);
          iframeDoc.close();
        }
      }
    };
    
    updateIframeContent();
  }, [css, html]);
  
  return (
    <div className="rounded-xl overflow-hidden border border-sand-200 bg-white shadow-subtle h-full flex flex-col">
      <div className="p-2 border-b border-sand-200 bg-sand-50 text-sm font-medium text-charcoal-800">
        Preview
      </div>
      <div className="flex-1 overflow-hidden">
        <iframe
          ref={iframeRef}
          title="Layout Preview"
          className="w-full h-full border-0"
          sandbox="allow-same-origin"
        />
      </div>
    </div>
  );
};

export default LayoutPreview;
