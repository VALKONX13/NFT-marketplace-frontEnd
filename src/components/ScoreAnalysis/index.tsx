import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

function ScoreAnalysis() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-redark-purple/6 lg:border lg:border-redark-purple border-t border-b border-t-redark-purple border-b-redark-purple lg:rounded-[20px] px-8 py-5 w-full lg:max-w-3xl text-center relative">
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="pb-4">
        <p className="text-xs mb-1 font-azeret text-gray-400">Analysis</p>
        <p className="text-sm font-semibold tracking-wide font-azeret lg:mb-0 mb-4">
          SCORE SIGNIFICANCE
        </p>
      </motion.div>

      {/* Progress Bar */}
      <motion.div initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="mt-6 flex items-center justify-center relative">
        <div className="w-[90%] h-8 bg-[#3A3457] rounded-full overflow-hidden relative flex">
          <div className="w-[30%] bg-[#C9AEFF]" />
          <div className="w-[40%] bg-redark-purple" />
          <div className="w-[30%]" />
        </div>

        {/* Astronaut & Label */}
        <div className="absolute -top-5 lg:left-[58%] left-[60%] right-[20%] flex flex-col items-center">
          <div className="absolute top-[-20%] left-[20%] right-[10%]">
            <p className="text-xs font-mokoto absolute bottom-[10%] sm:left-[75px] left-[55px] xl:left-[85px]">
              801
            </p>
            <svg
              className="absolute left-[30%] z-10"
              width="84"
              height="51"
              viewBox="0 0 84 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 50L49.1816 1L84 1" stroke="white" />
            </svg>
          </div>
          <Image
            className="z-20 mt-4"
            src="/assets/img/astronaut.png"
            alt="score"
            width={40}
            height={40}
          />
        </div>
      </motion.div>

      {/* Labels */}
      <motion.div initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="mt-4 flex lg:flex-row flex-col justify-between gap-2 lg:gap-0 text-xs lg:px-12 font-azeret">
        <div className="flex flex-col">
          <p>EXPLORER TIER</p>
          <p className="text-gray-400">300-599</p>
        </div>
        <div className="flex flex-col">
          <p>CORE OPERATOR</p>
          <p className="text-gray-400">600-799</p>
        </div>
        <div className="flex flex-col">
          <p>ELITE ARCORBITER</p>
          <p className="text-gray-400">800-999</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ScoreAnalysis;
