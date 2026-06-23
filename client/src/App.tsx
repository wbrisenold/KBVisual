import { useEffect, useState } from "react";
import { Router as WouterRouter, Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import About from "@/pages/About";
import Pricing from "@/pages/Pricing";
import NotFound from "@/pages/not-found";

const getHashPath = () => {
  const hash = window.location.hash.replace(/^#/, "");
  return hash.startsWith("/") ? hash : "/";
};

const useHashLocation = (): [string, (to: string, options?: { replace?: boolean }) => void] => {
  const [location, setLocation] = useState(getHashPath());

  useEffect(() => {
    const handleHashChange = () => setLocation(getHashPath());
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (to: string, options?: { replace?: boolean }) => {
    const normalized = to.startsWith("/") ? to : `/${to}`;
    if (options?.replace) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${normalized}`);
      setLocation(normalized);
      return;
    }
    window.location.hash = normalized;
  };

  return [location, navigate];
};

function SiteRoutes() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/pricing" component={Pricing} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <WouterRouter hook={useHashLocation}>
            <SiteRoutes />
          </WouterRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
