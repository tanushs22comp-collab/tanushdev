import { motion } from "framer-motion";

const ScrollingBackground = () => {
  const rows = [
    { text: "Programming: Python, C/C++, Java, HTML/CSS/JS, TypeScript • AI/ML: PyTorch, BERT, NLP, Scikit-learn, Pandas, NumPy, Data Preprocessing • Web/Backend: Flask, Django, REST APIs, Git, Docker, AWS Basics, SQL, NoSql, MongoDB • ", direction: 1 },
    { text: "Programming: Python, C/C++, Java, HTML/CSS/JS, TypeScript • AI/ML: PyTorch, BERT, NLP, Scikit-learn, Pandas, NumPy, Data Preprocessing • Web/Backend: Flask, Django, REST APIs, Git, Docker, AWS Basics, SQL, NoSql, MongoDB • ", direction: -1 },
    { text: "Programming: Python, C/C++, Java, HTML/CSS/JS, TypeScript • AI/ML: PyTorch, BERT, NLP, Scikit-learn, Pandas, NumPy, Data Preprocessing • Web/Backend: Flask, Django, REST APIs, Git, Docker, AWS Basics, SQL, NoSql, MongoDB • ", direction: 1 },
  ];

  const loopDuration = 20; // seconds
  const repeatCount = 10; // repeat each text 10 times

  return (
    <div className="absolute inset-0 flex flex-col h-full overflow-hidden pointer-events-none -rotate-12 select-none">
      {rows.map((row, i) => (
        <motion.div
          key={i}
          className="relative whitespace-nowrap flex-1 flex items-center py-4"
          animate={{ x: row.direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: loopDuration, ease: "linear" }}
        >
          <span className="inline-block text-[4vw] leading-none font-semibold text-white/15">
            {Array(repeatCount).fill(row.text).join(" ")}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollingBackground;
