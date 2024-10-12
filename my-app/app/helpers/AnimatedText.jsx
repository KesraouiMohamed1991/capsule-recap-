'use client';
import { useState, useEffect } from 'react';

const AnimatedText = ({ text, size = 'text-3xl' }) => {
  const originalText = text;
  const [displayedText, setDisplayedText] = useState(originalText);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    let currentIndex = 0;

    const interval = setInterval(() => {
      const newText = displayedText.split('').map((char, index) => {
        return index < currentIndex
          ? String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33)) // Random ASCII between 33 and 126
          : char;
      }).join('');

      setDisplayedText(newText);

      currentIndex++;
      // Stop when all characters are replaced
      if (currentIndex > originalText.length) {
        clearInterval(interval);
        setDisplayedText(originalText); // Reset to original text after animation
        setIsHovering(false);
      }
    }, 60); // Adjust speed of animation here
  };

  // Only set displayedText on mount
  useEffect(() => {
    setDisplayedText(originalText); // Ensure it's set on mount
  }, [originalText]); // Include originalText in dependency array to reset on change

  return (
    <p
      className={`${size} my-8 ${isHovering ? 'cursor-pointer transition-transform' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setDisplayedText(originalText)} // Reset to original text on mouse leave
    >
      {displayedText}
    </p>
  );
};

export default AnimatedText;
