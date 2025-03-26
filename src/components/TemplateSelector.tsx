
import React from 'react';
import { layoutTemplates, LayoutTemplate } from '../utils/layoutGenerators';
import { motion } from 'framer-motion';

interface TemplateSelectorProps {
  selectedTemplate: LayoutTemplate | null;
  onSelectTemplate: (template: LayoutTemplate) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ 
  selectedTemplate, 
  onSelectTemplate 
}) => {
  // Group templates by type
  const gridTemplates = layoutTemplates.filter(template => template.type === 'grid');
  const flexboxTemplates = layoutTemplates.filter(template => template.type === 'flexbox');

  return (
    <div className="py-6 px-6 animate-fade-in">
      <h2 className="text-2xl font-medium mb-6 text-charcoal-950">Select a Template</h2>
      
      {/* Grid Templates */}
      <div className="mb-8">
        <h3 className="text-xs uppercase tracking-wider text-charcoal-600 font-medium mb-3 ml-1">Grid</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gridTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              isSelected={selectedTemplate?.id === template.id}
              onSelect={() => onSelectTemplate(template)}
            />
          ))}
        </div>
      </div>
      
      {/* Flexbox Templates */}
      <div>
        <h3 className="text-xs uppercase tracking-wider text-charcoal-600 font-medium mb-3 ml-1">Flexbox</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {flexboxTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              isSelected={selectedTemplate?.id === template.id}
              onSelect={() => onSelectTemplate(template)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface TemplateCardProps {
  template: LayoutTemplate;
  isSelected: boolean;
  onSelect: () => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, isSelected, onSelect }) => {
  return (
    <motion.button
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className={`
        rounded-xl overflow-hidden border transition-all-200 bg-white
        ${isSelected 
          ? 'border-charcoal-950 shadow-md ring-2 ring-charcoal-950 ring-opacity-20' 
          : 'border-sand-200 hover:border-sand-300 shadow-subtle hover:shadow'}
      `}
    >
      <div className="aspect-[4/3] w-full p-4 flex items-center justify-center">
        <div className="w-full h-full">
          {template.previewComponent}
        </div>
      </div>
      <div className="px-4 py-3 border-t border-sand-200 text-left">
        <h3 className="font-medium text-charcoal-950">{template.name}</h3>
        <p className="text-xs text-charcoal-600 mt-1">{template.description}</p>
      </div>
    </motion.button>
  );
};

export default TemplateSelector;
