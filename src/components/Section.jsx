import { useContext, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { SectionContext } from "../utils/SectionContext";

const Section = ({ section, isFirst = false, isLast = false, children, ...props }) => {
  const sectionContext = useContext(SectionContext);
  if (!sectionContext) return null;

  const { setActiveSection, setActiveSectionProgress } = sectionContext;

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: isFirst
      ? ["start start", "end center"]
      : isLast
      ? ["start center", "end end"]
      : ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value > 0 && value < 1) {
      setActiveSection(section.positionId);
      setActiveSectionProgress(value);
    }
  });

  return (
    <section {...props} ref={container}>
      {children || (
        <div className="w-full flex justify-center pt-20">
          <h1 className="text-6xl font-semibold">{section.title}</h1>
        </div>
      )}
    </section>
  );
};

export default Section;
