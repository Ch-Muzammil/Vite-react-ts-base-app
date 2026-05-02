import type { FC } from "react";
import ErrorBoundary from "@/app/providers/ErrorBoundary";
import ScrollToTop from "@/shared/components/ScrollToTop";
import { Toaster } from "sonner";
import { AppRouter } from "@/app/router";

const App: FC = () => {
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
