import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { darkTheme, lightTheme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
              </>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default function WrappedApp() {
  return (
    <Router basename="/NANDHA-portfolio">
      <App />
    </Router>
  );
}
