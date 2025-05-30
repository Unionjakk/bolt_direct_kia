
import React from 'react';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

const PrintButton = () => {
  const handlePrint = () => {
    // Expand all collapsible content before printing
    const collapsibleElements = document.querySelectorAll('[data-state="closed"]');
    collapsibleElements.forEach(element => {
      element.setAttribute('data-state', 'open');
    });

    // Add print class to body for additional styling if needed
    document.body.classList.add('printing');

    // Trigger print
    window.print();

    // Clean up after print
    setTimeout(() => {
      document.body.classList.remove('printing');
    }, 1000);
  };

  return (
    <Button 
      onClick={handlePrint}
      className="print-button no-print bg-kia-red hover:bg-kia-red-dark"
    >
      <Printer className="h-4 w-4 mr-2" />
      Print to PDF
    </Button>
  );
};

export default PrintButton;
