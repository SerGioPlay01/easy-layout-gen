
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import TemplateSelector from '../components/TemplateSelector';
import CodePreview from '../components/CodePreview';
import LayoutPreview from '../components/LayoutPreview';
import { getLayoutCode, layoutTemplates, LayoutTemplate, CSSLayout } from '../utils/layoutGenerators';
import { useViewToggle } from '../contexts/ViewToggleContext';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<LayoutTemplate | null>(null);
  const [layoutOptions, setLayoutOptions] = useState<Record<string, any>>({});
  const [layoutCode, setLayoutCode] = useState<CSSLayout>({
    containerCSS: '',
    childrenCSS: '',
    html: ''
  });
  const { viewMode } = useViewToggle();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Effect to update layout code when template or options change
  useEffect(() => {
    if (selectedTemplate) {
      const code = getLayoutCode(
        selectedTemplate.id, 
        selectedTemplate.type, 
        layoutOptions
      );
      setLayoutCode(code);
      
      // Show selection toast
      toast.success(`${selectedTemplate.name} template selected`, {
        position: 'bottom-right',
      });

      // Open dialog if in modal view
      if (viewMode === 'modal') {
        setIsDialogOpen(true);
      }
    }
  }, [selectedTemplate, layoutOptions, viewMode]);
  
  // Format the complete CSS code
  const formattedCSS = layoutCode.containerCSS + '\n\n' + layoutCode.childrenCSS;
  
  // Function to handle template selection
  const handleSelectTemplate = (template: LayoutTemplate) => {
    setSelectedTemplate(template);
    
    // Reset options when template changes
    setLayoutOptions({});
  };

  const PreviewContent = () => (
    <motion.div 
      className="py-6 px-6 grid grid-cols-1 lg:grid-cols-2 gap-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium text-charcoal-950">
            {selectedTemplate?.name}
          </h2>
          <button 
            onClick={() => setSelectedTemplate(null)}
            className="px-4 py-2 rounded-full text-sm bg-sand-200 hover:bg-sand-300 text-charcoal-800 transition-all-200"
          >
            Choose Another Template
          </button>
        </div>
        
        {/* Options UI would go here */}
        
        <CodePreview 
          css={formattedCSS} 
          html={layoutCode.html} 
        />
      </div>
      
      <div className="h-[500px]">
        <LayoutPreview 
          css={formattedCSS} 
          html={layoutCode.html} 
        />
      </div>
    </motion.div>
  );
  
  return (
    <div className="min-h-screen flex flex-col bg-sand-50">
      <Header />
      
      <main className="flex-1">
        {!selectedTemplate ? (
          <TemplateSelector 
            selectedTemplate={selectedTemplate}
            onSelectTemplate={handleSelectTemplate}
          />
        ) : (
          viewMode === 'grid' ? (
            <PreviewContent />
          ) : (
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogContent className="max-w-4xl">
                <PreviewContent />
              </DialogContent>
            </Dialog>
          )
        )}
      </main>
    </div>
  );
};

export default Index;
