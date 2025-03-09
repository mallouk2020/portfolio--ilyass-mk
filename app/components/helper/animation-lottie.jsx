"use client"

import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
      filter: 'hue-rotate(-25deg)', // تغيير اللون
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;
