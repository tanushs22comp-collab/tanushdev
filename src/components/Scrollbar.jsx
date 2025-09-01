import { motion } from "framer-motion";
import React, { useContext } from "react";
import { SectionContext } from "../utils/SectionContext";

const Scrollbar = ({ sections }) => {
  const sectionContext = useContext(SectionContext);
  if (!sectionContext) return null;

  const { activeSection, activeSectionProgress } = sectionContext;

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-50">
      {sections.map(({ positionId }) => (
        <div
          key={positionId}
          className="w-2 bg-gray-600 rounded-full overflow-hidden relative"
          style={{ height: "40px" }}
        >
          {activeSection === positionId && (
            <motion.div
              className="w-full bg-yellow-400"
              style={{ height: `${activeSectionProgress * 100}%` }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Scrollbar;
