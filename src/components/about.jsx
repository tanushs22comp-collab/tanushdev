import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { useScrollSection } from "../hooks/useScrollSection";

const AboutMeTerminal = () => {
  const [activeTab, setActiveTab] = useState("python");
  const [typedLines, setTypedLines] = useState({
    python: ["", "", "", ""],
    javascript: ["", "", "", ""],
  });
  const [currentLine, setCurrentLine] = useState({ python: 0, javascript: 0 });
  const [currentChar, setCurrentChar] = useState({ python: 0, javascript: 0 });
  const [isTyping, setIsTyping] = useState({ python: false, javascript: false });
  const { ref, isVisible } = useScrollSection();

  const codeLines = useMemo(
    () => ({
      python: [
        'print("Hello, I\'m Tanush Shyam")',
        'print("Data Analyst | Software Developer | AI/ML Enthusiast")',
        'print("WhoAmI() => Developer | Problem Solver | Tech Explorer")',
        'print("Anime Fan | Football Player | Tech Explorer")',
      ],
      javascript: [
        'console.log("Hello, I\'m Tanush Shyam");',
        'console.log("Data Analyst | Software Developer | AI/ML Enthusiast");',
        'console.log("WhoAmI() => Developer | Problem Solver | Tech Explorer");',
        'console.log("Anime Fan | Football Player | Tech Explorer");',
      ],
    }),
    []
  );

  const typeLine = useCallback(
    (language) => {
      const line = codeLines[language][currentLine[language]];
      if (currentChar[language] <= line.length) {
        setTypedLines((prev) => ({
          ...prev,
          [language]: prev[language].map((l, idx) =>
            idx === currentLine[language] ? line.slice(0, currentChar[language]) : l
          ),
        }));
        setCurrentChar((prev) => ({ ...prev, [language]: prev[language] + 1 }));
      } else {
        if (currentLine[language] < codeLines[language].length - 1) {
          setCurrentLine((prev) => ({ ...prev, [language]: prev[language] + 1 }));
          setCurrentChar((prev) => ({ ...prev, [language]: 0 }));
        } else {
          setIsTyping((prev) => ({ ...prev, [language]: false }));
        }
      }
    },
    [codeLines, currentLine, currentChar]
  );

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setIsTyping({ python: true, javascript: true }), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  useEffect(() => {
    if (isTyping[activeTab]) {
      const timer = setTimeout(() => typeLine(activeTab), 50);
      return () => clearTimeout(timer);
    }
  }, [activeTab, isTyping, typeLine]);

  return (
    <section className="pt-10 mx-auto flex flex-col items-center px-4 md:px-0 md:pt-20 z-50 w-full">
      {/* Container wraps both header and terminal */}
      <div className="w-full max-w-[1000px] sm:max-w-[90%] md:max-w-[800px] lg:max-w-[1000px]">
        {/* About Header aligned to terminal */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl font-light text-neutral-300 mb-3 tracking-widest"
        >
          About
        </motion.p>

        {/* Terminal Container */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-black/40 backdrop-blur-lg rounded-xl shadow-lg w-full h-[400px] sm:h-[450px] md:h-[500px] flex flex-col p-4 md:p-6 overflow-y-auto"
        >
          {/* Tabs */}
          <div className="flex mb-4 justify-start flex-wrap">
            {["python", "javascript"].map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveTab(lang)}
                className={`mr-2 mb-2 px-3 sm:px-4 py-1 sm:py-2 rounded-t-md font-mono text-sm sm:text-base md:text-lg transition-all duration-300 ${
                  activeTab === lang
                    ? "text-green-400 drop-shadow-[0_0_10px_rgba(0,255,0,0.8)]"
                    : "text-gray-400"
                }`}
              >
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </button>
            ))}
          </div>

          {/* Terminal Window */}
          <div className="flex flex-col flex-1 overflow-y-auto p-2 text-[13px] sm:text-sm md:text-lg font-mono w-full">
            {["python", "javascript"].map((lang) => (
              <div
                key={lang}
                style={{ display: activeTab === lang ? "block" : "none" }}
              >
                {typedLines[lang].map((line, idx) => (
                  <div
                    key={idx}
                    className="flex text-gray-200 break-words"
                  >
                    <span className="text-green-400 w-10 sm:w-12 md:w-14 flex-shrink-0">&gt;&gt;</span>
                    <span className="flex-1 whitespace-pre-wrap">{line}&nbsp;</span>
                    {idx === currentLine[lang] && isTyping[lang] && (
                      <span className="animate-blink ml-2 text-green-400">|</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeTerminal;
