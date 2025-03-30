
import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import TemplateSelector, { TemplateCard } from '../components/TemplateSelector';
import CodePreview from '../components/CodePreview';
import LayoutPreview from '../components/LayoutPreview';
import { getLayoutCode, layoutTemplates, LayoutTemplate, CSSLayout } from '../utils/layoutGenerators';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layout, SquareSplitVertical } from 'lucide-react';

const Index = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<LayoutTemplate | null>(null);
  const [layoutOptions, setLayoutOptions] = useState<Record<string, any>>({});
  const [layoutCode, setLayoutCode] = useState<CSSLayout>({
    containerCSS: '',
    childrenCSS: '',
    html: ''
  });
  const [templateType, setTemplateType] = useState<'grid' | 'modal'>('grid');
  
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
    }
  }, [selectedTemplate, layoutOptions]);
  
  // Format the complete CSS code
  const formattedCSS = layoutCode.containerCSS + '\n\n' + layoutCode.childrenCSS;
  
  // Function to handle template selection
  const handleSelectTemplate = (template: LayoutTemplate) => {
    setSelectedTemplate(template);
    
    // Reset options when template changes
    setLayoutOptions({});
  };

  // Group templates by type
  const gridTemplates = layoutTemplates.filter(template => template.type === 'grid');
  const flexboxTemplates = layoutTemplates.filter(template => template.type === 'flexbox');
  const modalTemplates = layoutTemplates.filter(template => template.type === 'modal');

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
          <div className="py-6 px-6 animate-fade-in">
            <h2 className="text-2xl font-medium mb-6 text-charcoal-950">Select a Template</h2>
            
            <Tabs defaultValue="grid" className="w-full" onValueChange={(value) => setTemplateType(value as 'grid' | 'modal')}>
              <TabsList className="mb-6">
                <TabsTrigger value="grid" className="flex items-center gap-2">
                  <Layout className="h-4 w-4" />
                  Grid & Flexbox Layouts
                </TabsTrigger>
                <TabsTrigger value="modal" className="flex items-center gap-2">
                  <SquareSplitVertical className="h-4 w-4" />
                  Modal/Dialog Layouts
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="grid" className="mt-0">
                <div className="mb-8">
                  <h3 className="text-xs uppercase tracking-wider text-charcoal-600 font-medium mb-3 ml-1">Grid</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {gridTemplates.map((template) => (
                      <TemplateCard
                        key={template.id}
                        template={template}
                        isSelected={false}
                        onSelect={() => handleSelectTemplate(template)}
                      />
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-charcoal-600 font-medium mb-3 ml-1">Flexbox</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {flexboxTemplates.map((template) => (
                      <TemplateCard
                        key={template.id}
                        template={template}
                        isSelected={false}
                        onSelect={() => handleSelectTemplate(template)}
                      />
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="modal" className="mt-0">
                <div className="mb-8">
                  <h3 className="text-xs uppercase tracking-wider text-charcoal-600 font-medium mb-3 ml-1">
                    Dialog/Modal Templates
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {modalTemplates.length > 0 ? (
                      modalTemplates.map((template) => (
                        <TemplateCard
                          key={template.id}
                          template={template}
                          isSelected={false}
                          onSelect={() => handleSelectTemplate(template)}
                        />
                      ))
                    ) : (
                      <div className="rounded-xl border border-sand-200 p-6 flex items-center justify-center aspect-[4/3] bg-white text-center">
                        <p className="text-charcoal-600">Modal templates will be added soon</p>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          <PreviewContent />
        )}
      </main>
    </div>
  );
};

export default Index;
