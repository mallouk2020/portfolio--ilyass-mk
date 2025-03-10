"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// استيراد Lottie فقط على المتصفح لمنع مشاكل SSR
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // منع تشغيل الكود على الخادم

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: "95%",
      filter: "hue-rotate(-25deg)", // تغيير اللون
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
