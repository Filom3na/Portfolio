"use client";

import { useState, useEffect } from 'react';

const AnimatedText = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    'Software Engineer',
    'Software Developer',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'Software Tester',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <span className="text-xl text-animation">
      {texts[currentTextIndex]}
    </span>
  );
};

export default AnimatedText;