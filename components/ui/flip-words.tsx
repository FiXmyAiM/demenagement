"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FlipWordsProps {
  words: string[];
  className?: string;
  duration?: number;
}

export const FlipWords = ({
  words,
  className,
  duration = 2000
}: FlipWordsProps) => {
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);

  // Update the height of the container based on the current word
  useEffect(() => {
    if (textRef.current) {
      setHeight(textRef.current.offsetHeight);
    }
  }, [index, words]);

  // Rotate through the words
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, duration);

    return () => clearInterval(timer);
  }, [words, duration]);

  return (
    <div
      className="relative inline-block overflow-hidden"
      style={{ height }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          ref={textRef}
          key={index}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={cn(
            "whitespace-nowrap font-bold",
            className
          )}
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}; 