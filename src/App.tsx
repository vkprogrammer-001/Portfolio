import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { scrollToSection } from "@/lib/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle initial hash navigation
const ScrollToHashSection = () => {
  useEffect(() => {
    // Wait for the DOM to be fully loaded
    window.addEventListener('load', () => {
      // Get the hash from the URL (without the #)
      const hash = window.location.hash.replace('#', '');
      
      // If there's a hash and it's not empty, scroll to that section
      if (hash) {
        // Small timeout to ensure all components are rendered
        setTimeout(() => {
          scrollToSection(hash);
        }, 500);
      }
    });
  }, []);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToHashSection />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
