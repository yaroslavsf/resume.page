'use client'
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface WithFadeInProps {
  children: React.ReactNode;
}

const WithFadeIn: React.FC<WithFadeInProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const [fadeProps, setFade] = useSpring(() => ({
    opacity: 0,
  }));

  useEffect(() => {
    const updateFade = () => {
      setFade({
        opacity: scrollY * 0.002,
      });
    };

    updateFade(); // Initial update

    window.addEventListener('scroll', updateFade);

    return () => {
      window.removeEventListener('scroll', updateFade);
    };
  }, [scrollY, setFade]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <animated.div style={{ ...fadeProps }}>{children}</animated.div>;
};

export default WithFadeIn;
