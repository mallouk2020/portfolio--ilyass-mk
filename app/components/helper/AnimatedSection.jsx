"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children, index = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // يتفعل مرة واحدة فقط عند ظهور العنصر
    threshold: 0.2, // يبدأ التأثير عندما يكون 20% من العنصر مرئيًا
  });

  return (
    <motion.div
      ref={ref} // ربط العنصر بـ Intersection Observer
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}} // التفعيل فقط عند الرؤية
      transition={{
        duration: 0.5,
        delay: index * 0.2, // التأخير التدريجي لكل عنصر
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
