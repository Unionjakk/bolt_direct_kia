
import React from 'react';
import { Badge } from '@/components/ui/badge';

const PRDHeader = () => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-kia-charcoal mb-4">
        DirectKia Next.js Migration PRD
      </h1>
      <p className="text-xl text-kia-gray-medium max-w-3xl mx-auto leading-relaxed">
        Complete Product Requirements Document for migrating DirectKia from Vite/React to Next.js 
        to fix critical view-source SEO issues while preserving 100% functionality and design.
      </p>
      <div className="flex flex-wrap gap-2 justify-center mt-6">
        <Badge variant="destructive">CRITICAL: SEO BROKEN</Badge>
        <Badge className="bg-green-600">SOLUTION: Next.js SSR</Badge>
        <Badge variant="outline">ZERO FUNCTIONALITY LOSS</Badge>
      </div>
    </div>
  );
};

export default PRDHeader;
