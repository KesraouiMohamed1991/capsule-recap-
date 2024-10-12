'use client';
import { useState, useEffect } from 'react';

const AnimatedText = ({ text, size='text-3xl' }) => {
  const originalText = text;
  const [displayedText, setDisplayedText] = useState(originalText);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    let currentIndex = 0;
    const interval = setInterval(() => {
      // Change one letter at a time
      const newText = displayedText.split('').map((char, index) => {
        // Replace the character with a random character if it's before the current index
        return index < currentIndex ? String.fromCharCode(Math.random() * (126 - 33) + 33) : char;
      }).join('');

      setDisplayedText(newText);

      currentIndex++;
      // Stop when all characters are replaced
      if (currentIndex > originalText.length) {
        clearInterval(interval);
        setDisplayedText(originalText); // Reset to original text after animation
        setIsHovering(false);
      }
    }, 10); // Change this value for speed
  };



    useEffect(() => {
    handleMouseEnter(); // Trigger animation on component mount
  }, []); // Empty dependency array means this runs once on mount

  return (
    <p
      className={`${size}  my-8 ${isHovering ? 'cursor-pointer transition-transform' : ''}`}
      onMouseEnter={handleMouseEnter}
      onLoad={handleMouseEnter}
      onMouseLeave={() => setDisplayedText(originalText)} // Reset on mouse leave
    >
      {displayedText}
    </p>
  );
};

export default AnimatedText;
