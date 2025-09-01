import React, { useState, useEffect } from "react";
import cursorImg from "../assets/cat.gif"; // adjust path to your gif

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Smooth follow effect
  useEffect(() => {
    const follow = () => {
      setSmoothPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      requestAnimationFrame(follow);
    };
    follow();
  }, [position]);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`body { cursor: none; }`}</style>

      {/* Custom cursor */}
      <img
        src={cursorImg}
        alt="cursor"
        style={{
          position: "fixed",
          top: smoothPos.y,
          left: smoothPos.x,
          transform: "translate(-50%, -50%)",
          width: "80px",
          height: "80px",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: 0.8, // semi-transparent like your snippet
          transition: "transform 0.05s ease-out",
        }}
      />
    </>
  );
};

export default CustomCursor;
