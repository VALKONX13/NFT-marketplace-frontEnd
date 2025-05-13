"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FlipDigit = ({ value }: { value: number }) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={value}
        initial={{ rotateX: 90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        exit={{ rotateX: -90, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="block"
      >
        {value < 10 ? `0${value}` : value}
      </motion.span>
    </AnimatePresence>
  );
};

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-06-12T00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    const totalSeconds = Math.floor(difference / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      days: Math.max(days, 0),
      hours: Math.max(hours, 0),
      minutes: Math.max(minutes, 0),
      seconds: Math.max(seconds, 0),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "days", value: timeLeft.days },
    { label: "hours", value: timeLeft.hours },
    { label: "min", value: timeLeft.minutes },
    { label: "sec", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="grid grid-flow-col gap-5 text-center auto-cols-max"
    >
      {timeUnits.map((item) => (
        <div
          key={item.label}
          className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content w-[80px]"
        >
          <span className="countdown font-mono text-5xl leading-none h-[56px] flex items-center justify-center overflow-hidden">
            <FlipDigit value={item.value} />
          </span>
          <span className="mt-2 text-sm uppercase">{item.label}</span>
        </div>
      ))}
    </motion.div>
  );
};

export default CountdownTimer;
