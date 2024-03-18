import React, { useState, useEffect } from 'react';

type AutoTypingProps = {
  text: string[];
};

const AutoTyping: React.FC<AutoTypingProps> = ({ text }) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100;
    const nextLineDelay = 2000;

    let timer: NodeJS.Timeout;

    if (charIndex === text[lineIndex].length) {
      timer = setTimeout(() => {
        setLineIndex((prevValue) => (prevValue + 1) % text.length);
        setCharIndex(0);
      }, nextLineDelay);
    } else {
      timer = setTimeout(() => {
        setCharIndex((prevValue) => prevValue + 1);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, lineIndex, charIndex]);

  return <p style={{ fontFamily: 'Courier New', color: 'lime' }}>{text[lineIndex].substring(0, charIndex)}</p>;
};

export default AutoTyping;
