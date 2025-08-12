import React from "react";
import Header from "./components/Header/Header";
import ScrollToEdgeButton from "./components/SrollNavigator/ScrollToEdgeButton";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import { PortfolioProvider } from "./context/PortfolioContext";

const App = () => {
  return (
    <PortfolioProvider>
      <div className="app">
        <Header />
        
        <main className="main-content">
          <Home />
          <Project />
          <Skills />
          <Experience />
          <Contact />
        </main>

        <ScrollToEdgeButton />
      </div>
    </PortfolioProvider>
  );
};

export default App;
