import React, { useState, useEffect } from "react";

const messages: string[] = [
  "Brazilian Jiu Jitsu is more than just an Art.",
  "It's about Pride...",
  "Honor...",
  "Respect...",
  "And, Truth...",
  "Shinjitsu is coming soon...",
];

interface TypewriterProps {
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ className }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return; // Exit early if paused

    if (index === messages.length) {
      setReverse(true);
      setIndex(index - 1);
    } else if (index < 0) {
      setReverse(false);
      setIndex(index + 1);
    }

    if (!reverse && subIndex === messages[index].length + 1) {
      setIsPaused(true); // Pause when line is complete
      setTimeout(() => {
        setIsPaused(false); // Unpause after delay
        setIndex((prev) => (prev === messages.length - 1 ? 0 : prev + 1));
        setSubIndex(0);
      }, 2000); // 2 second delay, adjust as needed
    } else if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => (prev === 0 ? messages.length - 1 : prev - 1));
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, isPaused]);

  return (
    <div className={`typewriter ${className}`}>
      <h1>{`${messages[index].substring(0, subIndex)}${String.fromCharCode(
        9608
      )}`}</h1>
    </div>
  );
};

export default Typewriter;
