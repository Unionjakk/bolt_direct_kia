
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Badge } from '@/components/ui/badge';
import { Copy, Download, ChevronDown, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FileContent {
  filename: string;
  content: string;
  language: string;
  description: string;
  category: 'config' | 'component' | 'hook' | 'page' | 'integration';
  priority: 'critical' | 'important' | 'reference';
}

interface PRDFileViewerProps {
  files: FileContent[];
  title: string;
  description: string;
}

const PRDFileViewer = ({ files, title, description }: PRDFileViewerProps) => {
  const [openFiles, setOpenFiles] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  const toggleFile = (filename: string) => {
    const newOpenFiles = new Set(openFiles);
    if (newOpenFiles.has(filename)) {
      newOpenFiles.delete(filename);
    } else {
      newOpenFiles.add(filename);
    }
    setOpenFiles(newOpenFiles);
  };

  const copyToClipboard = async (content: string, filename: string) => {
    try {
      await navigator.clipboard.writeText(content);
      toast({
        title: "Copied to clipboard",
        description: `${filename} content copied successfully`,
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Failed to copy content to clipboard",
        variant: "destructive",
      });
    }
  };

  const downloadFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "File downloaded",
      description: `${filename} downloaded successfully`,
    });
  };

  const downloadAllAsZip = () => {
    // For simplicity, we'll create a text file with all content
    const allContent = files.map(file => 
      `// ===== ${file.filename} =====\n// ${file.description}\n\n${file.content}\n\n`
    ).join('\n');
    
    downloadFile(allContent, 'directkia-migration-files.txt');
  };

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
    <Card className="mb-8">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl text-kia-charcoal">{title}</CardTitle>
            <p className="text-kia-gray-medium mt-2">{description}</p>
          </div>
          <Button onClick={downloadAllAsZip} className="bg-kia-red hover:bg-kia-red-dark">
            <Download className="h-4 w-4 mr-2" />
            Download All Files
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {files.map((file) => (
            <Collapsible
              key={file.filename}
              open={openFiles.has(file.filename)}
              onOpenChange={() => toggleFile(file.filename)}
            >
              <CollapsibleTrigger asChild>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer border">
                  <div className="flex items-center gap-3">
                    {openFiles.has(file.filename) ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    <code className="font-mono text-sm bg-white px-2 py-1 rounded">
                      {file.filename}
                    </code>
                    <Badge className={getCategoryColor(file.category)}>
                      {file.category}
                    </Badge>
                    <div className={`w-3 h-3 rounded-full ${getPriorityColor(file.priority)}`} />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(file.content, file.filename);
                      }}
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        downloadFile(file.content, file.filename);
                      }}
                    >
                      <Download className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="mt-2 border rounded-lg bg-gray-900 text-gray-100">
                  <div className="flex justify-between items-center p-3 border-b border-gray-700">
                    <span className="text-sm text-gray-300">{file.description}</span>
                    <Badge variant="outline" className="text-gray-300 border-gray-600">
                      {file.language}
                    </Badge>
                  </div>
                  <pre className="p-4 overflow-x-auto text-sm">
                    <code>{file.content}</code>
                  </pre>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PRDFileViewer;
