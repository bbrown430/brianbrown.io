import { ThemeProvider } from "@/components/theme-provider";
import { PosterCard } from "./components/poster-card";
import { KindleCard } from "./components/kindle-card";
import { Toaster } from "@/components/ui/sonner";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import LandingTitle from "./components/landing-title";

// Component to wrap animated routes
function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // optional: scroll to top on route change
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20, scale: .5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 1.5 }}
              transition={{ duration: 0.4 }}
            >
              <LandingTitle />
            </motion.div>
          }
        />
        <Route
          path="/plexposter"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20, scale: .75 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: .5 }}
              transition={{ duration: 0.4 }}
            >
              <PosterCard />
            </motion.div>
          }
        />
        <Route
          path="/kindle"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20, scale: .75 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: .5 }}
              transition={{ duration: 0.4 }}
            >
              <KindleCard />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="relative flex items-center justify-center min-h-svh p-4 bg-gradient-radial from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 -z-10" />
          <AnimatedRoutes />
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
