import React, { useState, useEffect } from 'react';

const DecrambleText = ({ text, delay = 0, duration = 1.2, trigger = true }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = '01#@$%&*+=!?_[]{}/\\<>^~';

  useEffect(() => {
    if (!trigger) return;

    let isMounted = true;
    const startTimeout = setTimeout(() => {
      let iteration = 0;
      const interval = setInterval(() => {
        if (!isMounted) return;

        setDisplayText((prev) =>
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += text.length / (duration * 20); // step increment
      }, 50);

      return () => clearInterval(interval);
    }, delay);

    return () => {
      isMounted = false;
      clearTimeout(startTimeout);
    };
  }, [text, delay, duration, trigger]);

  return <span className="font-mono">{displayText}</span>;
};

export default DecrambleText;
