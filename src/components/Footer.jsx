import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black/10 backdrop-blur-lg text-white">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-6xl mx-auto px-4 py-3">
        <h1 className="text-lg font-medium text-white">
          Tanush @2025 - Privacy Policy
        </h1>
        <h1 className="text-lg font-medium text-white mt-2 sm:mt-0">
          Mumbai, India
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
