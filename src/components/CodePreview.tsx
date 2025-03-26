
import React, { useState } from 'react';
import { CheckIcon, CopyIcon } from 'lucide-react';

interface CodePreviewProps {
  css: string;
  html: string;
}

const CodePreview: React.FC<CodePreviewProps> = ({ css, html }) => {
  const [activeTab, setActiveTab] = useState<'css' | 'html'>('css');
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    const textToCopy = activeTab === 'css' ? css : html;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-sand-200 bg-white shadow-subtle h-full flex flex-col">
      <div className="flex border-b border-sand-200">
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'css' 
              ? 'bg-sand-100 text-charcoal-950 border-b-2 border-charcoal-950' 
              : 'text-charcoal-600 hover:bg-sand-50'
          }`}
          onClick={() => setActiveTab('css')}
        >
          CSS
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'html' 
              ? 'bg-sand-100 text-charcoal-950 border-b-2 border-charcoal-950' 
              : 'text-charcoal-600 hover:bg-sand-50'
          }`}
          onClick={() => setActiveTab('html')}
        >
          HTML
        </button>
        <div className="ml-auto flex items-center pr-2">
          <button
            className="p-2 rounded-md text-charcoal-600 hover:text-charcoal-950 hover:bg-sand-50 transition-all-200"
            onClick={handleCopy}
            title="Copy to clipboard"
          >
            {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
          </button>
        </div>
      </div>
      <div className="overflow-auto flex-1 p-4 bg-charcoal-950 text-sand-100 font-mono text-sm">
        <pre className="whitespace-pre-wrap">
          {activeTab === 'css' ? css : html}
        </pre>
      </div>
    </div>
  );
};

export default CodePreview;
