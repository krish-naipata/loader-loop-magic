
import React, { useState, useEffect } from "react";

interface DataAnalysisLoaderProps {
  message?: string;
  showProgress?: boolean;
}

const DataAnalysisLoader: React.FC<DataAnalysisLoaderProps> = ({
  message = "Analyzing your data...",
  showProgress = true,
}) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState(message);
  const loadingMessages = [
    "Analyzing your data...",
    "Processing documents...",
    "Extracting information...",
    "Organizing results...",
    "Finalizing analysis...",
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 2;
        return newProgress > 100 ? 0 : newProgress;
      });
    }, 200);

    const textInterval = setInterval(() => {
      setLoadingText(
        loadingMessages[Math.floor(Math.random() * loadingMessages.length)]
      );
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-dark-bg/95">
      <div className="w-full max-w-md p-6 rounded-xl glass-effect animate-fade-in">
        <div className="relative mb-6">
          {/* Circle SVG Animation */}
          <div className="relative mx-auto w-48 h-48 flex items-center justify-center">
            {/* Outer circle animation */}
            <svg
              className="absolute inset-0 animate-rotate-gradient"
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9F7AEA" />
                  <stop offset="100%" stopColor="#4C51BF" />
                </linearGradient>
              </defs>
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2.5"
                strokeDasharray="283"
                strokeDashoffset={283 * (1 - (progress / 100))}
                className="transition-all duration-300 ease-out"
              />
            </svg>

            {/* Inner pulse */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-dark-accent/20 animate-pulse-ring" />
            </div>

            {/* Document Icon */}
            <div className="relative z-10 animate-float">
              <svg
                className="w-16 h-16 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <path className="animate-path-animation" 
                    strokeDasharray="1000" 
                    strokeDashoffset="1000" 
                    d="M8 13h8" />
                <path className="animate-path-animation" 
                    style={{ animationDelay: "0.3s" }} 
                    strokeDasharray="1000" 
                    strokeDashoffset="1000" 
                    d="M8 17h5" />
              </svg>
            </div>

            {/* Small floating dots */}
            <div className="absolute w-3 h-3 rounded-full bg-indigo-400 animate-float" 
                 style={{ top: '20%', left: '15%', animationDelay: '0.2s' }} />
            <div className="absolute w-2 h-2 rounded-full bg-purple-400 animate-float" 
                 style={{ top: '70%', left: '20%', animationDelay: '0.5s' }} />
            <div className="absolute w-4 h-4 rounded-full bg-blue-400 animate-float" 
                 style={{ top: '30%', right: '15%', animationDelay: '0.8s' }} />
            <div className="absolute w-2 h-2 rounded-full bg-indigo-300 animate-float" 
                 style={{ bottom: '25%', right: '20%', animationDelay: '1.1s' }} />
          </div>
        </div>

        {/* Text */}
        <div className="text-center">
          <h3 className="text-xl font-medium text-dark-text mb-2 transition-all duration-300">
            {loadingText}
          </h3>
          <p className="text-dark-muted text-sm">Please wait while we process your files</p>

          {/* Progress bar */}
          {showProgress && (
            <div className="mt-4 h-1 w-full bg-dark-surface/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataAnalysisLoader;
