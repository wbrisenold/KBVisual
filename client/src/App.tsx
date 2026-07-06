import { useEffect } from "react";
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

function SiteRoutes() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleInternalLink = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as Element | null;
      const anchor = target?.closest("a[href]");

      if (!anchor) return;

      const link = anchor as HTMLAnchorElement;
      const url = new URL(link.href);
      const nextPath = `${url.pathname}${url.search}${url.hash}`;
      const isExternal = url.origin !== window.location.origin;
      const opensElsewhere = link.target && link.target !== "_self";

      if (isExternal || opensElsewhere || link.download || nextPath === location) {
        return;
      }

      event.preventDefault();

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const viewTransitionDocument = document as Document & {
        startViewTransition?: (callback: () => void) => void;
      };
      const updateRoute = () => setLocation(nextPath);

      if (!prefersReducedMotion && viewTransitionDocument.startViewTransition) {
        viewTransitionDocument.startViewTransition(updateRoute);
        return;
      }

      updateRoute();
    };

    document.addEventListener("click", handleInternalLink);

    return () => {
      document.removeEventListener("click", handleInternalLink);
    };
  }, [location, setLocation]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/portfolio/" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/about/" component={About} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/pricing/" component={Pricing} />
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
          <WouterRouter>
            <SiteRoutes />
          </WouterRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
