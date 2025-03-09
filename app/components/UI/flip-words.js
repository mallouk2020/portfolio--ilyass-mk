"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const FlipWords = ({ words, duration = 3000, className }) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false); // حالة لتتبع التمرير

  // دالة لتغيير الكلمة
  const startAnimation = () => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  };

  // استخدام useEffect لتتبع التمرير
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { // يمكنك تعديل هذه القيمة حسب الحاجة
        setIsScrolling(true);  // عند التمرير لأسفل، إيقاف المكون
      } else {
        setIsScrolling(false); // عند العودة للأعلى، تفعيل المكون
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // تأثير الرسوم المتحركة فقط إذا كان التمرير أقل من 500px
  useEffect(() => {
    if (!isScrolling) {
      if (!isAnimating) {
        setTimeout(() => {
          startAnimation();
        }, duration);
      }
    }
  }, [isAnimating, duration, startAnimation, isScrolling]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={className}
        key={currentWord}
      >
        {currentWord.split(" ").map((word, wordIndex) => (
          <motion.span
            key={word + wordIndex}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: wordIndex * 0.3,
              duration: 0.3,
            }}
            className="inline-block whitespace-nowrap"
          >
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={word + letterIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: wordIndex * 0.3 + letterIndex * 0.05,
                  duration: 0.2,
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
