// components/MouseFollowClient.js
'use client';  // Ensure this component runs on the client side

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const MouseFollowClient = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Function to track mouse movement
  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  // Add mousemove event listener on mount and clean up on unmount
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        width: '20px',  // Smaller size
        height: '20px',  // Smaller size
        borderRadius: '50%',
        backgroundColor: 'cyan',  // Teal color
        pointerEvents: 'none', // Ensure the circle doesn’t interfere with mouse events
        transform: 'translate(-5000%, -50%)', // Center the circle at the mouse pointer
        filter: 'blur(7px)',  // Adjust blur effect
      }}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,   // Adjust stiffness for tight follow
        damping: 30,      // Adjust damping for smoothness
      }}
      className='z-[9999]'
    />
  );
};

export default MouseFollowClient;
