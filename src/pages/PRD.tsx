
import React, { useEffect } from 'react';
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PRDFileViewer from '@/components/PRDFileViewer';
import PRDFileViewerPrint from '@/components/PRDFileViewerPrint';
import PrintButton from '@/components/PrintButton';
import PRDHeader from '@/components/prd/PRDHeader';
import PRDTaskDefinition from '@/components/prd/PRDTaskDefinition';
import PRDProblemStatement from '@/components/prd/PRDProblemStatement';
import PRDSiteAnalysis from '@/components/prd/PRDSiteAnalysis';
import PRDEdgeFunctionsDocumentation from '@/components/prd/PRDEdgeFunctionsDocumentation';
import PRDDatabaseSchema from '@/components/prd/PRDDatabaseSchema';
import PRDRevisedStagedMigration from '@/components/prd/PRDRevisedStagedMigration';
import PRDTechnicalDetails from '@/components/prd/PRDTechnicalDetails';
import PRDApiDocumentation from '@/components/prd/PRDApiDocumentation';
import PRDValidationChecklist from '@/components/prd/PRDValidationChecklist';
import PRDFrequentlyAskedQuestions from '@/components/prd/PRDFrequentlyAskedQuestions';
import PRDFinalNotes from '@/components/prd/PRDFinalNotes';
import { configFiles, supabaseFiles, componentFiles, hookFiles, pageFiles } from '@/data/prdFileData';

const PRD = () => {
  useEffect(() => {
    // Dynamically import print styles
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/src/styles/print.css';
    link.media = 'print';
    document.head.appendChild(link);

    return () => {
      // Cleanup
      document.head.removeChild(link);
    };
  }, []);

  const isPrintMode = typeof window !== 'undefined' && window.matchMedia('print').matches;

  return (
    <div className="min-h-screen font-inter bg-white">
      <SEOHead 
        fallbackTitle="Complete Next.js Migration PRD - DirectKia Technical Specification"
        fallbackDescription="Comprehensive Product Requirements Document for migrating DirectKia from Vite/React to Next.js with proper SSR and SEO. Complete technical blueprint for AI implementation."
      />
      
      <Header />
      <PrintButton />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          
          <PRDHeader />
          <PRDTaskDefinition />
          <PRDProblemStatement />
          <PRDSiteAnalysis />
          <PRDEdgeFunctionsDocumentation />
          <PRDTechnicalDetails />
          <PRDRevisedStagedMigration />

          {/* Downloadable Files Section */}
          {isPrintMode ? (
            <>
              <PRDFileViewerPrint
                files={configFiles}
                title="📁 Configuration Files"
                description="Essential configuration files that must be recreated exactly in Next.js"
              />

              <PRDFileViewerPrint
                files={supabaseFiles}
                title="🗄️ Supabase Integration Files"
                description="Database connection and type definition files"
              />

              <PRDFileViewerPrint
                files={componentFiles}
                title="🧩 Core Components (Copy Exactly)"
                description="Critical components that require zero changes in Next.js migration"
              />

              <PRDFileViewerPrint
                files={hookFiles}
                title="🪝 React Query Hooks (Convert to SSR)"
                description="Current hooks that need conversion to Next.js getServerSideProps"
              />

              <PRDFileViewerPrint
                files={pageFiles}
                title="📄 Example Pages"
                description="Reference pages showing current structure and SEO integration"
              />
            </>
          ) : (
            <>
              <PRDFileViewer
                files={configFiles}
                title="📁 Configuration Files"
                description="Essential configuration files that must be recreated exactly in Next.js"
              />

              <PRDFileViewer
                files={supabaseFiles}
                title="🗄️ Supabase Integration Files"
                description="Database connection and type definition files"
              />

              <PRDFileViewer
                files={componentFiles}
                title="🧩 Core Components (Copy Exactly)"
                description="Critical components that require zero changes in Next.js migration"
              />

              <PRDFileViewer
                files={hookFiles}
                title="🪝 React Query Hooks (Convert to SSR)"
                description="Current hooks that need conversion to Next.js getServerSideProps"
              />

              <PRDFileViewer
                files={pageFiles}
                title="📄 Example Pages"
                description="Reference pages showing current structure and SEO integration"
              />
            </>
          )}

          <PRDDatabaseSchema />
          <PRDApiDocumentation />
          <PRDValidationChecklist />
          <PRDFrequentlyAskedQuestions />
          <PRDFinalNotes />

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PRD;
