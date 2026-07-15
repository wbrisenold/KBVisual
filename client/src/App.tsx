import { useEffect, lazy, Suspense } from "react";
import { Router as WouterRouter, Switch, Route, useLocation } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";

const Portfolio = lazy(() => import("@/pages/Portfolio"));
const About = lazy(() => import("@/pages/About"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const NotFound = lazy(() => import("@/pages/not-found"));

function SiteRoutes() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const hash = window.location.hash.slice(1);

    if (hash) {
      const scrollToHash = () => {
        const target = document.getElementById(decodeURIComponent(hash));
        if (target) {
          target.scrollIntoView({ block: "start" });
          return true;
        }
        return false;
      };

      if (!scrollToHash()) {
        let retries = 0;
        const frame = requestAnimationFrame(function check() {
          if (!scrollToHash() && retries < 30) {
            retries++;
            requestAnimationFrame(check);
          }
        });
        return () => cancelAnimationFrame(frame);
      }
      return;
    }

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
      const currentPath = `${window.location.pathname}${window.location.search}`;
      const targetPath = `${url.pathname}${url.search}`;
      const nextPath = `${url.pathname}${url.search}${url.hash}`;
      const isExternal = url.origin !== window.location.origin;
      const opensElsewhere = link.target && link.target !== "_self";

      if (isExternal || opensElsewhere || link.download) {
        return;
      }

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isSamePageHash = Boolean(url.hash) && targetPath === currentPath;

      if (isSamePageHash) {
        event.preventDefault();

        const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
        if (target) {
          window.history.pushState(null, "", `${targetPath}${url.hash}`);
          target.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth",
            block: "start"
          });
        }

        return;
      }

      if (nextPath === location) {
        return;
      }

      event.preventDefault();

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
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-stone-950 focus:shadow-lg focus:outline-none">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
      <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center"><div className="h-1 w-24 animate-pulse rounded-full bg-yellow-700/40" /></div>}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/pricing" component={Pricing} />
        <Route component={NotFound} />
      </Switch>
      </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    let rafId = 0;
    let mounted = true;

    const raf = (time: number) => {
      lenis?.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    void import("lenis").then(({ default: Lenis }) => {
      if (!mounted) {
        return;
      }

      lenis = new Lenis({
        lerp: 0.08,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.05
      });
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      mounted = false;
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <WouterRouter base="/KBVisual">
          <SiteRoutes />
        </WouterRouter>
      </TooltipProvider>
    </HelmetProvider>
  );
}

export default App;
