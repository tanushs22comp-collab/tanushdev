import React, { useState, useRef, useEffect } from "react";

const Navbar = ({ sectionRefs }) => {
  const navItems = [
    { label: "Home", ref: sectionRefs.heroRef },
    { label: "About", ref: sectionRefs.aboutRef },
    { label: "Projects", ref: sectionRefs.experienceRef },
    { label: "Skills", ref: sectionRefs.skillsRef },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);
  const [bubbleStyle, setBubbleStyle] = useState({});
  const itemRefs = useRef([]);

  useEffect(() => {
    if (hoverIndex !== null && itemRefs.current[hoverIndex]) {
      const el = itemRefs.current[hoverIndex];
      const rect = el.getBoundingClientRect();
      const parentRect = el.parentElement.getBoundingClientRect();

      setBubbleStyle({
        width: rect.width + 16,
        height: rect.height + 6,
        left: rect.left - parentRect.left + rect.width / 2,
        top: rect.top - parentRect.top + rect.height / 2,
        opacity: 1,
      });
    } else {
      setBubbleStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [hoverIndex]);

  const handleScroll = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-2 sm:px-0 w-full sm:w-auto">
      <nav className="relative flex justify-center">
        <ul
          className="relative flex justify-center flex-wrap sm:flex-nowrap gap-3 sm:gap-7 items-center
            py-2 px-2 sm:px-4 border border-white/10 backdrop-blur-3xl rounded-full shadow-lg
            transition-all duration-200 ease-in-out"
        >
          {navItems.map((item, index) => (
            <li
              key={item.label}
              ref={(el) => (itemRefs.current[index] = el)}
              className="relative z-10 px-2 py-1 text-center rounded-full cursor-pointer
                transition-colors duration-300 text-[14px] sm:text-[15px] text-neutral-100
                flex-1 sm:flex-none min-w-[60px] sm:min-w-[80px]"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => handleScroll(item.ref)}
            >
              <span className="relative z-20 hover:text-white/90 transition-colors">
                {item.label}
              </span>
            </li>
          ))}

          {/* Bubble */}
          <div
            className="absolute bg-white/20 rounded-full transition-all duration-400 ease-in-out"
            style={{
              width: bubbleStyle.width,
              height: bubbleStyle.height,
              left: bubbleStyle.left,
              top: bubbleStyle.top,
              transform: "translate(-50%, -50%)",
              opacity: bubbleStyle.opacity,
            }}
          ></div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
