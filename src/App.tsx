import { ThemeProvider } from "@/components/theme-provider";
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import LandingTitle from "./pages/landing-page";
import PlayPiano from "./pages/projects/play-piano";
import SmartBlinds from "./pages/projects/smart-blinds";
import RoboticBallCollector from "./pages/projects/robotic-ball-collector";
import EndlessLibrary from "./pages/projects/endless-library";
import RepeatReceipts from "./pages/projects/repeat-receipts";
import Header from "./components/header";
import Footer from "./components/footer";
import ThreeDDesign from "./pages/projects/3d-design";
import NotFound from "./pages/not-found";
import ContactMe from "./pages/contact-me";

function AnimatedRoutes() {
  const location = useLocation();
  useDocumentTitle();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <div className="flex flex-col min-h-screen gap-12">
        <Header />
        <div className="flex flex-grow mt-32 justify-center items-center">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  className="max-w-7xl mx-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <LandingTitle />
                </motion.div>
              }
            />
            <Route
              path="/play-piano"
              element={
                <motion.div
                  className="max-w-7xl mx-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <PlayPiano />
                </motion.div>
              }
            />
            <Route
              path="/smart-blinds"
              element={
                <motion.div
                  className="max-w-7xl mx-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <SmartBlinds />
                </motion.div>
              }
            />
            <Route
              path="/robotic-ball-collector"
              element={
                <motion.div
                  className="max-w-7xl mx-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <RoboticBallCollector />
                </motion.div>
              }
            />
            <Route
              path="/endless-library"
              element={
                <motion.div
                  className="max-w-7xl mx-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <EndlessLibrary />
                </motion.div>
              }
            />
            <Route
              path="/repeat-receipts"
              element={
                <motion.div
                  className="max-w-7xl mx-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <RepeatReceipts />
                </motion.div>
              }
            />
            <Route
              path="/3d-design"
              element={
                <motion.div
                  className="max-w-7xl mx-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ThreeDDesign />
                </motion.div>
              }
            />
            <Route
              path="*"
              element={
                <motion.div
                  className="max-w-7xl mx-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <NotFound />
                </motion.div>
              }
            />
            <Route
              path="/contact-me"
              element={
                <motion.div
                  className="max-w-7xl mx-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ContactMe />
                </motion.div>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
