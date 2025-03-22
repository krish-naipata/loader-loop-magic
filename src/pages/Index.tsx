
import React, { useState } from "react";
import DataAnalysisLoader from "@/components/DataAnalysisLoader";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleStartLoading = () => {
    setIsLoading(true);
    
    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 8000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark-bg text-dark-text dark p-4">
      <div className="max-w-xl w-full glass-effect rounded-xl p-8 text-center">
        <h1 className="text-3xl font-semibold mb-1 tracking-tight">Data Analysis</h1>
        <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto my-4 rounded-full"></div>
        <p className="text-dark-muted mb-8 max-w-md mx-auto">
          Upload your documents and let our advanced system analyze and extract the most important information for you.
        </p>
        
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-center p-8 border-2 border-dashed border-dark-surface rounded-lg cursor-pointer hover:bg-dark-surface/30 transition-all duration-300">
            <div className="text-center">
              <svg className="w-10 h-10 mx-auto text-dark-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="mt-2 text-sm text-dark-muted">Drag and drop your files here, or click to browse</p>
            </div>
          </div>
          
          <Button
            onClick={handleStartLoading}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg p-3 font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Analyze Documents
          </Button>
        </div>
      </div>
      
      {isLoading && <DataAnalysisLoader />}
    </div>
  );
};

export default Index;
