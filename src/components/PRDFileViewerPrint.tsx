
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface FileContent {
  filename: string;
  content: string;
  language: string;
  description: string;
  category: 'config' | 'component' | 'hook' | 'page' | 'integration';
  priority: 'critical' | 'important' | 'reference';
}

interface PRDFileViewerPrintProps {
  files: FileContent[];
  title: string;
  description: string;
}

const PRDFileViewerPrint = ({ files, title, description }: PRDFileViewerPrintProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'config': return 'bg-blue-100 text-blue-800';
      case 'component': return 'bg-green-100 text-green-800';
      case 'hook': return 'bg-purple-100 text-purple-800';
      case 'page': return 'bg-orange-100 text-orange-800';
      case 'integration': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-500';
      case 'important': return 'bg-yellow-500';
      case 'reference': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card className="mb-8 page-break-avoid">
      <CardHeader>
        <CardTitle className="text-2xl text-kia-charcoal">{title}</CardTitle>
        <p className="text-kia-gray-medium mt-2">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {files.map((file, index) => (
            <div key={file.filename} className="page-break-avoid">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border mb-2">
                <code className="font-mono text-sm bg-white px-2 py-1 rounded">
                  {file.filename}
                </code>
                <Badge className={getCategoryColor(file.category)}>
                  {file.category}
                </Badge>
                <div className={`w-3 h-3 rounded-full ${getPriorityColor(file.priority)}`} />
              </div>
              
              <div className="file-viewer-content">
                <div className="file-viewer-header">
                  <span className="text-sm text-gray-700">{file.description}</span>
                  <Badge variant="outline" className="ml-2 text-gray-600 border-gray-400">
                    {file.language}
                  </Badge>
                </div>
                <pre className="p-4 overflow-x-auto text-sm bg-gray-50 border-t">
                  <code>{file.content}</code>
                </pre>
              </div>
              
              {index < files.length - 1 && <div className="mt-6 border-b border-gray-200" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PRDFileViewerPrint;
