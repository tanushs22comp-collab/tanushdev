import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Head from "./components/Head";
import AboutMeTerminal from "./components/about";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ScrollingBackground from "./components/ScrollingBackground";
import { SectionContext, useSectionContextValues } from "./utils/SectionContext";
import CustomCursor from "./components/cursor";
import bgImage from "./assets/11.jpeg";
import Scrollbar from "./components/Scrollbar";

const App = () => {
  const { values } = useSectionContextValues();
  const containerRef = useRef(null);

  // ✅ Define refs for sections
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);

  const handlePageScroll = () => {
    if (containerRef.current) {
      const el = containerRef.current;
      const progress = el.scrollTop / (el.scrollHeight - el.clientHeight);
      values.setActiveSectionProgress(progress);
      values.setActiveSection(0);
    }
  };

  return (
    <SectionContext.Provider value={values}>
      <div className="relative w-full min-h-screen text-white">
        <CustomCursor />

        {/* Background */}
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <img className="w-full h-full object-cover" src={bgImage} alt="Background" />
          <ScrollingBackground />
        </div>

        {/* Navbar */}
        <Navbar
          sectionRefs={{ heroRef, aboutRef, experienceRef, skillsRef }}
        />

        {/* Scrollable content */}
        <div
          ref={containerRef}
          onScroll={handlePageScroll}
          className="h-screen w-full overflow-y-scroll scrollbar-hide relative z-10"
        >
          {/* Hero */}
          <section ref={heroRef} className="h-screen flex items-center justify-center">
            <Head />
          </section>

          {/* About */}
          <section ref={aboutRef} className="h-screen flex items-center justify-center px-8">
            <AboutMeTerminal />
          </section>

          {/* Experience */}
          <section ref={experienceRef} className="h-screen flex items-start justify-center px-8">
            <Experience />
          </section>

          {/* Skills */}
          <section ref={skillsRef} className="flex items-center justify-center px-4 py-2">
            <Skills />
          </section>

          {/* Footer */}
          <Footer />
        </div>

        {/* Scrollbar */}
        <Scrollbar sections={[{ positionId: 0 }]} />
      </div>
    </SectionContext.Provider>
  );
};

export default App;
