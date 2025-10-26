import React from "react";
import ErrorBoundary from "@src/app/providers/ErrorBoundary";
import ScrollToTop from "@src/shared/components/ScrollToTop";
import { Toaster } from "sonner";
import { AppRouter } from "./app/router";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ScrollToTop>
        <AppRouter />
      </ScrollToTop>
      <Toaster position="top-right" richColors  />
    </ErrorBoundary>  
  );
};

export default App;
